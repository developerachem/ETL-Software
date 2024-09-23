import { useState } from "react";
import toast from "react-hot-toast";
import Input from "../../../components/form-element/Input";
import Select from "../../../components/form-element/Select";
import Textarea from "../../../components/form-element/Textarea";
import { useGetCategoryQuery } from "../../../features/category/category";
import { useCreatePortfolioMutation } from "../../../features/portfolio/portfolio";
import DefaultModal from "../../components/modal/DefaultModal";
import useModalOff from "../../hooks/modal/useModalOff";

function PortfolioCreate() {
  // * Local State
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState("");

  // * Redux Queue
  const [createPortfolio, { isLoading }] = useCreatePortfolioMutation();
  const { data: categories } = useGetCategoryQuery(null);
  console.log(image);

  // * Hokes
  const closeModal = useModalOff();

  // * handle Submit Function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) {
      toast.error("Image is required");
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("featureImage", image);

    createPortfolio(formData)
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
    <DefaultModal title="Create Portfolio" size="1xl">
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
            src={image ? URL.createObjectURL(image) : "/upload-icon.png"}
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

export default PortfolioCreate;
