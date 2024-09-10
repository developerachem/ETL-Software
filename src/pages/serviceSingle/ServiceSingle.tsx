import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Development from "../../assets/image/Development.png";
import Requirement from "../../assets/image/Requirement.png";
import development from "../../assets/image/development.png";
import planing from "../../assets/image/planing.png";
import Title from "../../components/title/Title";
import Container from "../../container/Container";
import { URLContact } from "../../routes/url";
import { styles } from "../../utils/cn";

function ServiceSingle() {
  const [active, setActive] = useState("frontend");
  const [accordionShow, setAccordionShow] = useState(0);

  // * Hokes
  const { pathname } = useLocation();

  // * Service Page Data
  const data = serviceData.filter((value) =>
    pathname.toLowerCase().includes(value.url.toLowerCase())
  )[0];

  console.log(data);

  return (
    <>
      <div className="h-[70vh] relative bg-[#F4F5FA]">
        <Container>
          <div className="w-full md:w-[60%] ">
            <h1 className="font-[font-it] text-[30px] md:text-[50px] xl:text-[55px] text-primaryColor mb-5 text-center md:text-left">
              {data?.hero?.title}
            </h1>
            <h1 className="text-[15px] sm:text-[17px] md:text-[20px] lg:text-[25px] xl:text-[35px] font-[font-500] text-center md:text-left">
              {data?.hero?.subtitle}
            </h1>

            <ul className="flex justify-center md:justify-start items-center gap-5 mt-10">
              <li>-----</li>
              {data?.hero.icon?.map((i, e) => (
                <li key={e}>{i}</li>
              ))}
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
      </div>

      <div className="py-[100px] bg-primaryColor">
        <Container>
          <div className="w-full">
            <Title
              title={data?.experiences?.title}
              titleClass="text-white text-center"
              booletClass="bg-[#ffffff70]"
            />

            <p className="mt-5 text-center text-[#ffffff] text-[17px] w-full xsm:w-[80%] md:w-[60%] m-auto">
              {data?.experiences?.desc}
            </p>
          </div>
        </Container>
      </div>

      <div className="py-[100px] bg-[#F4F5FA]">
        <Container>
          <div className="w-full">
            <Title title="What we offer" />

            <div className="mt-10 grid grid-cols-1 xsm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5">
              <div className="p-5 border bg-[#E8ECF5] text-center py-10">
                <h1 className="font-[font-500]">{data?.offer[0]?.title}</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  {data?.offer[0]?.desc}
                </p>
              </div>

              <div className="p-5 border  text-center py-10 bg-white">
                <h1 className="font-[font-500]">{data?.offer[1]?.title}</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  {data?.offer[1]?.desc}
                </p>
              </div>

              <div className="p-5 border bg-[#E8ECF5] xsm:bg-white xl:bg-[#E8ECF5] text-center py-10">
                <h1 className="font-[font-500]">{data?.offer[2]?.title}</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  {data?.offer[2]?.desc}
                </p>
              </div>

              <div className="p-5 border  text-center py-10 bg-white xsm:bg-[#E8ECF5] xl:bg-white">
                <h1 className="font-[font-500]">{data?.offer[3]?.title}</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  {data?.offer[3]?.desc}
                </p>
              </div>

              <div className="p-5 border text-center py-10 bg-[#E8ECF5] xl:bg-white">
                <h1 className="font-[font-500]">{data?.offer[4]?.title}</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  {data?.offer[4]?.desc}
                </p>
              </div>

              <div className="p-5 border bg-white xl:bg-[#E8ECF5] text-center py-10">
                <h1 className="font-[font-500]">{data?.offer[5]?.title}</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  {data?.offer[5]?.desc}
                </p>
              </div>

              <div className="p-5 border text-center py-10 bg-[#E8ECF5] xsm:bg-white">
                <h1 className="font-[font-500]">{data?.offer[6]?.title}</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  {data?.offer[6]?.desc}
                </p>
              </div>
              <div className="p-5 border bg-white xsm:bg-[#E8ECF5] text-center py-10">
                <h1 className="font-[font-500]">{data?.offer[7]?.title}</h1>
                <p className="text-[14px] sm:text-[17px] mt-5">
                  {data?.offer[7]?.desc}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[#E8ECF5] py-[100px]">
        <Container>
          <div className="w-full ">
            <Title title="Technologies Used in Web Development" />

            <div className="shadow-md mt-10 p-5 lg:p-10 w-full lg:w-[80%] xxl:w-[60%] m-auto border border-color500 rounded-xl relative z-10">
              <ul className="flex justify-around border-b border-b-color500">
                {data?.technologies?.map((item, index) => (
                  <li key={index}>
                    <button
                      className={styles(
                        "py-1 lg:py-2 px-2 lg:px-4 text-[15px] lg:text-[18px] font-[font-500] border-b-4 ",
                        {
                          "border-b-primaryColor":
                            active === item?.key?.toLowerCase(),
                        }
                      )}
                      onClick={() => setActive(item?.key?.toLowerCase())}
                    >
                      {item?.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="pt-5 grid grid-cols-2 xsm:grid-cols-3 md:grid-cols-4 gap-2">
                {data?.technologies
                  ?.filter((i) => i?.key?.toLowerCase() === active)[0]
                  ?.option?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={styles(
                          "flex flex-col items-center p-1 md:p-3 py-5 md:py-10 transition-opacity"
                        )}
                      >
                        {item?.icon}
                        <h1 className="text-[16px] font-[font-400] text-center mt-3">
                          {item?.name}
                        </h1>
                      </div>
                    );
                  })}
              </div>

              {/* {active === "frontend" && (
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
              )} */}
            </div>
          </div>
        </Container>
      </div>

      <div className="py-[100px]">
        <Container>
          <div className="w-full">
            {/* <div className="flex"> */}
            <Title title="Web Development Workflow" />
            {/* </div> */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-20 w-full">
              <FeaturesBox
                img={Requirement}
                title="Requirement Gathering and Analysis"
                className="sr_line_1"
              />
              <FeaturesBox
                img={planing}
                title="Planning & Design"
                className="sr_line_2"
              />
              <FeaturesBox
                img={development}
                title="Development & Testing"
                className="sr_line_3"
              />
              <FeaturesBox
                img={Development}
                title="Deployment"
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
                        content={{
                          name: "RAIHAN SHARIF",
                          title:
                            "Assistant Professor, Jahangirnagar University, Bangladesh",
                          desc: "Excel Intelligent Solution have thoroughly gone above & beyond to work on solving our problems and automating our solutions here at the Department of IBA at Jahangirnagar University.",
                        }}
                      />
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center items-center">
                      <SliderBox
                        content={{
                          name: "RAKESH MAZUMDER",
                          title:
                            "System Architect , Global Miles Ltd Hong Kong",
                          desc: "Excel Technologies Ltd. have thoroughly gone above & beyond to work on solving our problems and automating our solutions here at the Department of IBA at Jahangirnagar University.",
                        }}
                      />
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center items-center">
                      <SliderBox
                        content={{
                          name: "JANNATUL FERDOUS",
                          title: "Head of IT, Ningbo Cixing Co., Ltd",
                          desc: "We’ve been working with many local software companies, however ArcApps from Excel Intelligent Solution is one of the most user-friendly, business focused application we’ve used and now our business process runs at ease!",
                        }}
                      />
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center items-center">
                      <SliderBox
                        content={{
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
                {data?.faq?.map((i, index) => {
                  return (
                    <React.Fragment key={index}>
                      {index % 2 ? null : (
                        <Faq
                          index={index}
                          accordionShow={accordionShow}
                          setAccordionShow={setAccordionShow}
                          item={i}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <div className="">
                {data?.faq?.map((i, index) => {
                  return (
                    <React.Fragment key={index}>
                      {index % 2 ? (
                        <Faq
                          index={index}
                          accordionShow={accordionShow}
                          setAccordionShow={setAccordionShow}
                          item={i}
                        />
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
          className="w-[80px] border rounded-full border-primaryColor shadow lg:w-[100px] xl:w-[150px] h-[80px] lg:h-[100px] xl:h-[150px] object-content"
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
import serviceData from "./serviceData";

interface SidebarProps {
  content: {
    name: string;
    title: string;
    desc: string;
  };
}
const SliderBox = ({ content }: SidebarProps) => {
  return (
    <div className="border shadow-lg p-5 w-[450px] sm:w-[500px] xxl:w-[550px] bg-white rounded-lg relative mt-14 mb-10">
      <img
        src={quoteImage}
        alt=""
        className=" p-3 bg-white h-[80px] lg:h-[100px] w-[80px] lg:w-[100px] rounded-full border-2 border-primaryColor object-cover absolute -top-12 "
      />
      <div className="mt-10 flex justify-between">
        <div className="">
          <h3 className="font-[font-500] text-[20px]">{content?.name}</h3>
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
            {content?.title}
          </p>
          {/* <p className="text-[12px] sm:text-[13px] font-[font-500] text-[#00000099]">
            Excel Technology LTD.
          </p> */}
        </div>
        <p
          className="text-[12px] sm:text-[14px] font-[font-300]"
          style={{ lineHeight: "18px" }}
        >
          {content?.desc}
        </p>
      </div>
    </div>
  );
};

interface FaqProps {
  setAccordionShow: React.Dispatch<React.SetStateAction<number>>;
  accordionShow: number;
  index: number;
  item: {
    title: string;
    desc: string;
  };
}
const Faq = ({ index, accordionShow, setAccordionShow, item }: FaqProps) => {
  // * Handle Accordion Toggle
  const handleAccordion = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) === accordionShow) {
      setAccordionShow(0);
    } else {
      setAccordionShow(Number(e.target.value));
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
            { "border-b": accordionShow === index + 1 }
          )}
        >
          <p className="font-[font-500] text-[17px] pointer-events-none">
            {item?.title}
          </p>
          {accordionShow === index + 1 ? (
            <FaMinus size={15} className="pointer-events-none" />
          ) : (
            <FaPlus size={15} className="pointer-events-none" />
          )}
        </button>

        <div
          className={styles(
            "grid overflow-hidden p-5 transition-all duration-300 ease-out",
            {
              "grid-rows-[1fr] opacity-100": accordionShow === index + 1,
              "grid-rows-[0fr] opacity-0 p-0": accordionShow !== index + 1,
            }
          )}
        >
          <p className=" font-[font-300] text-[15px] overflow-hidden">
            {item?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};
