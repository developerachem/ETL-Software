import { BsDatabaseUp } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { URLServiceSingle } from "./url";

export const serviceArray = [
  {
    icon: <CiGlobe size={25} color="var(--primaryColor)" />,
    title: "Web Development",
    url: URLServiceSingle("web-development"),
  },
  {
    icon: <FaApple size={25} color="var(--primaryColor)" />,
    title: "IOS Development",
    url: URLServiceSingle("ios-development"),
  },
  {
    icon: <IoLogoAndroid size={25} color="var(--primaryColor)" />,
    title: "Android Development",
    url: URLServiceSingle("android-development"),
  },
  {
    icon: <BsDatabaseUp size={25} color="var(--primaryColor)" />,
    title: "Data Migration",
    url: URLServiceSingle("data-migration"),
  },
];
