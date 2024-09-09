import bannerImage from "../../assets/image/about-banner.png";
import vison from "../../assets/image/vision.jpg";
import Title from "../../components/title/Title";
import Container from "../../container/Container";

function About() {
  return (
    <>
      <div className="h-[80vh] bg-[#f2f6fa] about-banner">
        <Container>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-5 items-center">
              <div className="">
                <h1 className="font-[font-it] text-[30px] md:text-[50px] xl:text-[60px] text-primaryColor mb-5 text-center md:text-left">
                  Building Mobile Apps That Make an Impact
                </h1>
                <p className="text-[20px] text-[#4a4a4a]">
                  This is a simple boilerplate for ReactJS with TailwindCSS.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid non eum ipsam quae quam fugiat qui quas, tempora in
                  quo, sint eaque quisquam consequuntur quod blanditiis
                  necessitatibus ullam maiores molestiae optio. Quo magni ea
                  tempora optio dolorem, doloribus magnam soluta, omnis totam
                  quia quibusdam neque, quisquam quam labore cumque
                  consequuntur?
                </p>
                <button className="bg-primaryColor py-3 px-6 rounded-full text-white mt-5 font-[font-500]">
                  Let's Talk
                </button>
              </div>

              <div className="flex justify-end">
                <img className="w-[100%]" src={bannerImage} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-[100px] bg-white">
        <Container>
          <div className="w-full">
            <Title title="Our Story" />

            <p className="w-[60%] m-auto mt-10 text-center text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quasi repellendus eligendi iusto atque doloribus
              expedita cumque. Magnam iusto veniam modi voluptatem minus error
              eum rerum explicabo laborum repellendus illum, cupiditate, quam
              repellat autem porro dolore, nihil magni ullam a iste nesciunt
              laboriosam! Tempora non, aliquid architecto vero reiciendis eum.
            </p>

            <div className="mt-10 grid grid-cols-4 gap-10">
              <div className="border shadow-xl hover:shadow-none transition-all p-5 rounded">
                <img
                  src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/icon4.png"
                  className="h-[80px] mt-5 mb-5"
                  alt=""
                />

                <h1 className="font-[font-600] text-[32px] text-center">
                  10+ Years
                </h1>
                <p className="text-center mt-0 text-[18px] font-bold">
                  of Industry Experience
                </p>
              </div>

              <div className="border shadow-xl hover:shadow-none transition-all p-5 rounded">
                <img
                  src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/icon5.png"
                  className="h-[80px] mt-5 mb-5"
                  alt=""
                />

                <h1 className="font-[font-600] text-[32px] text-center">
                  450+
                </h1>
                <p className="text-center mt-0 text-[18px] font-bold">
                  Delighted Clients
                </p>
              </div>

              <div className="border shadow-xl hover:shadow-none transition-all p-5 rounded">
                <img
                  src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/icon6.png"
                  className="h-[80px] mt-5 mb-5"
                  alt=""
                />

                <h1 className="font-[font-600] text-[32px] text-center">
                  250+
                </h1>
                <p className="text-center mt-0 text-[18px] font-bold">
                  Team Members
                </p>
              </div>

              <div className="border shadow-xl hover:shadow-none transition-all p-5 rounded">
                <img
                  src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/icon7.png"
                  className="h-[80px] mt-5 mb-5"
                  alt=""
                />

                <h1 className="font-[font-600] text-[32px] text-center">50%</h1>
                <p className="text-center mt-0 text-[18px] font-bold">
                  Senior and Expert Staff
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-[100px]">
        <Container>
          <div className="w-full">
            <Title title="Our core values" />

            {/* <p className="w-[60%] m-auto mt-10 text-center text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi repellendus eligendi iusto atque doloribus expedita cumque. Magnam iusto veniam modi voluptatem minus error eum rerum explicabo laborum repellendus illum, cupiditate, quam repellat autem porro dolore, nihil magni ullam a iste nesciunt laboriosam! Tempora non, aliquid architecto vero reiciendis eum.
            </p> */}

            <div className="mt-20 grid grid-cols-2 gap-10 gap-y-20">
              <div className="flex gap-5 items-start">
                <img
                  className="bg-[#d5ede5] p-6 rounded-lg h-[100px] w-[100px]"
                  src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/authenticity.png"
                  alt=""
                />

                <div className="">
                  <h3 className="text-[22px] font-[font-500] mb-2">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="text-left text-[18px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere officiis exercitationem a maiores facilis voluptatum
                    qui dolore consectetur eligendi! Voluptatum. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Dolorem,
                    perferendis?
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <img
                  className="bg-[#d5ede5] p-6 rounded-lg h-[100px] w-[100px]"
                  src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/authenticity.png"
                  alt=""
                />

                <div className="">
                  <h3 className="text-[22px] font-[font-500] mb-2">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="text-left text-[18px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere officiis exercitationem a maiores facilis voluptatum
                    qui dolore consectetur eligendi! Voluptatum. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Dolorem,
                    perferendis?
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <img
                  className="bg-[#d5ede5] p-6 rounded-lg h-[100px] w-[100px]"
                  src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/authenticity.png"
                  alt=""
                />

                <div className="">
                  <h3 className="text-[22px] font-[font-500] mb-2">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="text-left text-[18px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere officiis exercitationem a maiores facilis voluptatum
                    qui dolore consectetur eligendi! Voluptatum. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Dolorem,
                    perferendis?
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <img
                  className="bg-[#d5ede5] p-6 rounded-lg h-[100px] w-[100px]"
                  src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/authenticity.png"
                  alt=""
                />

                <div className="">
                  <h3 className="text-[22px] font-[font-500] mb-2">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="text-left text-[18px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere officiis exercitationem a maiores facilis voluptatum
                    qui dolore consectetur eligendi! Voluptatum. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Dolorem,
                    perferendis?
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <img
                  className="bg-[#d5ede5] p-6 rounded-lg h-[100px] w-[100px]"
                  src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/authenticity.png"
                  alt=""
                />

                <div className="">
                  <h3 className="text-[22px] font-[font-500] mb-2">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="text-left text-[18px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere officiis exercitationem a maiores facilis voluptatum
                    qui dolore consectetur eligendi! Voluptatum. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Dolorem,
                    perferendis?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-[100px]">
        <Container>
          <div className="w-full grid grid-cols-2 gap-10 items-center">
            <div className="">
              <img
                src={vison}
                alt=""
                className="rounded-lg w-[90%] shadow-lg p-5"
              />
            </div>
            <div className="">
              <h2
                className={`text-[20px] md:text-[28px] xl:text-[35px] font-[font-600]`}
              >
                MISSION & VISION
              </h2>

              <div className="flex gap-5 items-start mt-5">
                <img
                  className="bg-[#d5ede5] p-6 rounded-lg h-[80px] w-[80px] "
                  src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/mission-icon.png"
                  alt=""
                />

                <div className="">
                  <h3 className="text-[22px] font-[font-500] mb-2">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="text-left text-[18px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere officiis exercitationem a maiores facilis voluptatum
                    qui dolore consectetur eligendi! Voluptatum. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Dolorem,
                    perferendis?
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start mt-5">
                <img
                  className="bg-[#d5ede5] p-6 rounded-lg h-[80px] w-[80px]"
                  src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/vision-icon.png"
                  alt=""
                />

                <div className="">
                  <h3 className="text-[22px] font-[font-500] mb-2">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="text-left text-[18px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere officiis exercitationem a maiores facilis voluptatum
                    qui dolore consectetur eligendi! Voluptatum. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Dolorem,
                    perferendis?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="h-[200px]"></div>
    </>
  );
}

export default About;
