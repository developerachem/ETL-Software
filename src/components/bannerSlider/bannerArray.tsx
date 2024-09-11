import logo from "../../assets/image/logo.png";
import image1 from "../../assets/image/mobile1.png";
import image2 from "../../assets/image/mobile2.png";
import image3 from "../../assets/image/mobile3.png";
import image4 from "../../assets/image/mobile4.png";

export const bannerArray = [
  {
    mobile: (
      <img
        src={image1}
        alt=""
        className="h-[80%] sm:h-[50%] md:h-[80%] absolute sliderItem pointer-events-none"
      />
    ),
    logo: <img src={logo} className="h-[50px] w-[60px]" alt="" />,
    content:
      "Scooped funding Of ₹55M from Y Combinator, Kevin Lin & XRM Media.",
  },
  {
    mobile: (
      <img
        src={image2}
        alt=""
        className="h-[80%] sm:h-[50%] md:h-[80%] absolute sliderItem pointer-events-none"
      />
    ),
    logo: <img src={logo} className="h-[50px] w-[60px]" alt="" />,
    content: "A Guinness World Record winning guidance app for parents.",
  },
  {
    mobile: (
      <img
        src={image3}
        alt=""
        className="h-[80%] sm:h-[50%] md:h-[80%] absolute sliderItem pointer-events-none"
      />
    ),
    logo: <img src={logo} className="h-[50px] w-[60px]" alt="" />,
    content: "Observes 20,000 financial transactions daily.",
  },
  {
    mobile: (
      <img
        src={image4}
        alt=""
        className="h-[80%] sm:h-[50%] md:h-[80%] absolute sliderItem pointer-events-none"
      />
    ),
    logo: <img src={logo} className="h-[50px] w-[60px]" alt="" />,
    content:
      "Raised funding of $809 M from Luxor Capital, Sumeru Ventures & others.",
  },
];
