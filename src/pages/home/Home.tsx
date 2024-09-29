import { Link } from "react-router-dom";
import ai from "../../assets/image/ai.jpg";
import dataEng from "../../assets/image/data-eng.jpg";
import devops from "../../assets/image/devops.jpg";
import erp from "../../assets/image/erp.jpg";
import mobile from "../../assets/image/mobile-app.jpg";
import web from "../../assets/image/web.jpg";
import BannerSlider from "../../components/bannerSlider/BannerSlider";
import Title from "../../components/title/Title";
import Container from "../../container/Container";

import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import { styles } from "../../utils/cn";
import { portfolioType } from "../portfolio/Portfolio";

function Home() {
  const windowWidth = useWindowWidth(468);
  const [scrollPosition, setScrollPosition] = useState(0);
  const animationPosition = windowWidth ? 51 : 68;
  // const animationPosition = 68;
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  // const settings = {
  //   // dots: true,
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   // speed: 1000,
  //   autoplaySpeed: 2000,
  //   // cssEase: "linear",

  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / height) * 100;
      setScrollPosition(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="banner">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center w-full h-[650px] sm:h-[700px] md:h-[85vh] ">
            <div className="w-full md:w-[50%]">
              <div className="flex md:block justify-start mt-10 md:mt-0">
                <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-left xl:text-[70px] text-[#153441] font-[font-500] leading-[30px] md:leading-[50px] m xl:leading-[60px] mb-5">
                  $869 M funding raised by our apps
                  <span className="ml-3 md:ml-0 text-[30px] sm:text-[40px] md:text-[50px] md:block lg:text-[60px] xl:text-[70px] text-center md:text-left text-primaryColor font-[font-It]">
                    in 1 year!
                  </span>
                </h1>
              </div>

              <p className="text-[14px] md:text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                est veritatis sit numquam blanditiis magnam quos ex labore ea
                similique in ipsam a, veniam repellat accusantium.
              </p>

              {/* <div className="text-center md:text-left">
                <Link
                  to="/"
                  className="btn mt-5 rounded-full bg-primaryColor border-primaryColor hover:bg-color800  px-8"
                >
                  <div className="flex items-center gap-3 font-[font-600] text-[16px] text-white">
                    Learn More
                    <TiArrowBackOutline
                      size={25}
                      className="rotate-[130deg] text-white"
                    />
                  </div>
                </Link>
              </div> */}
            </div>

            <BannerSlider />
          </div>
        </Container>
      </div>

      <div className="py-[100px] bg-primaryColor rounded-3xl">
        <Container>
          <div className="w-full">
            <div className="flex justify-start">
              <Title
                title="Why Excel for your nex project ?"
                titleClass="text-white"
                booletClass="bg-[#ffffff77]"
              />
            </div>

            <div className="mt-5 grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
            </div>

            <div className="mt-24 text-center">
              <Link
                to="/"
                className="text-white font-[font-500] underline text-[20px] hover:tracking-wider transition-all"
              >
                Sea for yourself!
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-[200px] work-background">
        <Container>
          <div className="sm:w-[75%] m-auto xmd:w-full grid xmd:grid-cols-2 xl:grid-cols-3 gap-10 mt-48">
            <PortfolioBox mt="" />
            <div className="hidden xl:block" />
            <PortfolioBox mt="xmd:mt-48" />
            <div className="hidden xl:block" />
            <PortfolioBox mt="" />
            <div className="hidden xl:block" />
            <PortfolioBox mt="xmd:mt-48 xl:mt-0" />
            <div className="hidden xl:block" />
            <PortfolioBox mt="xl:mt-28" />
            <div className="hidden xl:block" />
          </div>
        </Container>
      </div>

      <div
        className={styles("pb-[300px] xmd:py-[300px] bg-transparent", {
          "bg-color600 pt-[100px]": scrollPosition > animationPosition,
        })}
        style={{ transition: "0.5s" }}
      >
        <Container>
          <div className="w-full">
            <div
              className={styles(
                "flex w-full justify-between items-center gap-5 translate-y-[100px]",
                { "translate-y-[0px]": scrollPosition > animationPosition }
              )}
              style={{ transition: "0.5s" }}
            >
              <div className="min-w-[90px] xsm:min-w-[120px] sm:min-w-[180px] lg:min-w-[300px]">
                <h1 className="text-[15px] xsm:text-[20px] sm:text-[30px] lg:text-[40px] xl:text-[50px] font-[font-500]">
                  Take a Look at what
                </h1>
              </div>

              <div className="bg-primaryColor h-[1px] w-full relative flex justify-center items-center">
                <div
                  className={styles(
                    "bg-primaryColor h-[100px] xsm:h-[130px] lg:h-[150px] xl:h-[200px] w-[100px] xsm:w-[130px] lg:w-[150px] xl:w-[200px] rounded-full absolute flex justify-center items-center text-white text-[10px] xsm:text-[13px] lg:text-[15px] xl:text-[17px] font-[font-500] translate-y-[200px]",
                    {
                      "translate-y-[0px] bg-[#F29B1D]":
                        scrollPosition > animationPosition,
                    }
                  )}
                  style={{ transition: "1s" }}
                >
                  View All Project
                </div>
              </div>

              <div className="min-w-[90px] xsm:min-w-[120px] sm:min-w-[180px] lg:min-w-[300px]">
                <h1 className="text-[15px] xsm:text-[20px] sm:text-[30px] lg:text-[40px] xl:text-[50px] font-[font-500]">
                  We can do for you
                </h1>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="pt-[50px] pb-[20px] xsm:py-[100px] bg-primaryColor">
        <Container>
          <div className="w-full">
            <Title
              title="Our Services"
              titleClass="text-white"
              booletClass="bg-[#ffffff77]"
            />

            <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
              <ServiceBox
                content={{
                  name: "Web App Development",
                  image: web,
                  desc: "Build secure, scalable web applications tailored to your business needs, enhancing user engagement, driving growth, and delivering exceptional digital experiences",
                  link: "",
                }}
              />
              <ServiceBox
                content={{
                  name: "Mobile App Development",
                  image: mobile,
                  desc: "Create dynamic, user-friendly mobile apps for iOS and Android, designed to engage users, optimize performance, and expand your brand’s reach",
                  link: "",
                }}
              />
              <ServiceBox
                content={{
                  name: "ERP & CRM",
                  image: erp,
                  desc: "Streamline operations, improve customer management, and enhance decision-making with ERP and CRM solutions, providing a foundation for scalability and growth",
                  link: "",
                }}
              />
              <ServiceBox
                content={{
                  name: "Devops",
                  image: devops,
                  desc: "Maximize efficiency with DevOps services, including CI/CD, infrastructure automation, and monitoring, ensuring faster releases, improved collaboration, and application reliability",
                  link: "",
                }}
              />
              <ServiceBox
                content={{
                  name: "Generative AI",
                  image: ai,
                  desc: "Leverage expertise in Generative AI to develop intelligent solutions that automate processes, enhance customer experiences, and provide valuable insights",
                  link: "",
                }}
              />
              <ServiceBox
                content={{
                  name: "Data Engineering",
                  image: dataEng,
                  desc: "Transform raw data into actionable insights with robust data pipelines, quality management, and scalable architectures, empowering data-driven decision-making",
                  link: "",
                }}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* <div className="py-[100px]">
        <Container>
          <div className="w-full">
            <marquee className="flex">
              <div className="flex items-center gap-5">
                <SliderBox />
                <SliderBox />
                <SliderBox />
                <SliderBox />
                <SliderBox />
                <SliderBox />
                <SliderBox />
              </div>
            </marquee>
            <div className="">
              <div className="">
                <Slider {...settings}>
                  <SliderBox />
                  <SliderBox />
                  <SliderBox />
                  <SliderBox />
                  <SliderBox />
                  <SliderBox />
                  <SliderBox />
                </Slider>
              </div>
            </div>
          </div>
        </Container>
      </div> */}
    </>
  );
}

