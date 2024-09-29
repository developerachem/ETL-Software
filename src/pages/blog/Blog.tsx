import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../../admin/components/skeleton/Skeleton";
import bannerImage from "../../assets/image/about-banner.png";
import Container from "../../container/Container";
import { useGetBlogsAllQuery } from "../../features/blog/blogs";
import { URLBlogSingle } from "../../routes/url";
import imagePath from "../../utils/imagePath";
import { truncateText } from "../../utils/textFormate";

interface BlogItemProps {
  title: string;
  slug: string;
  featureImage: string;
  createdAt: string;
  userName: string;
  description: string;
}
function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // * Local State
  const [limit, setLimit] = useState(8);

  // * Redux Hokes
  const { data, isLoading } = useGetBlogsAllQuery({ limit });

  return (
    <>
      <div className="h-[400px] sm:h-[500px] lg:h-[80vh] bg-[#f2f6fa] about-banner">
        <Container>
          <div className="w-full">
            <div className="grid sm:grid-cols-2 gap-5 items-center">
              <div className="">
                <h1 className="font-[font-it] text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-primaryColor mb-5 text-center sm:text-left leading-[30px] md:leading-[40px] xl:leading-[55px]">
                  Building Mobile Apps That Make an Impact
                </h1>
                <p className="text-[15px] lg:text-[18px] xl:text-[20px] text-[#4a4a4a] text-center sm:text-left">
                  This is a simple boilerplate for ReactJS with TailwindCSS.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid non eum ipsam quae quam fugiat qui quas, tempora in
                  quo, sint eaque quisquam consequuntur quod blanditiis
                  necessitatibus ullam maiores molestiae optio.
                </p>
                <div className="text-center sm:text-left">
                  <button className="bg-primaryColor py-3 px-6 rounded-full text-white mt-5 font-[font-500]">
                    Let's Talk
                  </button>
                </div>
              </div>

              <div className="hidden sm:flex justify-end">
                <img className="w-[100%]" src={bannerImage} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="pt-24 bg-[#F4F5FA] pb-5 lg:pb-24">
        <Container>
          <div className="w-full">
            {isLoading && (
              <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    className="rounded-lg shadow border overflow-hidden blog-box w-full"
                    key={index}
                  >
                    <div className="w-full h-[200px] overflow-hidden relative ">
                      <Skeleton height="h-[200px]" />
                    </div>

                    <div className="p-5 bg-white">
                      <div className="flex justify-between mb-3">
                        <div className="text-[14px] font-[font-500] text-gray-700">
                          <Skeleton height="h-[20px] w-[50px]" />
                        </div>

                        <div className="text-[14px] font-[font-500] text-gray-700">
                          <Skeleton height="h-[20px] w-[50px]" />
                        </div>
                      </div>
                      <p className="text-[20px] font-[font-600] mb-3 block hover:text-primaryColor">
                        <Skeleton height="h-[20px] w-full" />
                      </p>
                      <p className="text-[14px] text-[#00000090] mt-5">
                        <Skeleton height="h-[15px] w-full mt-1" />
                        <Skeleton height="h-[15px] w-full mt-1" />
                        <Skeleton height="h-[15px] w-full mt-1" />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!isLoading && (
              <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {data?.data?.map((item: BlogItemProps, index: number) => (
                  <React.Fragment key={index}>
                    <BlogBox item={item} />
                  </React.Fragment>
                ))}
              </div>
            )}

            {data?.totalItems > limit && (
              <div className="mt-5 text-center">
                <button
                  onClick={() => {
                    setLimit(limit + 4);
                  }}
                  className="py-3 bg-primaryColor px-5 font-[font-500] text-white rounded"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Blog;

const BlogBox = ({ item }: { item: BlogItemProps }) => {
  const truncatedText = truncateText(item?.description, 180);

  return (
    <div className="rounded-lg shadow border overflow-hidden blog-box bg-white">
      <div className="w-full h-[200px] overflow-hidden relative blog-triangle-top-left">
        <img
          src={imagePath(item.featureImage)}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 bg-white">
        <div className="flex justify-between mb-3">
          <div className="text-[14px] font-[font-500] text-gray-700">
            {item.userName}
          </div>

          <div className="text-[14px] font-[font-500] text-gray-700">
            {dayjs(item.createdAt).format("DD MMMM, YYYY")}
          </div>
        </div>
        <Link
          to={URLBlogSingle(item.slug)}
          className="text-[20px] font-[font-600] mb-3 block hover:text-primaryColor"
          style={{ lineHeight: "20px" }}
        >
          {item?.title}
        </Link>
        <div className="text-[14px] text-[#00000090]">{truncatedText}</div>
      </div>
    </div>
  );
};
