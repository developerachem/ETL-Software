import React, { useEffect, useState } from "react";
import bannerImage from "../../assets/image/about-banner.png";
import Title from "../../components/title/Title";
import Container from "../../container/Container";
import { useGetCategoryQuery } from "../../features/category/category";
import { useGetPortfolioQuery } from "../../features/portfolio/portfolio";
import { styles } from "../../utils/cn";
import imagePath from "../../utils/imagePath";

function Portfolio() {
  // * Local State
  const [selected, setSelected] = useState("");

  // * Redux Hokes
  const { data: category } = useGetCategoryQuery(null);
  const { data: portfolios } = useGetPortfolioQuery({ category: selected });

  // * Page Scroll From Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <div className="pt-24 bg-[#F4F5FA] pb-44">
        <Container>
          <div className="w-full">
            <Title title="Portfolios" />

            <div className="mt-24 flex flex-wrap w-full mb-2 gap-3">
              <button
                onClick={() => setSelected("")}
                className={styles(
                  "py-1.5 border rounded-lg px-4 hover:bg-primaryColor transition-all hover:text-white font-[font-500]",
                  { "bg-primaryColor text-white": selected === "" }
                )}
              >
                All
              </button>
              {category?.data?.map((item: { name: string }, index: number) => (
                <button
                  onClick={() => setSelected(item?.name)}
                  key={index}
                  className={styles(
                    "py-1.5 border rounded-lg px-4 hover:bg-primaryColor transition-all hover:text-white font-[font-500]",
                    { "bg-primaryColor text-white": selected === item?.name }
                  )}
                >
                  {item?.name}
                </button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
              {portfolios?.data?.map((item, index: number) => (
                <React.Fragment key={index}>
                  <PortfolioBox
                    item={{
                      title: item?.name,
                      desc: item?.description,
                      image: imagePath(item?.featureImage),
                    }}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Portfolio;

export interface portfolioType {
  item: {
    title: string;
    desc: string;
    image: string;
  };
}
export const PortfolioBox = ({ item }: portfolioType) => {
  return (
    <div className="shadow-lg p-5 bg-white portfolio-box relative rounded-lg overflow-hidden transition-all">
      <img
        src={item.image}
        alt=""
        className="h-[300px] object-contain transition-all"
      />
      <div className="content">
        <p>{item.desc}</p>
      </div>
      <h1 className="font-[font-500] text-[20px] text-center mt-5 border-t pt-3 flex justify-center items-center">
        {item.title}
      </h1>
    </div>
  );
};
