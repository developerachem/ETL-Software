import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import { FaAppStoreIos, FaApple, FaGooglePlay } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { Link } from "react-router-dom";
import Title from "../../components/title/Title";
import Container from "../../container/Container";
import { URLContact } from "../../routes/url";
import { styles } from "../../utils/cn";

function ServiceSingle() {
  const [init, setInit] = useState(false);
  const [active, setActive] = useState("frontend");

  // * Particl Initiate
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(false);
    });
  }, []);

  return (
    <>
      <div className="h-[70vh] relative ">
        <Container>
          <div className="w-[70%] ">
            <h1 className="font-[font-it] text-[60px] text-primaryColor mb-5">
              Services Name
            </h1>
            <h1 className="text-[35px] font-[font-500] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              itaque nihil alias expedita magnam ducimus officia, quis odit
              deleniti eius.
            </h1>

            <ul className="flex items-center gap-2 mt-10">
              <li>-----</li>
              <li>
                <FaApple size={25} />
              </li>
              <li>
                <IoLogoAndroid size={25} />
              </li>
              <li>
                <FaGooglePlay size={20} />
              </li>
              <li>
                <FaAppStoreIos size={20} />
              </li>
            </ul>
          </div>
        </Container>

        <div className="absolute top-[250px] right-[400px]">
          <div className="flex justify-center items-center relative">
            <Link
              to={URLContact()}
              className="bg-primaryColor flex justify-center items-center h-[100px] w-[100px] absolute z-40 rounded-full shadow text-[17px] font-[font-500] text-white"
            >
              Let's Talk
            </Link>

            <div className="h-[120px] w-[120px] absolute z-30 rounded-full waves wave-1 pointer-events-none" />
            <div className="h-[120px] w-[120px] absolute z-20 rounded-full waves wave-2 pointer-events-none" />
            <div className="h-[120px] w-[120px] absolute z-10 rounded-full waves wave-3 pointer-events-none" />
          </div>
        </div>

        <div className="relative overflow-hidden w-full">
          {init && (
            <section
              style={{
                width: "500px",
                height: "300px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Particles
                id="tsparticles"
                options={{
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#00000020",
                    },
                    links: {
                      color: "#00000020",
                      distance: 150,
                      enable: true,
                      opacity: 0.1,
                      width: 1,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 2,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                      },
                      value: 120,
                    },
                    opacity: {
                      value: 0.2,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 2 },
                    },
                  },
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </section>
          )}
        </div>
      </div>

      <div className="bg-[#2D62AE10] py-[100px]">
        <Container>
          <div className="w-full">
            <Title title="Technology" />

            <div className="shadow-md mt-10 p-10 w-[60%] m-auto border border-color500 rounded-xl">
              <ul className="flex justify-around border-b border-b-color500">
                <li>
                  <button
                    className={styles(
                      "py-2 px-4 text-[18px] font-[font-500] border-b-4 ",
                      { "border-b-primaryColor": active === "frontend" }
                    )}
                    onClick={() => setActive("frontend")}
                  >
                    Frontend
                  </button>
                </li>
                <li>
                  <button
                    className={styles(
                      "py-2 px-4 text-[18px] font-[font-500] border-b-4 ",
                      { "border-b-primaryColor": active === "backend" }
                    )}
                    onClick={() => setActive("backend")}
                  >
                    Backend
                  </button>
                </li>
                <li>
                  <button
                    className={styles(
                      "py-2 px-4 text-[18px] font-[font-500] border-b-4 ",
                      { "border-b-primaryColor": active === "platform" }
                    )}
                    onClick={() => setActive("platform")}
                  >
                    Platform
                  </button>
                </li>
              </ul>

              {active === "frontend" && (
                <div className="pt-5 grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaApple size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <IoLogoAndroid size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Google Play Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                </div>
              )}
              {active === "backend" && (
                <div className="pt-5 grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaApple size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <IoLogoAndroid size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Google Play Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                </div>
              )}
              {active === "platform" && (
                <div className="pt-5 grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaApple size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <IoLogoAndroid size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Google Play Store
                    </h1>
                  </div>
                  <div className="flex flex-col items-center p-3 py-10">
                    <FaAppStoreIos size={40} className="text-primaryColor" />
                    <h1 className="text-[16px] font-[font-400] text-center mt-3">
                      Apple App Store
                    </h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      <div className="h-[100px]" />
    </>
  );
}

export default ServiceSingle;
