export const stripHtml = (html: string) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

export const truncateText = (text: string, length: number) => {
  return stripHtml(text).length > length
    ? stripHtml(text).substring(0, length) + "..."
    : stripHtml(text);
};
