import { AiFillAndroid } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ServiceHoverElement = () => {
  return (
    <ul className="grid grid-cols-2 gap-3">
      <ServiceList title="Android" />
      <ServiceList title="Android" />
      <ServiceList title="Android" />
      <ServiceList title="Android" />
      <ServiceList title="Android" />
      <ServiceList title="Android" />
      <ServiceList title="Android" />
      <ServiceList title="Android" />
      <ServiceList title="Android" />
      <ServiceList title="Android" />
    </ul>
  );
};

interface listProps {
  title: string;
}
const ServiceList = ({ title }: listProps) => {
  return (
    <li>
      <Link
        to="/"
        className={`flex items-center gap-3 hover:bg-color200 text-black rounded-xl py-1.5 px-2`}
      >
        <div
          className={`bg-color500 rounded-full h-10 w-10 flex justify-center items-center`}
        >
          <AiFillAndroid size={25} color="var(--primaryColor)" />
        </div>
        {title}
      </Link>
    </li>
  );
};
