import React from "react";
import { Link } from "react-router-dom";
import Container from "../../container/Container";
import serviceData from "../../pages/serviceSingle/serviceData";

function Footer() {
  return (
    <>
      <div className="bg-color300 py-5 pt-24 relative">
        <div className="bg-primaryColor rounded-[50px] h-[100px] absolute -top-[50px] left-0 w-full -z-10 shadow-2xl" />
        <Container>
          <div className="grid grid-cols-5 gap-10 w-full py-10 ">
            <div className="col-span-2 ">
              <img src="/logo.png" className="w-[150px] h-[100px]" alt="" />
              <h1 className="mt-3 text-[20px] font-[font-500]">
                Excel Technologies Limited
              </h1>
              <p>
                Excel HR Tower, House #13, Road #2, Block #J, Baridhara, <br />
                Dhaka, Bangladesh.
              </p>
            </div>

            <div className="w-full ">
              <h1 className="font-[font-600] text-[20px] border-b-[2px] border-b-primaryColor w-full mb-3">
                Quick Link
              </h1>
              <div className="flex flex-col">
                <Item title="Home" link="/" />
                <Item title="About" link="/about" />
                <Item title="Portfolio" link="/portfolio" />
                <Item title="Blog" link="/blog" />
                <Item title="Career" link="/career" />
                <Item title="Contact" link="/contact" />
              </div>
            </div>

            <div className="w-full ">
              <h1 className="font-[font-600] text-[20px] border-b-[2px] border-b-primaryColor w-full mb-3">
                Services
              </h1>
              <div className="flex flex-col">
                {serviceData.map((item, index) => (
                  <React.Fragment key={index}>
                    <Item title={item.title} link={item.link} />
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="w-full ">
              <h1 className="font-[font-600] text-[20px] border-b-[2px] border-b-primaryColor w-full mb-3">
                Portfolios
              </h1>
              <div className="flex flex-col">
                <Item title="" link="" />
                <Item title="" link="" />
                <Item title="" link="" />
                <Item title="" link="" />
                <Item title="" link="" />
                <Item title="" link="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-5 bg-primaryColor">
        <Container>
          <div className="flex justify-between items-center w-full">
            <p className="text-white">© All rights reserved by excelbd.com</p>
            <p className="text-white">
              Design and developed by excel software team
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;

// * Item
const Item = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link
      to={link || "/"}
      className="mt-2 hover:tracking-wider hover:text-primaryColor transition-all text-[17px] font-[font-400]"
    >
      {title || "--"}
    </Link>
  );
};
