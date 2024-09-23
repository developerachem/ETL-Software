import { useState } from "react";
import toast from "react-hot-toast";
import Input from "../../../components/form-element/Input";
import Textarea from "../../../components/form-element/Textarea";
import { useCreateCategoryMutation } from "../../../features/category/category";
import DefaultModal from "../../components/modal/DefaultModal";
import useModalOff from "../../hooks/modal/useModalOff";

function CategoryCreate() {
  // * Local State
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // * Redux Queue
  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  // * Hokes
  const closeModal = useModalOff();

  // * handle Submit Function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createCategory({
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
    <DefaultModal title="Create Category" size="1xl">
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
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </DefaultModal>
  );
}

export default CategoryCreate;
