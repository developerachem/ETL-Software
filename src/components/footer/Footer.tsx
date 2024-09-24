import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../../container/Container";
import serviceData from "../../pages/serviceSingle/serviceData";
import { styles } from "../../utils/cn";

function Footer() {
  const { pathname } = useLocation();
  return (
    <>
      <div
        className={styles("bg-color300 py-5 relative", {
          "pt-24": pathname === "/",
        })}
      >
        {pathname === "/" && (
          <div className="bg-primaryColor rounded-[25px] xsm:rounded-[50px] h-[100px] absolute -top-[50px] left-0 w-full -z-10 shadow-2xl" />
        )}
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-10 w-full py-10 ">
            <div className="2xl:col-span-2 ">
              <img
                src="/logo.png"
                className="w-[100px] xl:w-[150px] h-[80px] xl:h-[100px]"
                alt=""
              />
              <h1 className="mt-3 text-[17px] xl:text-[20px] font-[font-500]">
                Excel Technologies LTD.
              </h1>
              <p className="text-[14px] xl:text-[16px]">
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
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full">
            <p className="text-white text-[12px] xl:text-[15px]">
              © All rights reserved by excelbd.com
            </p>
            <p className="text-white text-[12px] xl:text-[15px]">
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
      className="mt-2 hover:tracking-wider hover:text-primaryColor transition-all text-[15px] xl:text-[17px] font-[font-400]"
    >
      {title || "--"}
    </Link>
  );
};
