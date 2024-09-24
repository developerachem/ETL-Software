import dayjs from "dayjs";
import { useState } from "react";
import Input from "../../../components/form-element/Input";
import Pagination from "../../../components/pagination/Pagination";
import { useGetContactsQuery } from "../../../features/constct/contsct";
import { styles } from "../../../utils/cn";
import Skeleton from "../../components/skeleton/Skeleton";

interface ContactItemProps {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

function Message() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");

  // * Redux Hokes
  const { data, isLoading, refetch } = useGetContactsQuery({
    page,
    limit,
    search,
  });

  return (
    <div>
      <div className="flex justify-between mb-5">
        <div className="w-[30%] flex gap-5">
          <Input
            placeholder="Search by name or email..."
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <button
          className="bg-primaryColor px-5 rounded"
          onClick={refetch}
          title="Reload"
        >
          <img
            src="/sync.png"
            className="w-[20px] h-[20px] object-contain"
            alt=""
          />
        </button>
      </div>

      <div className="mt-5 ">
        <div className="overflow-y-auto">
          <div className="rounded overflow-hidden min-w-[1600px] ">
            <div className="flex justify-between gap-5 bg-primaryColor py-3 px-5">
              <p className="w-[100px] text-[16px] text-white font-[font-500]">
                Name
              </p>
              <p className="w-[120px] text-[16px] text-white font-[font-500]">
                Email
              </p>
              <p className="w-[250px] text-[16px] text-white font-[font-500]">
                Subject
              </p>
              <p className="w-[100px] text-[16px] text-white font-[font-500]">
                Date
              </p>
              <p className="w-[500px] text-[16px] text-white font-[font-500]">
                Messages
              </p>
            </div>

            {!isLoading &&
              data?.data?.map((item: ContactItemProps, index: number) => (
                <div
                  className={styles(
                    "flex bg-[#00000009] justify-between gap-5  py-3 px-5",
                    {
                      "bg-color200": index % 2,
                    }
                  )}
                  key={index}
                >
                  <p className="w-[100px] text-[14px] text-black ">
                    {item?.name}
                  </p>
                  <p className="w-[120px] text-[14px] text-black ">
                    {item.email}
                  </p>
                  <p className="w-[250px] text-[14px] text-black ">
                    {item?.subject}
                  </p>
                  <p className="w-[100px] text-[14px] text-black ">
                    {dayjs(item.createdAt).format("DD / MMM / YYYY")}
                  </p>
                  <p className="w-[500px] text-[14px] text-black ">
                    {item.message}
                  </p>
                </div>
              ))}

            {isLoading &&
              Array.from({ length: 10 }).map((_, index) => (
                <div
                  className={styles(
                    "flex bg-[#00000009] justify-between items-center gap-5  py-3 px-5",
                    {
                      "bg-color200": index % 2,
                    }
                  )}
                  key={index}
                >
                  <p className="w-[10px] text-[14px] text-black ">
                    <Skeleton height="h-[15px]" />
                  </p>
                  <p className="w-[100px] text-[14px] text-black ">
                    <Skeleton height="h-[15px]" />
                  </p>
                  <p className="w-[120px] text-[14px] text-black ">
                    <Skeleton height="h-[15px]" />
                  </p>
                  <p className="w-[250px] text-[14px] text-black ">
                    <Skeleton height="h-[15px]" />
                  </p>
                  <p className="w-[100px] text-[14px] text-black ">
                    <Skeleton height="h-[15px]" />
                  </p>
                  <p className="w-[500px] text-[14px] text-black ">
                    <Skeleton height="h-[15px]" />
                  </p>
                </div>
              ))}

            {data?.data?.length === 0 && (
              <div className="flex  items-center h-24 text-[18px]">
                No data found
              </div>
            )}
          </div>
        </div>

        {data?.totalItems > limit && (
          <div className="flex justify-start items-center">
            <Pagination
              totalItemsCount={data?.totalItems}
              setTake={setLimit}
              setStart={setPage}
              take={limit}
              activePage={page}
              setActivePage={setPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;
