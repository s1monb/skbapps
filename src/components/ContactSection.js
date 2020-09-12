import React from "react";

function ContactSection() {
  return (
    <section
      className="h-screen relative max-h-screen text-center"
      id="Kontakt"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="sticky top-0 z-40 text-left">
        <div className="inline-block h-20 w-20 rounded-full bg-dark1 ml-8 text-5xl text-superpink text-center shadow-md mt-5">
          <i className="fal fa-phone-alt"></i>
        </div>
        <h1 className="ml-10 font-bold inline-block sm:text-5xl text-4xl">
          Kontakt meg
        </h1>
      </div>
      <div
        className="bg-dark1 inline-block px-16 mt-20 py-10 rounded-lg shadow-lg text-left"
        style={{ zIndex: "" }}
      >
        <div className="mb-2">
          <svg
            className="inline-block h-16 mb-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="#F15386"
          >
            <path d="M360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0 128h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-168-32c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM512 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM272 448H112v-15.1c0-7 2.1-13.8 6-19.6 5.6-8.3 15.8-13.2 27.3-13.2 12.4 0 20.8 7 46.8 7 25.9 0 34.3-7 46.8-7 11.5 0 21.7 5 27.3 13.2 3.9 5.8 6 12.6 6 19.6V448h-.2zm272-32c0 17.6-14.4 32-32 32H304v-15.1c0-13.9-4.2-26.8-11.4-37.5-12.1-17.9-32.7-27.4-53.8-27.4-19.5 0-24.4 7-46.8 7s-27.3-7-46.8-7c-21.2 0-41.8 9.4-53.8 27.4C84.2 406.1 80 419 80 432.9V448H64c-17.6 0-32-14.4-32-32V160h512v256zm0-288H32V96c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v32z" />
          </svg>
          <div className="inline-block align-bottom ml-2 text-turkis2">
            <h1 className="text-5xl inline-block font-bold">Kontakt meg</h1>
          </div>
        </div>
        <div className="flex flex-wrap bg-ocean rounded-lg shadow-md px-12 py-8">
          <div className="ml-12">
            <div className="my-6">
              <img src="/img/simon.png" alt="Simon Kinn Bjørnøy" />
            </div>
          </div>
          <div className="ml-12 mr-8">
            <div className="text-left inline-block mb-8 pl-10">
              <div className="bg-ocean2 text-2xl pl-6 pr-32 pt-4 pb-8 mt-2 rounded-md shadow-md">
                <ul className="space-y-2 pb-16 pt-2">
                  <li>
                    <i
                      className="text-superpink text-3xl fal fa-user"
                      style={{ widht: "32px" }}
                    ></i>
                    <span className="text-white text-2xl ml-3 font-semibold">
                      Simon Kinn Bjørnøy
                    </span>
                  </li>

                  <li>
                    <i
                      className="text-superpink text-3xl fal fa-envelope"
                      style={{ widht: "32px", height: "26px" }}
                    ></i>
                    <a
                      className=" text-2xl ml-3 text-turkis opacity-75 hover:opacity-100 underline"
                      href="mailto:simon.bjornoy@gmail.com"
                    >
                      simon.bjornoy@gmail.com
                    </a>
                  </li>
                  <li>
                    <i
                      className="text-superpink text-3xl fal fa-mobile pl-1"
                      style={{ widht: "24px" }}
                    ></i>
                    <span className="text-white text-2xl ml-5 font-semibold">
                      +47 981 04 446
                    </span>
                  </li>
                </ul>
                <div className="pl-2 space-x-5 text-superpink text-4xl">
                  <a
                    href="https://www.linkedin.com/in/simon-kinn-bj%C3%B8rn%C3%B8y-b9129115b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin opacity-75 hover:opacity-100"></i>
                  </a>
                  <a
                    href="https://github.com/s1monb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square opacity-75 hover:opacity-100"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/simon.bjornoy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-square opacity-75 hover:opacity-100"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute"
        style={{ top: "-60px", right: "0px", zIndex: "-1" }}
        xmlns="http://www.w3.org/2000/svg"
        width="1919"
        height="756.348"
        viewBox="0 0 1919 756.348"
      >
        <path
          d="M86.842-959.753V-1714.5h1919v161.959c-42.324,66.28-102,135.759-166.293,136.057-48.146.223-116.314-28.019-190.36-56.26-115.2-43.939-244.633-87.877-335.01-24.615-148.466,103.922-219.6,230.722-362.891,180.214s-371.8,72.361-371.8,72.361-249.8,131.849-373.877,228c-60.17,46.625-92.227,58.634-109.287,58.635A25.7,25.7,0,0,1,86.842-959.753Z"
          transform="translate(-86.842 1714.5)"
          fill="#536D89"
          opacity="0.593"
        />
      </svg>
      <svg
        className="absolute"
        style={{ top: "-100px", right: "0px", zIndex: "-1" }}
        xmlns="http://www.w3.org/2000/svg"
        width="1919"
        height="756.348"
        viewBox="0 0 1919 756.348"
      >
        <path
          d="M86.842-959.753V-1714.5h1919v161.959c-42.324,66.28-102,135.759-166.293,136.057-48.146.223-116.314-28.019-190.36-56.26-115.2-43.939-244.633-87.877-335.01-24.615-148.466,103.922-219.6,230.722-362.891,180.214s-371.8,72.361-371.8,72.361-249.8,131.849-373.877,228c-60.17,46.625-92.227,58.634-109.287,58.635A25.7,25.7,0,0,1,86.842-959.753Z"
          transform="translate(-86.842 1714.5)"
          fill="#536D89"
          opacity="1"
        />
      </svg>
      <svg
        className="absolute"
        style={{ bottom: "0px", left: "-160px", zIndex: "-1" }}
        xmlns="http://www.w3.org/2000/svg"
        width="776.006"
        height="295.705"
        viewBox="0 0 776.006 295.705"
        transform="rotate(180)"
      >
        <path
          d="M1183.642,1170s134.878,102.655,234.285,106.945,252.44-14.383,335.361,11.681,79.9,81.856,167.45,164.846,0-283.472,0-283.472Z"
          transform="translate(-1183.642 -1170)"
          fill="#57dde6"
          opacity="0.644"
        />
      </svg>
      <svg
        className="absolute"
        style={{ bottom: "0px", left: "-160px", zIndex: "-1" }}
        xmlns="http://www.w3.org/2000/svg"
        width="695.541"
        height="243.499"
        viewBox="0 0 695.541 243.499"
        transform="rotate(180)"
      >
        <path
          d="M1902.737-7718.527c-87.547-82.991-84.527-138.781-167.449-164.846-54.795-17.223-140.2-14.911-220.523-12.6-41.231,1.187-81.121,2.372-114.839.917-49.484-2.135-107.765-28.649-153.816-54.738h668.159c17.708,84.9,45.981,243.512,10.024,243.5C1918.735-7706.3,1911.639-7710.089,1902.737-7718.527Z"
          transform="translate(-1246.11 7949.794)"
          fill="#57dde6"
          opacity="0.644"
        />
      </svg>
    </section>
  );
}

export default ContactSection;
