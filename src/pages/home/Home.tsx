import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import BannerSlider from "../../components/bannerSlider/BannerSlider";
import Container from "../../container/Container";

function Home() {
  return (
    <>
      <div className="banner">
        <Container>
          <div className="flex justify-between items-center w-full h-[85vh] ">
            <div className="w-[50%]">
              <h1 className="text-[70px] text-[#153441] font-[font-500]">
                $869 M funding{" "}
              </h1>
              <h1 className="-mt-5 text-[70px] text-[#153441] font-[font-500]">
                raised by our apps
              </h1>
              <h1 className="text-[70px] text-primaryColor font-[font-It]">
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

      <div className="h-[1000px]" />
    </>
  );
}

export default Home;
