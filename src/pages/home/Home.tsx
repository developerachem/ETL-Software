import BannerSlider from "../../components/bannerSlider/BannerSlider";
import Container from "../../container/Container";

function Home() {
  return (
    <Container>
      <div className="flex justify-between items-end w-full h-[50vh]">
        <div className="">
          <h1 className="text-[50px] text-[#153441] font-[font-600]">
            $869 M funding{" "}
          </h1>
          <h1 className="text-[50px] text-[#153441] font-[font-600]">
            raised by our apps
          </h1>
          <h1 className="text-[50px] text-primaryColor font-[font-It]">
            in 1 year!
          </h1>
        </div>

        <BannerSlider />
      </div>
    </Container>
  );
}

export default Home;
