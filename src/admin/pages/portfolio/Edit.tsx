import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Input from "../../../components/form-element/Input";
import Select from "../../../components/form-element/Select";
import Textarea from "../../../components/form-element/Textarea";
import { useGetCategoryQuery } from "../../../features/category/category";
import { useUpdatePortfolioMutation } from "../../../features/portfolio/portfolio";
import imagePath from "../../../utils/imagePath";
import DefaultModal from "../../components/modal/DefaultModal";
import useModalOff from "../../hooks/modal/useModalOff";

function PortfolioEdit() {
  const data = useSelector((state) => state.modal.editModal.data);

  console.log(data);

  // * Local State
  const [name, setName] = useState(data?.name || "");
  const [description, setDescription] = useState(data?.description || "");
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState(data?.category || "");

  // * Redux Queue
  const [updatePortfolio, { isLoading }] = useUpdatePortfolioMutation();
  const { data: categories } = useGetCategoryQuery(null);

  // * Hokes
  const closeModal = useModalOff();

  // * handle Submit Function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    if (image) {
      formData.append("featureImage", image);
    }

    updatePortfolio({ id: data?._id, formData })
      .unwrap()
      .then((res) => {
        toast.dismiss();
        toast.success(res.message);
        setName("");
        setCategory("");
        setImage(null);
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
    <DefaultModal title="Edit Portfolio" size="1xl">
      <form onSubmit={handleSubmit}>
        <Input
          className="mb-5 "
          title="Portfolio"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Select
          title="Category"
          className="mb-5"
          onChange={(text) => setCategory(text)}
          value={category}
          required
        >
          {categories?.data?.map((item: { name: string }, index: number) => (
            <option key={index} value={item?.name}>
              {item?.name}
            </option>
          ))}
        </Select>

        <label className="block mt-3 border border-primaryColor h-[100px] w-[100px] p-2 rounded border-dashed mb-3 cursor-pointer">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : imagePath(data?.featureImage) || "/upload-icon.png"
            }
            className=""
          />
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setImage(e.target.files[0]);
              }
            }}
          />
        </label>

        <Textarea
          title="Description"
          value={description}
          onChange={(text) => setDescription(text)}
          required
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

export default PortfolioEdit;
