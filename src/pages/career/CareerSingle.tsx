import Container from "../../container/Container";

function CareerSingle() {
  return (
    <div className="bg-white">
      <Container>
        <div className="w-full lg:w-[70%] m-auto">
          <h1 className="text-[25px] sm:text-[30px] md:text-[40px] font-[font-600] text-center mt-5">
            Front-End Developer
          </h1>

          <div className="bg-color200 p-5 mt-5 rounded shadow border">
            <h1 className="mb-2 text-[25px] font-[font-500]">
              Job Description:
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              repellat reiciendis porro commodi cum doloremque, illo modi
              dolores sapiente numquam laborum placeat necessitatibus, ducimus
              et. Quos doloremque, minus recusandae nulla unde pariatur
              excepturi deserunt enim nobis placeat sit! Dolore sint et nulla
              sunt, veniam dolores repellat saepe odit eos inventore magnam
              voluptates corrupti quaerat! Tempore, debitis nihil sapiente optio
              quod unde ea non velit blanditiis eligendi! Dicta, optio rerum
              temporibus possimus doloribus eligendi quasi voluptatum, libero
              eveniet maiores nobis. Eum inventore aut, consequuntur eos
              deserunt molestiae nulla pariatur voluptates quidem, id ex? Eaque
              earum numquam libero? Totam odio maxime similique?
            </p>
            <h1 className="mb-2 text-[25px] font-[font-500] mt-10">
              Responsibilities:
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              repellat reiciendis porro commodi cum doloremque, illo modi
              dolores sapiente numquam laborum placeat necessitatibus, ducimus
              et. Quos doloremque, minus recusandae nulla unde pariatur
              excepturi deserunt enim nobis placeat sit! Dolore sint et nulla
              sunt, veniam dolores repellat saepe odit eos inventore magnam
              voluptates corrupti quaerat! Tempore, debitis nihil sapiente optio
              quod unde ea non velit blanditiis eligendi! Dicta, optio rerum
              temporibus possimus doloribus eligendi quasi voluptatum, libero
              eveniet maiores nobis. Eum inventore aut, consequuntur eos
              deserunt molestiae nulla pariatur voluptates quidem, id ex? Eaque
              earum numquam libero? Totam odio maxime similique?
            </p>
            <h1 className="mb-2 text-[25px] font-[font-500] mt-10">
              Requirements:
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              repellat reiciendis porro commodi cum doloremque, illo modi
              dolores sapiente numquam laborum placeat necessitatibus, ducimus
              et. Quos doloremque, minus recusandae nulla unde pariatur
              excepturi deserunt enim nobis placeat sit! Dolore sint et nulla
              sunt, veniam dolores repellat saepe odit eos inventore magnam
              voluptates corrupti quaerat! Tempore, debitis nihil sapiente optio
              quod unde ea non velit blanditiis eligendi! Dicta, optio rerum
              temporibus possimus doloribus eligendi quasi voluptatum, libero
              eveniet maiores nobis. Eum inventore aut, consequuntur eos
              deserunt molestiae nulla pariatur voluptates quidem, id ex? Eaque
              earum numquam libero? Totam odio maxime similique?
            </p>
          </div>

          <div className="bg-color400 p-5 mt-10 rounded shadow border">
            <h1 className="text-[18px] sm:text-[25px] md:text-[35px] font-[font-600] text-center mt-5">
              Apply Now to get Short Listed
            </h1>

            <form action="">
              <div className="w-full sm:flex  items-end justify-between gap-5 mt-3">
                <label className="w-full">
                  <p className="text-black font-[font-500]">Name</p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="py-3 px-3 rounded-md placeholder:text-[#00000099]  outline-none focus:outline-none focus:border-none w-full bg-[#ffffff]"
                    required
                  />
                </label>

                <label className="w-full mt-2 xl:mt-5 block">
                  <p className="text-black font-[font-500]">Phone Number</p>
                  <input
                    type="number"
                    placeholder="Type here"
                    className="py-3 px-3 rounded-md placeholder:text-[#00000099]  outline-none focus:outline-none focus:border-none w-full bg-[#ffffff]"
                    required
                  />
                </label>
              </div>

              <div className="w-full sm:flex  items-end justify-between gap-5 mt-3">
                <label className="w-full">
                  <p className="text-black font-[font-500]">Email Address</p>
                  <input
                    type="mail"
                    placeholder="Type here"
                    className="py-3 px-3 rounded-md placeholder:text-[#00000099]  outline-none focus:outline-none focus:border-none w-full bg-[#ffffff]"
                    required
                  />
                </label>

                <label className="w-full mt-2 xl:mt-5 block">
                  <p className="text-black font-[font-500]">
                    Applying for the Position
                  </p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="py-3 px-3 rounded-md placeholder:text-[#00000099]  outline-none focus:outline-none focus:border-none w-full bg-[#ffffff]"
                    required
                  />
                </label>
              </div>

              <div className="w-full sm:flex  items-end justify-between gap-5 mt-3">
                <label className="w-full">
                  <p className="text-black font-[font-500]">
                    permanent address
                  </p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="py-3 px-3 rounded-md placeholder:text-[#00000099]  outline-none focus:outline-none focus:border-none w-full bg-[#ffffff]"
                  />
                </label>

                <label className="w-full mt-2 xl:mt-5 block">
                  <p className="text-black font-[font-500]">Present Address</p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="py-3 px-3 rounded-md placeholder:text-[#00000099]  outline-none focus:outline-none focus:border-none w-full bg-[#ffffff]"
                  />
                </label>
              </div>

              <div className="w-full mt-5">
                <p className="text-black font-[font-500]">
                  Upload your resume (PDF, doc, docx)
                </p>
                <label className="border border-primaryColor w-[200px] block border-dashed mt-1 py-10 rounded-lg bg-white cursor-pointer">
                  <img
                    src="/cv.png"
                    className="h-[50px] object-contain"
                    alt=""
                  />
                  <input type="file" className="hidden" />
                </label>
              </div>

              <button className="bg-primaryColor mt-5 w-full py-3 rounded-lg text-white font-[font-500] text-[18px]">
                Submit
              </button>
            </form>
          </div>

          <div className="h-40" />
        </div>
      </Container>
    </div>
  );
}

export default CareerSingle;
