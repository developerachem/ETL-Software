import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import logo from "../../assets/image/logo.png";
import Container from "../../container/Container";

function HeaderTop() {
  return (
    <div className="bg-white border-b px-20 ">
      <Container>
        <div className="w-full flex justify-between items-center">
          <img src={logo} alt="" className="w-[100px]" />

          <div className="flex gap-5 items-center">
            <div className="border flex p-2 gap-3 rounded-full bg-color300 px-5 items-center">
              <IoLogoWhatsapp
                size={25}
                className="text-primaryColor cursor-pointer"
              />
              <div className="w-[2px] bg-color500 h-[30px]" />
              <IoCall size={25} className="text-primaryColor cursor-pointer" />
            </div>
            <button className="btn bg-primaryColor rounded-full text-white px-7 hover:bg-color900">
              Get In Touch
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeaderTop;
