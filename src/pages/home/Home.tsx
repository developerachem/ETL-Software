import { TiArrowBackOutline } from "react-icons/ti";
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

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import { useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <div className="py-[100px] bg-primaryColor">
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

      <div className="lg:h-[100px]" />
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
    <div className="w-full bg-white p-5 rounded-lg shadow-xl">
      <div className="">
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
            <TiArrowBackOutline
              size={20}
              className="rotate-[130deg] text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Slider Box
// const SliderBox = () => {
//   return (
//     <div className="bg-white p-5 shadow border w-full flex flex-col justify-center items-center gap-5 rounded-lg cursor-pointer ">
//       <img
//         src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/wp-content/uploads/2024/03/badge_3-104x0.png"
//         alt=""
//         className="w-[70%] object-contain"
//       />
//       <h1 className="font-[font-500]">IHM Africa</h1>
//     </div>
//   );
// };