export default Home;

interface serviceProps {
  content: {
    name: string;
    desc: string;
    image: string;
    link: string;
  };
}

// * Service Box
const ServiceBox = ({ content }: serviceProps) => {
  return (
    <div className="w-full bg-white p-5 rounded-lg shadow-xl hover:-translate-y-3 service-box">
      <div className="overflow-hidden">
        <img
          src={
            content?.image ? content?.image : "https://via.placeholder.com/150"
          }
          alt=""
          className="h-[200px] w-full object-cover"
        />

        <h1 className="text-center text-primaryColor mt-3 font-[font-500] text-[20px] capitalize">
          {content?.name || "--"}
        </h1>
        <p className="text-[15px] text-center">{content?.desc}</p>

        <div className="flex justify-center">
          <Link
            to={content?.link || "/"}
            className="mt-5 font-[font-600] hover:font-[font-it] transition-all text-primaryColor flex gap-2 items-center border py-2 px-5 border-primaryColor rounded-full hover:bg-primaryColor hover:text-white"
          >
            Learn More{" "}
            {/* <TiArrowBackOutline
              size={20}
              className="rotate-[130deg] text-white"
            /> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

// * Project Box
const ProjectBox = () => {
  return (
    <div className="bg-[#ffffff40] p-5 rounded-xl">
      <p className="text-[18px] font-[font-400] text-white flex gap-2 mb-10">
        <span className="h-[10px] w-[10px] bg-green-900 block rounded-full mt-2" />{" "}
        Mobile Apps Developer
      </p>

      <h1 className="font-[font-600] text-[35px] text-white">100+</h1>
    </div>
  );
};

// * Portfolio Box
const PortfolioBox = ({ mt }: { mt: string; item?: portfolioType }) => {
  return (
    <div className="">
      <div
        className={`border p-10 pt-24 bg-[#cadbf3] shadow-xl border-[#00000030] rounded-xl ${mt}`}
      >
        <img
          src="/TUSO.png"
          alt=""
          className="w-full h-full object-cover border-b"
        />

        <h1 className="text-[35px] font-[font-600] text-[#000000] mt-5 text-center">
          TUSO
        </h1>
      </div>
    </div>
  );
};
