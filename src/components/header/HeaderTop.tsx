import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import Container from "../../container/Container";
import { URLContact } from "../../routes/url";

function HeaderTop() {
  return (
    <div className="bg-[#F4F5FA] border-b px-20 sticky top-0 z-50">
      <Container>
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="" className="w-[100px]" />
          </Link>

          <div className="flex gap-5 items-center">
            <div className="border flex p-2 gap-3 rounded-full bg-color300 px-5 items-center">
              <IoLogoWhatsapp
                size={25}
                className="text-primaryColor cursor-pointer"
              />
              <div className="w-[2px] bg-color500 h-[30px]" />
              <IoCall size={25} className="text-primaryColor cursor-pointer" />
            </div>
            <Link
              to={URLContact()}
              className="btn border-primaryColor bg-primaryColor rounded-full text-white px-7 hover:bg-color900 font-[font-500]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeaderTop;
