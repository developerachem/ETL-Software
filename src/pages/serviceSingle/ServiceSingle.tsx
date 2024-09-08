import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import {
  FaAppStoreIos,
  FaApple,
  FaGooglePlay,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../components/title/Title";
import Container from "../../container/Container";
import { URLContact } from "../../routes/url";
import { styles } from "../../utils/cn";

function ServiceSingle() {
  const [init, setInit] = useState(false);
  const [active, setActive] = useState("frontend");
  const [check, setCheck] = useState(0);

  // * Particl Initiate
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(false);
    });
  }, []);

  return (
    <>
      <div className="h-[70vh] relative bg-[#F4F5FA]">
        <Container>
          <div className="w-full md:w-[60%] ">
            <h1 className="font-[font-it] text-[30px] md:text-[50px] xl:text-[60px] text-primaryColor mb-5 text-center md:text-left">
              Building Mobile Apps That Make an Impact
            </h1>
            <h1 className="text-[15px] sm:text-[17px] md:text-[20px] lg:text-[25px] xl:text-[35px] font-[font-500] text-center md:text-left">
              Custom mobile solutions designed to engage users and drive growth.
            </h1>

            <ul className="flex justify-center md:justify-start items-center gap-2 mt-10">
              <li>-----</li>
              <li>
                <FaApple size={25} />
              </li>
              <li>
                <IoLogoAndroid size={25} />
              </li>
              <li>
                <FaGooglePlay size={20} />
              </li>
              <li>
                <FaAppStoreIos size={20} />
              </li>
            </ul>
          </div>
        </Container>

        <div className="absolute top-[70px] sm:top-[100px] md:top-[200px] 2xl:top-[250px] right-[120px] md:right-[200px] xl:right-[300px] 2xl:right-[400px]">
          <div className="flex justify-center items-center relative">
            <Link
              to={URLContact()}
              className="bg-primaryColor flex justify-center items-center h-[80px] md:h-[100px] w-[80px] md:w-[100px] absolute z-40 rounded-full shadow text-[14px] xl:text-[17px] font-[font-500] text-white"
            >
              Let's Talk
            </Link>

            <div className="h-[50px] md:h-[80px] xl:h-[100px] 2xl:h-[120px]  w-[50px] md:w-[80px] xl:w-[100px] 2xl:w-[120px] absolute z-30 rounded-full waves wave-1 pointer-events-none" />
            <div className="h-[50px] md:h-[80px] xl:h-[100px] 2xl:h-[120px]  w-[50px] md:w-[80px] xl:w-[100px] 2xl:w-[120px] absolute z-20 rounded-full waves wave-2 pointer-events-none" />
            <div className="h-[50px] md:h-[80px] xl:h-[100px] 2xl:h-[120px]  w-[50px] md:w-[80px] xl:w-[100px] 2xl:w-[120px] absolute z-10 rounded-full waves wave-3 pointer-events-none" />
          </div>
        </div>

        <div className="relative overflow-hidden w-full">
          {init && (
            <section
              style={{
                width: "500px",
                height: "300px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Particles
                id="tsparticles"
                options={{
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#00000020",
                    },
                    links: {
                      color: "#00000020",
                      distance: 150,
                      enable: true,
                      opacity: 0.1,
                      width: 1,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 2,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                      },
                      value: 120,
                    },
                    opacity: {
                      value: 0.2,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 2 },
                    },
                  },
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </section>
          )}
        </div>
      </div>

      <div className="py-[100px] bg-primaryColor">
        <Container>
          <div className="w-full">
            <Title
              title="Your Partner in Mobile App Innovation"
              titleClass="text-white text-center"
              booletClass="bg-[#ffffff70]"
            />

            <p className="mt-5 text-center text-[#ffffff] text-[17px] w-full xsm:w-[80%] md:w-[60%] m-auto">
              We craft mobile apps that captivate users and fuel business
              growth. Whether it’s a robust native app for iOS or Android, or a
              flexible cross-platform solution, our expert developers are here
              to bring your vision to life. With a focus on intuitive design and
              top-notch performance, we build apps that enhance your digital
              presence and deliver outstanding user experiences.
            </p>
          </div>
        </Container>
      </div>

      <div className="py-[100px] bg-[#F4F5FA]">
        <Container>
          <div className="w-full">
            <Title title="Why Hire Developers From Excel ?" />

            <div className="mt-10 grid grid-cols-1 xsm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5">
              <div className="p-5 border bg-[#E8ECF5] text-center py-10">
                <h1 className="font-[font-500]">Title</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, debitis! Autem facere illum veniam deserunt.
                </p>
              </div>

              <div className="p-5 border  text-center py-10 bg-white">
                <h1 className="font-[font-500]">Title</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, debitis! Autem facere illum veniam deserunt.
                </p>
              </div>

              <div className="p-5 border bg-[#E8ECF5] xsm:bg-white xl:bg-[#E8ECF5] text-center py-10">
                <h1 className="font-[font-500]">Title</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, debitis! Autem facere illum veniam deserunt.
                </p>
              </div>

              <div className="p-5 border  text-center py-10 bg-white xsm:bg-[#E8ECF5] xl:bg-white">
                <h1 className="font-[font-500]">Title</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, debitis! Autem facere illum veniam deserunt.
                </p>
              </div>

              <div className="p-5 border text-center py-10 bg-[#E8ECF5] xl:bg-white">
                <h1 className="font-[font-500]">Title</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, debitis! Autem facere illum veniam deserunt.
                </p>
              </div>

              <div className="p-5 border bg-white xl:bg-[#E8ECF5] text-center py-10">
                <h1 className="font-[font-500]">Title</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, debitis! Autem facere illum veniam deserunt.
                </p>
              </div>

              <div className="p-5 border text-center py-10 bg-[#E8ECF5] xsm:bg-white">
                <h1 className="font-[font-500]">Title</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, debitis! Autem facere illum veniam deserunt.
                </p>
              </div>
              <div className="p-5 border bg-white xsm:bg-[#E8ECF5] text-center py-10">
                <h1 className="font-[font-500]">Title</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, debitis! Autem facere illum veniam deserunt.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[#E8ECF5] py-[100px]">
        <Container>
          <div className="w-full ">
            <Title title="Technology" />

            <div className="shadow-md mt-10 p-5 lg:p-10 w-full lg:w-[80%] xxl:w-[60%] m-auto border border-color500 rounded-xl relative z-10">
              <ul className="flex justify-around border-b border-b-color500">
                <li>
                  <button
                    className={styles(
                      "py-1 lg:py-2 px-2 lg:px-4 text-[15px] lg:text-[18px] font-[font-500] border-b-4 ",
                      { "border-b-primaryColor": active === "frontend" }
                    )}
                    onClick={() => setActive("frontend")}
                  >
                    Frontend
                  </button>
                </li>
                <li>
                  <button
                    className={styles(
                      "py-1 lg:py-2 px-2 lg:px-4 text-[15px] lg:text-[18px] font-[font-500] border-b-4 ",
                      { "border-b-primaryColor": active === "backend" }
                    )}
                    onClick={() => setActive("backend")}
                  >
                    Backend
                  </button>
                </li>
                <li>
                  <button
                    className={styles(
                      "py-1 lg:py-2 px-2 lg:px-4 text-[15px] lg:text-[18px] font-[font-500] border-b-4 ",
                      { "border-b-primaryColor": active === "platform" }
                    )}
                    onClick={() => setActive("platform")}
                  >
                    Platform
                  </button>
                </li>
              </ul>

              {active === "frontend" && (
                <div className="pt-5 grid grid-cols-2 xsm:grid-cols-3 md:grid-cols-4 gap-2">
                  <div
                    className={styles(
                      "flex flex-col items-center p-1 md:p-3 py-5 md:py-10 transition-opacity"
                    )}
                  >
                    <FaApple size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-1 md:p-3 py-5 md:py-10">
                    <IoLogoAndroid size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Google Play Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-1 md:p-3 py-5 md:py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-1 md:p-3 py-5 md:py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-1 md:p-3 py-5 md:py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-1 md:p-3 py-5 md:py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                </div>
              )}

              {active === "backend" && (
                <div className="pt-5 grid grid-cols-2 xsm:grid-cols-3 md:grid-cols-4 gap-2">
                  <div className="flex flex-col items-center p-1 md:p-3 py-5 md:py-10">
                    <FaApple size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-1 md:p-3 py-5 md:py-10">
                    <IoLogoAndroid size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Google Play Store
                    </h1>
                  </div>

                  <div className="flex flex-col items-center p-1 md:p-3 py-5 md:py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                </div>
              )}

              {active === "platform" && (
                <div className="pt-5 grid grid-cols-2 xsm:grid-cols-3 md:grid-cols-4 gap-2">
                  <div className="flex flex-col items-center p-1 md:p-3 py-5 md:py-10">
                    <FaApple size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-1 md:p-3 py-5 md:py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-1 md:p-3 py-5 md:py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-1 md:p-3 py-5 md:py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      <div className="py-[100px]">
        <Container>
          <div className="w-full">
            {/* <div className="flex"> */}
            <Title title="Key Features" />
            {/* </div> */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-20 w-full">
              <FeaturesBox
                img="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/sub-services/doller.png"
                title="Cost Effective"
                className="sr_line_1"
              />
              <FeaturesBox
                img="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/sub-services/doller1.png"
                title="High Performance"
                className="sr_line_2"
              />
              <FeaturesBox
                img="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/sub-services/doller2.png"
                title="Web Support"
                className="sr_line_3"
              />
              <FeaturesBox
                img="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/sub-services/doller3.png"
                title="Open Source"
                className="sr_line_4"
              />
            </div>
          </div>
        </Container>
      </div>

      <div className="py-[100px] bg-[#E8ECF5]">
        <Container>
          <div className="w-full">
            <Title title="What Client Says" />

            <div className="mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                <div className="">
                  <h1 className="text-[15px] md:text-[20px] lg:text-[25px] font-[font-600] mb-5 text-center lg:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni rerum error qui fugiat, quos temporibus!
                  </h1>
                  <p className="text-center lg:text-left">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aut maiores eaque obcaecati aspernatur placeat incidunt eos
                    debitis ullam, nesciunt explicabo.
                  </p>

                  <div className="text-center lg:text-left">
                    <Link
                      to={URLContact()}
                      className="mt-5 btn border-primaryColor bg-primaryColor rounded-full text-white px-4 lg:px-7 hover:bg-color900 font-[font-500]"
                    >
                      Get In Touch
                    </Link>
                  </div>
                </div>
                <div className="flex gap-5 justify-end items-end">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log({ swiper })}
                    pagination={{
                      clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                  >
                    <SwiperSlide className="flex justify-center items-center">
                      <SliderBox
                        item={{
                          name: "RAIHAN SHARIF",
                          title:
                            "Assistant Professor, Jahangirnagar University, Bangladesh",
                          desc: "Excel Intelligent Solution have thoroughly gone above & beyond to work on solving our problems and automating our solutions here at the Department of IBA at Jahangirnagar University.",
                        }}
                      />
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center items-center">
                      <SliderBox
                        item={{
                          name: "RAKESH MAZUMDER",
                          title:
                            "System Architect , Global Miles Ltd Hong Kong",
                          desc: "Excel Technologies Ltd. have thoroughly gone above & beyond to work on solving our problems and automating our solutions here at the Department of IBA at Jahangirnagar University.",
                        }}
                      />
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center items-center">
                      <SliderBox
                        item={{
                          name: "JANNATUL FERDOUS",
                          title: "Head of IT, Ningbo Cixing Co., Ltd",
                          desc: "We’ve been working with many local software companies, however ArcApps from Excel Intelligent Solution is one of the most user-friendly, business focused application we’ve used and now our business process runs at ease!",
                        }}
                      />
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center items-center">
                      <SliderBox
                        item={{
                          name: "DANIEL GEORGE",
                          title:
                            "Software Engineer, Nexia International London",
                          desc: "Excel Technologies Ltd. has an enthusiastic team, hard-working guys who don’t give up easily. They did the job perfectly. They always aim to please and succeeded in doing so. Overall, we’re very happy to get the software from them.",
                        }}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-[100px]">
        <Container>
          <div className="w-full">
            <Title title="FAQ' S" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="">
                {test.map((_, index) => {
                  return (
                    <React.Fragment key={index}>
                      {index % 2 ? null : (
                        <Faq index={index} check={check} setCheck={setCheck} />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <div className="">
                {test.map((_, index) => {
                  return (
                    <React.Fragment key={index}>
                      {index % 2 ? (
                        <Faq index={index} check={check} setCheck={setCheck} />
                      ) : null}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="h-[100px]" />
    </>
  );
}

export default ServiceSingle;

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface boxProps {
  img?: string;
  title?: string;
  className?: string | undefined;
}
const FeaturesBox = ({ img, title, className }: boxProps) => {
  return (
    <div className="w-full h-[250px] flex justify-center">
      <div className="flex flex-col items-center">
        <img
          src={img}
          alt=""
          className="w-[80px] lg:w-[100px] xl:w-[150px] h-[80px] lg:h-[100px] xl:h-[150px] object-content"
        />

        <div
          className={`
            w-[2px] h-[90px] xl:h-[120px] relative -mt-[30px] xl:-mt-[45px] flex justify-center aos-animate service-box ${className}`}
          data-aos="fade-zoom-in"
          data-aos-offset="-50"
          data-aos-delay="350"
          data-aos-duration="500"
        >
          {/* <div className="bg-primaryColor h-[100%] w-full" />
          <div className="absolute h-[10px] w-[10px] rounded-full bg-primaryColor bottom-0" /> */}
        </div>

        <p className="text-center font-[font-500] text-[14px] md:text-[16px] mt-3">
          {title}
        </p>
      </div>
    </div>
  );
};

import quoteImage from "../../assets/image/quote.png";

interface SidebarProps {
  name: string;
  title: string;
  desc: string;
}
const SliderBox = ({ item }: SidebarProps) => {
  return (
    <div className="border shadow-lg p-5 w-[450px] sm:w-[500px] xxl:w-[550px] bg-white rounded-lg relative mt-14 mb-10">
      <img
        src={quoteImage}
        alt=""
        className=" p-3 bg-white h-[80px] lg:h-[100px] w-[80px] lg:w-[100px] rounded-full border-2 border-primaryColor object-cover absolute -top-12 "
      />
      <div className="mt-10 flex justify-between">
        <div className="">
          <h3 className="font-[font-500] text-[20px]">{item?.name}</h3>
          <div
            className={`flex justify-between gap-3 w-[150px] items-center mt-3`}
          >
            <div className="bg-primaryColor h-[4px] w-full rounded-full" />
            <div className="bg-primaryColor h-[4px] w-[30px] rounded-full" />
            <div className="bg-primaryColor h-[4px] w-[30px] rounded-full" />
            <div className="bg-primaryColor h-[4px] w-[30px] rounded-full" />
            <div className="bg-primaryColor h-[4px] w-[30px] rounded-full" />
          </div>
        </div>

        <div className="flex justify-end items-center">
          <p className="font-[font-500] text-[18px] mr-1">5.0</p>
          <AiFillStar size={15} className="" />
          <AiFillStar size={15} className="" />
          <AiFillStar size={15} className="" />
          <AiFillStar size={15} className="" />
          <AiFillStar size={15} className="" />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="">
          <p className="text-[13px] sm:text-[15px] font-[font-500] text-[#00000099]">
            {item?.title}
          </p>
          {/* <p className="text-[12px] sm:text-[13px] font-[font-500] text-[#00000099]">
            Excel Technology LTD.
          </p> */}
        </div>
        <p
          className="text-[12px] sm:text-[14px] font-[font-300]"
          style={{ lineHeight: "18px" }}
        >
          {item?.desc}
        </p>
      </div>
    </div>
  );
};

interface FaqProps {
  setCheck: React.Dispatch<React.SetStateAction<number>>;
  check: number;
  index: number;
}
const Faq = ({ index, check, setCheck }: FaqProps) => {
  // * Handle Accordion Toggle
  const handleAccordion = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) === check) {
      setCheck(0);
    } else {
      setCheck(Number(e.target.value));
    }
  };

  return (
    <div className="mb-5">
      <div className="border rounded flex flex-col">
        <button
          value={index + 1}
          onClick={(e) => handleAccordion(e)}
          className={styles(
            "py-3 px-5 flex justify-between items-center cursor-pointer w-full",
            { "border-b": check === index + 1 }
          )}
        >
          <p className="font-[font-500] text-[17px] pointer-events-none">
            Title {index + 1}
          </p>
          {check === index + 1 ? (
            <FaMinus size={15} className="pointer-events-none" />
          ) : (
            <FaPlus size={15} className="pointer-events-none" />
          )}
        </button>

        <div
          className={styles(
            "grid overflow-hidden p-5 transition-all duration-300 ease-out",
            {
              "grid-rows-[1fr] opacity-100": check === index + 1,
              "grid-rows-[0fr] opacity-0 p-0": check !== index + 1,
            }
          )}
          // style={{ transition: "all 1s ease-in-out" }}
        >
          <p className=" font-[font-300] text-[15px] overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            provident quod accusantium expedita esse ad autem tempora facilis
            vel est! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Molestiae, dolorum.
          </p>
        </div>
      </div>
    </div>
  );
};
