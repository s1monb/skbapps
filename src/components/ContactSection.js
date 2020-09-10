import React from "react";

function ContactSection() {
  return (
    <section
      className="h-screen relative max-h-screen"
      id="Kontakt"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="sticky top-0 z-40">
        <div className="inline-block h-20 w-20 rounded-full bg-dark1 ml-8 text-5xl text-superpink text-center shadow-md mt-5">
          <i className="fal fa-phone-alt"></i>
        </div>
        <h1 className="ml-10 font-bold inline-block sm:text-5xl text-4xl">
          Kontakt meg
        </h1>
      </div>
      <svg
        className="absolute"
        style={{ top: "-60px", right: "0px" }}
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
        style={{ top: "-100px", right: "0px" }}
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
        style={{ bottom: "0px", left: "-160px" }}
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
        style={{ bottom: "0px", left: "-160px" }}
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
