import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Input from "../../../components/form-element/Input";
import Select from "../../../components/form-element/Select";
import Pagination from "../../../components/pagination/Pagination";
import { useGetCategoryQuery } from "../../../features/category/category";
import { openAddModal } from "../../../features/modal/modal-slice";
import {
  useDeletePortfolioMutation,
  useGetPortfolioQuery,
} from "../../../features/portfolio/portfolio";
import { RootState } from "../../../store/store";
import modalType from "../../../utils/modalsType";
import Skeleton from "../../components/skeleton/Skeleton";
import PortfolioCreate from "./Create";

interface itemProps {
  _id: string;
  name: string;
  category: string;
  description: string;
  featureImage: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}
function Portfolio() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // * Hokes
  const dispatch = useDispatch();
  const { addModal } = useSelector((state: RootState) => state.modal);

  // * Redux Query
  const { data, isLoading } = useGetPortfolioQuery({
    search,
    limit,
    page,
    category,
  });
  const { data: categories } = useGetCategoryQuery(null);

  // * Open Create Modal
  const openCreateModal = () => {
    dispatch(
      openAddModal({
        modalId: modalType.portfolioCreate,
      })
    );
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        <div className="w-[50%] flex gap-5">
          <Input
            placeholder="Search..."
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select value={category} onChange={(text) => setCategory(text)}>
            {categories?.data?.map((item: { name: string }, index: number) => (
              <option key={index} value={item?.name}>
                {item?.name}
              </option>
            ))}
          </Select>
        </div>

        <button
          onClick={openCreateModal}
          className="bg-primaryColor py-2 px-5 rounded text-white font-[font-500]"
        >
          Crete New
        </button>
      </div>

      {isLoading && (
        <div className="grid grid-cols-5 gap-5">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
            <div className="shadow-lg  relative rounded-lg overflow-hidden bg-white">
              <Skeleton height={"h-[200px]"} />
              <div className="p-3">
                <h1 className="font-[font-500]">
                  <Skeleton height={"h-[20px]"} />
                </h1>
                <p className="text-[15px]">
                  <Skeleton height={"h-[20px] mt-2"} />
                </p>
                <p className="text-[15px] mt-5">
                  <Skeleton height={"h-[20px]"} />
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {data?.data?.length > 0 && (
        <div className="grid grid-cols-5 gap-5">
          {data?.data?.map((item: itemProps, index: number) => (
            <React.Fragment key={index}>
              <PortfolioBox item={item} />
            </React.Fragment>
          ))}

          {data?.data?.length === 0 && (
            <div className="flex p-1 items-center text-[18px] h-24">
              No data found
            </div>
          )}
        </div>
      )}

      {data?.data?.length === 0 && (
        <div className="flex p-1 items-center text-[18px] h-24">
          No data found
        </div>
      )}

      {data?.totalItems > limit && (
        <div className="flex justify-start items-center mt-5">
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

      {addModal.modalId === modalType.portfolioCreate && <PortfolioCreate />}
    </>
  );
}

export default Portfolio;

const PortfolioBox = ({ item }: { item: itemProps }) => {
  const [deletePortfolio] = useDeletePortfolioMutation();

  // * Handle Delete Category
  const handleDeletePortfolio = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--primaryColor)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deletePromise = deletePortfolio(id)
          .unwrap()
          .then(() => {
            toast.promise(deletePromise, {
              loading: "Submitting data...",
              success: <b>Deleted Successfully</b>,
              error: <b>Could not Delete data.</b>,
            });
          });
      }
    });
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white admin-portfolio-box relative">
      <div className="h-[200px] w-full ">
        <img
          src={"http://192.168.111.46:5050/" + item.featureImage}
          alt=""
          className="object-cover w-full h-full"
        />

        <div className="absolute top-0 p-3 bg-[#00000090] w-full h-full flex justify-end z-50 portfolio-hovered-item">
          <div className="flex flex-col gap-3 w-[100px]">
            <button
              onClick={() => toast.error("Work in Progress")}
              className="py-2 px-3 rounded flex items-center gap-2 bg-white font-[font-400]"
            >
              <FaEdit />
              Edit
            </button>
            <button
              className="py-2 px-3 rounded flex items-center gap-2 bg-white font-[font-400]"
              onClick={() => handleDeletePortfolio(item?._id)}
            >
              <FaTrash />
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="p-3">
        <h1 className="font-[font-500]">{item.name}</h1>
        <p className="text-[15px]">{item?.category || "--"}</p>
        <p className="text-[15px] mt-5">{item.description}</p>
      </div>
    </div>
  );
};
