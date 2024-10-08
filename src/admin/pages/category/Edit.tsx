/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Input from "../../../components/form-element/Input";
import Textarea from "../../../components/form-element/Textarea";
import { useUpdateCategoryMutation } from "../../../features/category/category";
import { RootState } from "../../../store/store";
import DefaultModal from "../../components/modal/DefaultModal";
import useModalOff from "../../hooks/modal/useModalOff";

function EditCategory() {
  // * Hokes
  const closeModal = useModalOff();
  const data: any = useSelector(
    (state: RootState) => state.modal.editModal.data
  );

  // * Local State
  const [name, setName] = useState(data?.name ?? "");
  const [description, setDescription] = useState(data?.description ?? "");

  // * Redux Queue
  const [updateCategory, { isLoading }] = useUpdateCategoryMutation();

  // * handle Submit Function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateCategory({
      id: data._id,
      name,
      description,
    })
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.dismiss();
        toast.success(res.message);
        setName("");
        setDescription("");
        closeModal();
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err.data.message);
        console.error(err);
      });
  };

  return (
    <DefaultModal title="Edit Category" size="1xl">
      <form onSubmit={handleSubmit}>
        <Input
          className="mb-5 "
          title="Category"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Textarea
          title="Description"
          value={description}
          onChange={(text) => setDescription(text)}
        />
        <button
          disabled={isLoading}
          className="bg-primaryColor text-[16px] text-white px-5 py-2 rounded-[5px] mt-5 w-full font-[font-500] flex items-center justify-center gap-3"
        >
          {isLoading && (
            <span className="loading loading-spinner text-white"></span>
          )}
          {isLoading ? "Loading..." : "Update"}
        </button>
      </form>
    </DefaultModal>
  );
}

export default EditCategory;
