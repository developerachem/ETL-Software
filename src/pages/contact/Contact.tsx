import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaPhone } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import Container from "../../container/Container";
import { usePostContactMutation } from "../../features/constct/contsct";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [postContact, { isLoading, isSuccess, isError, error }] =
    usePostContactMutation();

  // * Local State
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  // * Handle Submit From
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.error("All Fields are required");
    }

    postContact({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
  };

  // * Action After Submit
  useEffect(() => {
    if (isError) {
      toast.dismiss();
      toast.error("Something when wrong. Please try again.");
      console.log(error);
    }

    if (!isLoading && isSuccess) {
      toast.dismiss();
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }, [isLoading, isSuccess, isError, error]);

  return (
    <>
      <div className="h-[900px] lg:h-screen relative">
        <Container>
          <div className="w-full relative z-20 lg:-mt-[100px]">
            <div className="block lg:flex justify-between gap-5 items-center">
              <div className="w-full lg:max-w-[50%] xl:max-w-[60%]">
                <h1 className="font-[font-it] text-[25px] sm:text-[30px] text-white md:text-[50px] lg:text-[40px] 2xl:text-[60px] text-primaryColor mb-5 text-center lg:text-left">
                  Building Mobile Apps That Make an Impact
                </h1>
                <p className="text-center lg:text-left text-[15px] sm:text-[18px] lg:text-[16px] xl:text-[20px] text-[#fff] mb-5 lg:mb-0">
                  This is a simple boilerplate for ReactJS with TailwindCSS.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid non eum ipsam quae quam fugiat qui quas, tempora in
                  quo, sint eaque quisquam consequuntur quod blanditiis
                  necessitatibus ullam maiores molestiae optio. Quo magni ea
                  tempora optio dolorem, doloribus magnam soluta, omnis totam
                  quia quibusdam neque, quisquam quam labore cumque
                  consequuntur?
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-primaryColor p-5 xl:p-8 w-full lg:max-w-[50%] xl:max-w-[40%] rounded shadow"
              >
                <h1 className="text-white text-[30px] lg:text-[35px] font-[font-600] mb-2 xl:mb-5">
                  Contact Us
                </h1>
                <div className="w-full block xsm:flex lg:block items-end justify-between gap-5">
                  <label className="w-full">
                    <p className="text-white">Name</p>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="py-3 px-3 rounded-md placeholder:text-[#ffffff99] text-white outline-none focus:outline-none focus:border-none w-full bg-[#ffffff30]"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </label>
                  <label className="w-full mt-2 xl:mt-5 block">
                    <p className="text-white">Email</p>
                    <input
                      type="email"
                      placeholder="Type here"
                      className="py-3 px-3 rounded-md placeholder:text-[#ffffff99] text-white outline-none focus:outline-none focus:border-none w-full bg-[#ffffff30]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                </div>

                <label className="w-full mt-2 xl:mt-5 block">
                  <p className="text-white">Subject</p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="py-3 px-3 rounded-md placeholder:text-[#ffffff99] text-white outline-none focus:outline-none focus:border-none w-full bg-[#ffffff30]"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </label>
                <label className="w-full mt-2 xl:mt-5 block">
                  <p className="text-white">Message</p>
                  <textarea
                    placeholder="Type here"
                    className="textarea placeholder:text-[#ffffff99] text-white outline-none focus:outline-none focus:border-none w-full bg-[#ffffff30]"
                    style={{ height: "120px" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </label>

                <button className="bg-[#ffffff30] py-3 w-full mt-3 rounded-lg text-white font-[font-500]">
                  {isLoading ? "Loading..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </Container>

        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-1"
        >
          <source src="https://riseapps.co/wp-content/uploads/2024/08/hero-video.mp4" />
        </video>

        <div className="bg-[#00000080] absolute h-full w-full top-0 left-0 z-10" />
      </div>

      <div className="py-24">
        <Container>
          <div className="w-full flex flex-col-reverse md:flex-row gap-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.275491568445!2d90.4238753465306!3d23.79899866669804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74245b7df47%3A0xfc8e97c08c64d4d1!2sExcel%20HR%20Tower!5e0!3m2!1sen!2sbd!4v1725192536588!5m2!1sen!2sbd"
              height="450"
              loading="lazy"
              className="rounded-xl border shadow-xl  md:max-w-[70%] w-full md:w-[70%]"
            />

            <div className="w-full md:w-[50%] xl:w-[30%]">
              <h1 className="font-[font-it] text-[30px] text-primaryColor xl:text-[45px]  mb-5 text-center md:text-left">
                Get in Touch
              </h1>

              <div className="">
                <button className="bg-color500 w-full p-5 rounded-xl shadow flex gap-5 items-center">
                  <div className="bg-color200 w-[60px] h-[60px] shadow-xl rounded-xl flex justify-center items-center">
                    <IoMailUnreadOutline size={25} color="#fff" />
                  </div>

                  <h5 className="font-[font-500] text-[16px] xl:text-[20px] text-primaryColor">
                    info@excelbd.com
                  </h5>
                </button>
                <button className="bg-color500 w-full p-5 rounded-xl shadow flex gap-5 items-center mt-5">
                  <div className="bg-color200 w-[60px] h-[60px] shadow-xl rounded-xl flex justify-center items-center">
                    <FaPhone size={25} color="#fff" />
                  </div>

                  <h5 className="font-[font-500] text-[16px] xl:text-[20px] text-primaryColor">
                    01754774203
                  </h5>
                </button>
                <button className="bg-color500 w-full p-5 rounded-xl shadow flex gap-5 items-center mt-5">
                  <div className="bg-color200 w-[60px] min-w-[60px] h-[60px] min-h-[60px] shadow-xl rounded-xl flex justify-center items-center">
                    <MdPlace size={25} color="#fff" />
                  </div>

                  <h5 className="font-[font-500] text-[16px] xl:text-[20px] text-primaryColor text-left">
                    House#16, Road#02 Baridhara J Block, Dhaka 1212
                  </h5>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Contact;
