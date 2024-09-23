import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Input from "../../../components/form-element/Input";
import Pagination from "../../../components/pagination/Pagination";
import {
  useDeleteCategoryMutation,
  useGetCategoryForAdminQuery,
} from "../../../features/category/category";
import {
  openAddModal,
  openEditModal,
} from "../../../features/modal/modal-slice";
import { RootState } from "../../../store/store";
import modalType from "../../../utils/modalsType";
import CategoryCreate from "./Create";
import EditCategory from "./Edit";

export interface itemProps {
  _id: string;
  name: string;
  description: string | undefined;
}
function Category() {
  // * Local State
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  // * Hokes
  const dispatch = useDispatch();
  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  // * Redux Query
  const { data, isLoading } = useGetCategoryForAdminQuery({
    search,
    page,
    limit,
  });

  // * Open Category Create Modal
  const openCategoryCreateModal = () => {
    dispatch(
      openAddModal({
        modalId: modalType.categoryCreate,
      })
    );
  };

  // * Return JSX
  return (
    <div className="">
      <div className="mb-5 flex justify-between items-center">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search..."
          className="w-[30%]"
        />

        <button
          onClick={openCategoryCreateModal}
          className="bg-primaryColor text-[16px] text-white px-5 py-2 rounded-[5px] font-[font-500]"
        >
          Add New
        </button>
      </div>

      {!isLoading && (
        <div className="grid grid-cols-5 gap-5">
          {data?.data?.map((item: itemProps, index: number) => (
            <React.Fragment key={index}>
              <Box item={item} />
            </React.Fragment>
          ))}
        </div>
      )}

      {data?.data?.length === 0 && (
        <div className="flex p-1 items-center text-[18px] h-24">
          No data found
        </div>
      )}

      {isLoading && (
        <div className="grid grid-cols-5 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
            <React.Fragment>
              <div className="max-w-sm mx-auto w-full">
                <div className="animate-pulse">
                  <div className="bg-gray-300 h-24 rounded-md"></div>
                </div>
              </div>
            </React.Fragment>
          ))}
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

      {modalType.categoryCreate === addModal.modalId && <CategoryCreate />}
      {modalType.categoryEdit === editModal.modalId && <EditCategory />}
    </div>
  );
}

export default Category;

// * Category Card
const Box = ({ item }: { item: itemProps }) => {
  // * Redux Query
  const [deleteCategory] = useDeleteCategoryMutation();

  // * Hokes
  const dispatch = useDispatch();

  // * Handle Edit Category
  const handleEditCategory = (data: itemProps) => {
    dispatch(
      openEditModal({
        modalId: modalType.categoryEdit,
        data: data,
      })
    );
  };

  // * Handle Delete Category
  const handleDeleteCategory = (id: string) => {
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
        const deletePromise = deleteCategory(id)
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
    <div className="bg-white p-3 shadow-lg rounded-md relative overflow-hidden category-box">
      <p className="text-[16px] font-[font-500]">{item?.name}</p>
      <p className="text-[14px] text-[#00000099]">{item.description || "--"}</p>

      <div className="flex gap-3 absolute top-0 right-0 category-action justify-end bg-[#00000099] h-full w-full p-5">
        <button
          onClick={() => handleEditCategory(item)}
          className="py-2 px-3 h-[30px] rounded flex items-center gap-2 bg-white font-[font-400]"
        >
          <FaEdit />
          Edit
        </button>
        <button
          className="py-2 px-3 h-[30px] rounded flex items-center gap-2 bg-white font-[font-400]"
          onClick={() => handleDeleteCategory(item?._id)}
        >
          <FaTrash />
          Delete
        </button>
      </div>
    </div>
  );
};
