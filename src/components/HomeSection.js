import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

function HomeSection() {
  return (
    <div>
      <section className="h-screen relative text-center" id="Hjem">
        <svg
          className="absolute"
          style={{ top: "0px", right: "0px", zIndex: "-1" }}
          xmlns="http://www.w3.org/2000/svg"
          width="734.67"
          height="281.048"
          viewBox="0 0 734.67 281.048"
        >
          <path
            d="M654-3897c-54.889-17.263-140.446-15.041-220.834-12.818-40.982,1.133-80.62,2.266-114.165.818-93.573-4.042-218.472-95.4-232.67-106H821v281.048C734.527-3816.407,736.552-3871.036,654-3897Z"
            transform="translate(-86.33 4015)"
            fill="#57dde6"
            opacity="0.679"
          />
        </svg>

        <svg
          className="absolute"
          style={{ top: "-60px", right: "0px", zIndex: "-1" }}
          xmlns="http://www.w3.org/2000/svg"
          width="734.67"
          height="281.048"
          viewBox="0 0 734.67 281.048"
        >
          <path
            d="M654-3897c-54.889-17.263-140.446-15.041-220.834-12.818-40.982,1.133-80.62,2.266-114.165.818-93.573-4.042-218.472-95.4-232.67-106H821v281.048C734.527-3816.407,736.552-3871.036,654-3897Z"
            transform="translate(-86.33 4015)"
            fill="#57dde6"
            opacity="0.208"
          />
        </svg>
        <svg
          className="absolute z-0"
          style={{ bottom: "-52px", right: "0px", zIndex: "-1" }}
          xmlns="http://www.w3.org/2000/svg"
          width="1991.707"
          height="487"
          viewBox="0 0 1991.707 487"
        >
          <path
            id="Path_1"
            data-name="Path 1"
            d="M154,2352.422s106.106-173.49,229.157-173.879,376.9,126.249,525.37,55.252,219.6-157.624,362.891-123.117,371.8-49.436,371.8-49.436,249.8-90.076,373.878-155.762,128.605-30.8,128.605-30.8v475.656Z"
            transform="translate(-154 -1865.422)"
            fill="#5b7490"
            opacity="0.687"
          />
        </svg>
        <svg
          className="absolute z-0"
          style={{ bottom: "-2px", right: "0px", zIndex: "-1" }}
          xmlns="http://www.w3.org/2000/svg"
          width="1991.707"
          height="487"
          viewBox="0 0 1991.707 487"
        >
          <path
            id="Path_4"
            data-name="Path 4"
            d="M154,2352.422s106.106-173.49,229.157-173.879,376.9,126.249,525.37,55.252,219.6-157.624,362.891-123.117,371.8-49.436,371.8-49.436,249.8-90.076,373.878-155.762,128.605-30.8,128.605-30.8v475.656Z"
            transform="translate(-154 -1865.422)"
            fill="#5b7490"
            opacity="0.402"
          />
        </svg>

        <div className="sticky top-0 z-40 text-left">
          <div className="inline-block h-20 w-20 rounded-full bg-dark1 ml-8 text-5xl text-superpink text-center shadow-md mt-5">
            <i className="fal fa-home"></i>
          </div>
          <h1 className="ml-10 font-bold inline-block sm:text-5xl text-4xl">
            Hjem
          </h1>
        </div>
        <div className="bg-dark1 inline-block px-16 py-10 rounded-lg shadow-lg text-left">
          <div className="mb-2">
            <motion.svg
              animate={{
                rotate: [0, 30, 0, 30, 0, 30, 0],
              }}
              style={{ originX: "middle", originY: "middle", rotate: 0 }}
              transition={{
                duration: 1.3,
                delay: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 5,
              }}
              className="inline-block h-16 mb-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#F15386"
            >
              <path d="M503.03886,115.67818a59.82954,59.82954,0,0,0-37.35993-27.03135,60.44007,60.44007,0,0,0-33.70576,1.64649c.08593-26.49815-16.33728-50.40449-41.75234-58.467C344.205,17.23249,317.34857,55.80686,312.964,77.139L291.47649,181.89913,256.33524,45.22479A60.245,60.245,0,1,0,139.64431,75.24248l3.74205,14.55279a60.14487,60.14487,0,0,0-75.66708,74.55888C108.98335,303.634,106.626,295.65543,107.02249,297.05192l-5.49394-5.1719a60.24146,60.24146,0,1,0-82.5633,87.74643l98.14084,92.36363A146.6781,146.6781,0,0,0,217.99879,512H333.41632a117.845,117.845,0,0,0,115.02693-90.85386L510.33546,161.2096A59.83169,59.83169,0,0,0,503.03886,115.67818Zm-23.83309,38.11928L417.31356,413.73205a85.95272,85.95272,0,0,1-83.89724,66.26783H217.99879A114.79622,114.79622,0,0,1,139.035,448.68726l-98.1428-92.36754c-27.206-25.59385,11.5191-66.8108,38.70753-41.13688l54.91005,51.67989c5.43534,5.12111,13.48191.70313,13.48191-5.8262a264.52145,264.52145,0,0,0-10.90584-75.19559L98.40367,155.274c-10.67929-36.08607,43.56086-51.87129,54.18156-16.045L186.25584,252.8662c5.78884,19.57234,34.942,11.08012,29.96762-8.28909L170.63728,67.27956c-9.36683-36.45913,45.39283-50.30683,54.70693-14.086l50.834,197.70778c4.60725,17.91218,30.28988,17.14264,33.98115-.83985L344.30654,83.58235c7.46066-36.2931,63.11286-26.49619,54.994,13.0899L368.63375,246.17282c-3.83775,18.7364,24.45807,25.40634,28.98133,6.4219l26.63963-111.88129C433.07469,103.768,487.79334,117.813,479.20577,153.79746Z" />
            </motion.svg>
            <div className="inline-block align-bottom ml-2 text-turkis2">
              <h1 className="text-5xl inline-block font-bold">Hei</h1>
              <span className="text-3xl ml-3">- Dette er min jobbsøknad</span>
            </div>
          </div>
          <div className="flex flex-wrap bg-ocean rounded-lg shadow-md px-12 py-8">
            <div className="ml-16">
              <div className="my-6">
                <img
                  className=""
                  src="/img/simon.png"
                  alt="Simon Kinn Bjørnøy"
                />
              </div>
              <div className="text-left inline-block mb-6">
                <p className="text-xl">Navn:</p>
                <div className="bg-ocean2 text-2xl px-3 py-1 rounded-md shadow-md nunito">
                  Simon Kinn Bjørnøy
                </div>
              </div>
              <div className="text-left inline-block mb-6 pl-8">
                <p className="text-xl">Alder:</p>
                <div className="bg-ocean2 text-2xl px-3 py-1 rounded-md shadow-md nunito">
                  21 år
                </div>
              </div>
            </div>
            <div className="ml-10 mr-8">
              <div className="text-left inline-block mb-8 pl-10">
                <p className="text-xl">Egenskaper:</p>
                <div className="bg-ocean2 text-2xl pl-6 pr-40 pt-4 pb-8 mt-2 rounded-md shadow-md">
                  <ul className="space-y-2 pb-24 pt-2">
                    <li>
                      <i className="text-superpink text-3xl fal fa-portrait w-10"></i>
                      <span className="text-white text-2xl ml-3">
                        Selvstending
                      </span>
                    </li>

                    <li>
                      <i className="text-superpink text-3xl fal fa-question-circle w-10"></i>
                      <span className="text-white text-2xl ml-3">
                        Nysgjerrig
                      </span>
                    </li>
                    <li>
                      <i className="text-superpink text-3xl fal fa-route w-10"></i>
                      <span className="text-white text-2xl ml-3">
                        Løsningsorientert
                      </span>
                    </li>
                    <li>
                      <i className="text-superpink text-3xl fal fa-bullseye-arrow w-10"></i>
                      <span className="text-white text-2xl ml-3">
                        Målbevisst
                      </span>
                    </li>
                    <li>
                      <i className="text-superpink text-3xl fal fa-laptop-code w-10"></i>
                      <span className="text-white text-2xl ml-3">Selvlært</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="Prosjekter"
          spy={true}
          smooth={true}
          duration={800}
          offset={0}
          style={{ zIndex: "100" }}
        >
          <motion.div
            transition={bounceTransition}
            animate={{ y: ["10%", "-10%"] }}
            className="absolute opacity-75 cursor-pointer hover:opacity-100 text-lg"
            style={{ bottom: "30px", right: "50%" }}
          >
            <span>Keep scrolling</span>
            <br />
            <i className="fal fa-arrow-down text-2xl"></i>
          </motion.div>
        </Link>
      </section>
    </div>
  );
}

export default HomeSection;
