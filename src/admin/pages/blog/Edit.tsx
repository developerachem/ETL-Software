import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Editor from "../../../components/form-element/Editor";
import Input from "../../../components/form-element/Input";
import { useUpdateBlogMutation } from "../../../features/blog/blogs";
import { RootState } from "../../../store/store";
import imagePath from "../../../utils/imagePath";
import DefaultModal from "../../components/modal/DefaultModal";
import useModalOff from "../../hooks/modal/useModalOff";

function BlogEdit() {
  // * Hokes
  const closeModal = useModalOff();
  const data: any = useSelector(
    (state: RootState) => state.modal.editModal.data
  );

  // * Local State
  const [name, setName] = useState(data.title || "");
  const [description, setDescription] = useState(data.description || "");
  const [image, setImage] = useState<File | null>(null);

  // * Redux Queue
  const [updateBlog, { isLoading }] = useUpdateBlogMutation();

  // * handle Submit Function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description || description === "<p></p>") {
      toast.error("Description is required");
      return;
    }

    const formData = new FormData();

    formData.append("id", data?._id);
    formData.append("title", name);
    formData.append("description", description);
    if (image) {
      formData.append("featureImage", image);
    }

    updateBlog({ id: data?._id, formData })
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
    <DefaultModal title="Edit Blog" size="5xl">
      <form onSubmit={handleSubmit}>
        <Input
          className="mb-5 "
          title="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Editor state={description} setState={setDescription} />

        <label className="block mt-3 border border-primaryColor h-[100px] w-[100px] p-2 rounded border-dashed mb-3 cursor-pointer">
          <img
            src={
              image ? URL.createObjectURL(image) : imagePath(data?.featureImage)
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

export default BlogEdit;
