import React, { useEffect } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import bodyImage from "../../assets/image/body-image.png";
import { bannerArray } from "./bannerArray";

function BannerSlider() {
  useEffect(() => {
    const sliderItems: any = document.querySelectorAll(".sliderItem");
    const sliderContents: any = document.querySelectorAll(".sliderContent");
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");

    let active = 0;

    const slideTo = () => {
      let stt = 0;
      sliderItems[active].style.transform = "none";
      sliderItems[active].style.zIndex = 1;
      sliderItems[active].style.opacity = 1;
      sliderItems[active].style.height = "100%";
      sliderItems[active].style.width = "100%";

      sliderContents[active].style.transform = "none";
      sliderContents[active].style.zIndex = 1;
      sliderContents[active].style.opacity = 1;

      for (let i = active + 1; i < sliderItems.length; i++) {
        stt++;
        sliderItems[i].style.transform = `translateY(${stt * 600}px)`;
        sliderItems[i].style.opacity = 0.6;
        sliderItems[i].style.height = "20%";
        sliderItems[i].style.width = "20%";
      }
      for (let i = active + 1; i < sliderContents.length; i++) {
        stt++;
        sliderContents[i].style.transform = `translateY(${stt * 130}px)`;
        sliderContents[i].style.opacity = 0.6;
      }

      stt = 0;
      for (let i = active - 1; i >= 0; i--) {
        stt++;
        sliderItems[i].style.transform = `translateY(${stt * -600}px) `;
        sliderItems[i].style.opacity = 0.6;
        sliderItems[i].style.height = "20%";
        sliderItems[i].style.width = "20%";
      }
      for (let i = active - 1; i >= 0; i--) {
        stt++;
        sliderContents[i].style.transform = `translateY(${stt * -130}px) `;
        sliderContents[i].style.opacity = 0.6;
      }
    };

    slideTo();

    nextBtn?.addEventListener("click", () => {
      if (active === sliderItems.length - 1) {
        active = 0;
      }
      active = active + 1 < sliderItems.length ? active + 1 : active;
      slideTo();
    });

    prevBtn?.addEventListener("click", () => {
      active = active - 1 >= 0 ? active - 1 : active;
      slideTo();
    });

    setInterval(() => {
      if (active === sliderItems.length - 1) {
        active = 0;
      }
      active = active + 1 < sliderItems.length ? active + 1 : active;
      slideTo();
      // clearInterval(interval);
    }, 4000);
  }, []);

  return (
    <div className="w-[50%] h-[100%] flex justify-end items-center relative">
      <div className="h-[80%] w-[80%] mb-5 overflow-hidden flex flex-col justify-center items-center relative">
        {bannerArray.map((item, index) => (
          <React.Fragment key={index}>{item.mobile}</React.Fragment>
        ))}
      </div>

      <div className="absolute w-[350px] h-[200px] bg-white rounded-[25px] p-5 bottom-24 left-0 shadow-lg border z-10">
        <div className="w-full h-[120px] overflow-hidden relative">
          {bannerArray.map((item, index) => (
            <div className="w-full h-full absolute sliderContent">
              <React.Fragment key={index}>
                {item.logo}
                <h3
                  className="font-[font-500] text-[#35505C]"
                  style={{ lineHeight: "25px" }}
                >
                  {item.content}
                </h3>
              </React.Fragment>
            </div>
          ))}
        </div>

        <div className="flex justify-end items-center gap-5 mt-5 text-gray-400">
          <HiOutlineArrowNarrowLeft
            id="prevBtn"
            size={23}
            className="cursor-pointer"
          />
          <HiOutlineArrowNarrowRight
            id="nextBtn"
            size={23}
            className="cursor-pointer"
          />
        </div>
      </div>

      <img
        src={bodyImage}
        className="absolute bottom-0 h-[140px] right-10 w-[400px] object-content"
      />
    </div>
  );
}

export default BannerSlider;
