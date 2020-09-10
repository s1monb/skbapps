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
          style={{ top: "0px", right: "0px" }}
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
          style={{ top: "-60px", right: "0px" }}
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
        <div className="bg-dark1 inline-block px-16 py-10 rounded-lg shadow-md text-left">
          <div className="mb-2">
            <svg
              className="inline-block h-16 mb-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              transform="rotate(75)"
              fill="#F15386"
            >
              <path d="M256 480h72.5c4.615 0 9.232-.528 13.722-1.569l123.25-28.57c13.133-3.044 24.995-10.478 33.4-20.933 8.466-10.531 13.128-23.746 13.128-37.21V177.445c0-21.438-11.684-41.333-30.492-51.92l-101.5-57.139c-36.681-20.651-64.548-.478-88.228 28.683l-156.211-60.46c-34.639-13.405-73.672 3.411-87.35 37.709-13.696 34.345 3.326 73.326 38.212 86.829L176 192l-108.5-2.843c-37.22 0-67.5 29.991-67.5 66.855s30.28 66.854 67.5 66.854h102.327c-9.558 28.393 3.681 59.705 31.297 72.775C183.12 434.864 212.126 480 256 480zM364.311 96.271l101.5 57.14c8.753 4.927 14.189 14.137 14.189 24.035v214.272c0 12.91-8.945 24.001-21.754 26.97l-123.25 28.57a28.843 28.843 0 0 1-6.496.742H256c-37.41 0-37.35-55.424 0-55.424a8 8 0 0 0 8-8v-7.143a8 8 0 0 0-8-8h-29c-37.41 0-37.351-55.425 0-55.425h29a8 8 0 0 0 8-8v-7.143a8 8 0 0 0-8-8H67.5c-47.021 0-46.929-69.709 0-69.709H256a8 8 0 0 0 8-8V201.04a8 8 0 0 0-5.112-7.461L97.981 131.305c-43.579-16.867-17.902-81.857 26.037-64.852l172.497 66.761a8.002 8.002 0 0 0 9.098-2.418l22.54-27.757c8.76-10.785 23.966-13.632 36.158-6.768z" />
            </svg>
            <div className="inline-block align-bottom ml-2 text-turkis2">
              <h1 className="text-5xl inline-block">Hei</h1>
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
                <div className="bg-ocean2 text-2xl px-3 py-1 rounded-md shadow-md">
                  Simon Kinn Bjørnøy
                </div>
              </div>
              <div className="text-left inline-block mb-6 pl-8">
                <p className="text-xl">Alder:</p>
                <div className="bg-ocean2 text-2xl px-3 py-1 rounded-md shadow-md">
                  21 år
                </div>
              </div>
            </div>
            <div className="ml-10 mr-8">
              <div className="text-left inline-block mb-6 pl-10">
                <p className="text-xl">Egenskaper:</p>
                <div className="bg-ocean2 text-2xl pl-6 pr-48 pt-4 pb-20 mt-2 rounded-md shadow-md">
                  <ul className="space-y-2 pb-24 pt-2">
                    <li>
                      <i className="text-superpink text-3xl fal fa-portrait"></i>
                      <span className="text-white text-2xl ml-3">
                        Selvstending
                      </span>
                    </li>
                    <li>
                      <i className="text-superpink text-3xl fal fa-question-circle"></i>
                      <span className="text-white text-2xl ml-3">
                        Nysgjerrig
                      </span>
                    </li>
                    <li>
                      <i className="text-superpink text-3xl fal fa-bullseye-arrow"></i>
                      <span className="text-white text-2xl ml-3">
                        Målbevisst
                      </span>
                    </li>
                    <li>
                      <i className="text-superpink text-3xl fal fa-laptop-code"></i>
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
        >
          <motion.div
            transition={bounceTransition}
            animate={{ y: ["10%", "-10%"] }}
            className="absolute opacity-75 cursor-pointer hover:opacity-100 text-lg"
            style={{ bottom: "30px", right: "50%" }}
          >
            <span className="">Keep scrolling</span>
            <br />
            <i className="fal fa-arrow-down text-2xl"></i>
          </motion.div>
        </Link>
      </section>
    </div>
  );
}

export default HomeSection;
