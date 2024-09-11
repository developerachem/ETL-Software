import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../container/Container";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-[#F4F5FA] pb-5 lg:pb-24">
      <Container>
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
        </div>
      </Container>
    </div>
  );
}

export default Blog;

const BlogBox = () => {
  return (
    <div className="rounded-lg shadow border overflow-hidden blog-box">
      <div className="w-full h-[200px] overflow-hidden relative blog-triangle-top-left">
        <img
          src="https://static.wixstatic.com/media/84b06e_104b16bb6c3e4a6b8897ecc84e23a44e~mv2.png/v1/fill/w_925,h_618,al_c,q_90,enc_auto/84b06e_104b16bb6c3e4a6b8897ecc84e23a44e~mv2.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 bg-white">
        <div className="flex justify-between mb-3">
          <div className="text-[14px] font-[font-500] text-gray-700">
            By John Doe
          </div>

          <div className="text-[14px] font-[font-500] text-gray-700">
            10 March, 2022
          </div>
        </div>
        <Link
          to="/"
          className="text-[18px] font-[font-600] mb-3 block hover:text-primaryColor"
          style={{ lineHeight: "20px" }}
        >
          Lorem ipsum dolor, sit amet consectetur
        </Link>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          facere veritatis totam velit quia dignissimos aperiam! Optio nemo
          quidem eius. Eum, tenetu...
        </p>
      </div>
    </div>
  );
};
