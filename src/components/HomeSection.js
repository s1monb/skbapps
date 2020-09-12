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
      <section
        className="h-screen relative text-center"
        id="Hjem"
        style={{ scrollSnapAlign: "start" }}
      >
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
                rotate: [-15, 10, -15, 10, -15, 10, -15],
              }}
              style={{
                originX: "middle",
                originY: "middle",
                rotate: -15,
              }}
              transition={{
                duration: 1.3,
                delay: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 5,
              }}
              className="inline-block h-16 mb-3 fa-flip-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#F15386"
            >
              <path d="M369.4 119.1V96.3c0-42.8-42.8-72.8-82.3-56.5-19.8-54.2-94.4-52.2-112.5.8-38.4-15.8-81.8 12.8-81.8 55.9v145.7c-20.3-13.7-47.6-13.9-68.4 1.5-26.6 19.6-32.4 57.1-13.1 83.9l125 174.4c4.5 6.3 11.8 10 19.5 10H388c11.2 0 20.9-7.7 23.4-18.6l31.4-135.6c3.4-14.8 5.2-30 5.2-45.3V176.2c0-41.5-40.6-70.1-78.6-57.1zM416 312.5c0 12.8-1.5 25.6-4.4 38l-30 129.4H159.9l-122.6-171c-9-12.6-6.3-30.4 6.1-39.5 12.3-9.1 29.6-6.4 38.6 6.2l28.3 39.4c4.5 6.3 14.5 3.1 14.5-4.7V96.5c0-38 55.4-36.9 55.4.7V256c0 4.4 3.6 8 8 8h7.1c4.4 0 8-3.6 8-8V60.2c0-38 55.4-36.9 55.4.7v195c0 4.4 3.6 8 8 8h7.1c4.4 0 8-3.6 8-8V95.6c0-38 55.4-36.9 55.4.7V256c0 4.4 3.6 8 8 8h7.1c4.4 0 8-3.6 8-8v-79c0-37.6 55.4-38.8 55.4-.7v136.2z" />
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
