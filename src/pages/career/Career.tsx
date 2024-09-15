import { Link } from "react-router-dom";
import Container from "../../container/Container";
import { URLCareerSingle } from "../../routes/url";

function Career() {
  return (
    <div className="py-[50px]">
      <Container>
        <div className="w-full">
          <div className="relative flex justify-start items-start">
            <div className="bg-white p-5 border rounded-xl md:flex items-center gap-5">
              <div className="">
                <h1 className="mt-10 font-[font-600] text-[25px]">
                  Front-End Developer
                </h1>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nihil sapiente quas unde quos rerum optio perferendis tempore
                  libero odio quasi eveniet tempora aut obcaecati eligendi,
                  reiciendis quibusdam cumque qui similique nisi, delectus vel!
                  Facilis fugiat aliquid porro error. Eum dignissimos ad quo
                </p>
              </div>

              <Link
                className="min-w-[130px] text-center bg-primaryColor py-3 px-5 text-white font-[font-500] rounded inline-block mt-3"
                to={URLCareerSingle("front-end-developer")}
              >
                Apply Now
              </Link>
            </div>
            <img
              src="/career-path.jpg"
              alt=""
              className="absolute h-[60px] w-[170px] top-2 object-contain -left-[17px]"
            />
            <h2 className="absolute top-[20px] left-[5px] text-white font-[font-500] text-[13px]">
              Full Time | Remote
            </h2>
          </div>
          <div className="relative flex justify-start items-start mt-5">
            <div className="bg-white p-5 border rounded-xl md:flex items-center gap-5">
              <div className="">
                <h1 className="mt-10 font-[font-600] text-[25px]">
                  Senior Software Engineer
                </h1>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nihil sapiente quas unde quos rerum optio perferendis tempore
                  libero odio quasi eveniet tempora aut obcaecati eligendi,
                  reiciendis quibusdam cumque qui similique nisi, delectus vel!
                  Facilis fugiat aliquid porro error. Eum dignissimos ad quo
                </p>
              </div>

              <Link
                className="min-w-[130px] text-center bg-primaryColor py-3 px-5 text-white font-[font-500] rounded inline-block mt-3"
                to={URLCareerSingle("back-end-developer")}
              >
                Apply Now
              </Link>
            </div>
            <img
              src="/career-path.jpg"
              alt=""
              className="absolute h-[60px] w-[170px] top-2 object-contain -left-[17px]"
            />
            <h2 className="absolute top-[20px] left-[5px] text-white font-[font-500] text-[13px]">
              Full Time | On-Site
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Career;
