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

function Home() {
  return (
    <>
      <div className="banner">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center w-full h-[70vh] md:h-[85vh] ">
            <div className="w-full md:w-[50%]">
              <h1 className="text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-[#153441] font-[font-500]">
                $869 M funding{" "}
              </h1>
              <h1 className="-mt-5 text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-[#153441] font-[font-500]">
                raised by our apps
              </h1>
              <h1 className="text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-primaryColor font-[font-It]">
                in 1 year!
              </h1>

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
              booletClass="bg-[#ffffff50]"
            />

            <div className="mt-10 grid grid-cols-3 gap-10">
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

      <div className="h-[100px]" />
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
