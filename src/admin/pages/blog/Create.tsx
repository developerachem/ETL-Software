import { useState } from "react";
import toast from "react-hot-toast";
import Input from "../../../components/form-element/Input";
import Textarea from "../../../components/form-element/Textarea";
import { useCreateBlogMutation } from "../../../features/blog/blogs";
import DefaultModal from "../../components/modal/DefaultModal";
import useModalOff from "../../hooks/modal/useModalOff";

function BlogCreate() {
  // * Local State
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  // * Redux Queue
  const [createBlog, { isLoading }] = useCreateBlogMutation();
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

    formData.append("title", name);
    formData.append("description", description);
    formData.append("featureImage", image);

    createBlog(formData)
      .unwrap()
      .then((res) => {
        toast.dismiss();
        toast.success(res.message);
        setName("");
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
    <DefaultModal title="Create Blog" size="1xl">
      <form onSubmit={handleSubmit}>
        <Input
          className="mb-5 "
          title="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Textarea
          title="Description"
          value={description}
          onChange={(text) => setDescription(text)}
          required
        />

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

export default BlogCreate;
