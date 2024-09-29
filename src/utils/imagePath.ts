const imagePath = (file: string) => {
  const url = import.meta.env.VITE_API_URL;
  return url.split("api")[0] + file;
};

export default imagePath;
