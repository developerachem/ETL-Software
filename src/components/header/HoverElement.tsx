import React from "react";
import { Link } from "react-router-dom";
import serviceData from "../../pages/serviceSingle/serviceData";

export const ServiceHoverElement = () => {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {serviceData.map((item, index) => (
        <React.Fragment key={index}>
          <ServiceList data={item} />
        </React.Fragment>
      ))}
    </ul>
  );
};

interface listProps {
  data: {
    title: string;
    url: string;
    icon: JSX.Element;
    link: string;
  };
}
const ServiceList = ({ data }: listProps) => {
  return (
    <li>
      <Link
        to={data.link}
        className={`flex items-center gap-3 hover:bg-color200 text-black rounded-xl py-1.5 px-2 ease-in duration-300`}
      >
        <div
          className={`border rounded-full h-10 w-10 flex justify-center items-center`}
        >
          {data.icon}
        </div>
        {data.title}
      </Link>
    </li>
  );
};
