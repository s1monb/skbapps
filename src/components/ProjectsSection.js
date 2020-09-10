import React from "react";

function ProjectSection() {
  return (
    <section
      className="h-screen bg-light1 text-center"
      id="Prosjekter"
      style={{ scrollSnapAlign: "center" }}
    >
      <div className="sticky top-0 z-40 text-left">
        <div className="inline-block h-20 w-20 rounded-full bg-dark1 ml-8 text-5xl text-superpink text-center shadow-md mt-5">
          <i className="fal fa-folder"></i>
        </div>
        <h1 className="ml-10 font-bold inline-block sm:text-5xl text-4xl">
          Prosjekter
        </h1>
      </div>

      <div
        className="bg-turkis relative"
        style={{ height: "90vh", zIndex: "0" }}
      >
        <div
          className="bg-dark1 inline-block px-16 py-10 rounded-lg shadow-lg text-left mt-12"
          style={{ zIndex: "51" }}
        >
          <div className="mb-2">
            <svg
              className="inline-block h-12 mb-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#F15386"
            >
              <path d="M194.74 96l54.63 54.63c6 6 14.14 9.37 22.63 9.37h192c8.84 0 16 7.16 16 16v224c0 8.84-7.16 16-16 16H48c-8.84 0-16-7.16-16-16V112c0-8.84 7.16-16 16-16h146.74M48 64C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48z" />
            </svg>
            <div className="inline-block align-bottom ml-2 text-turkis2">
              <h1 className="text-5xl inline-block font-bold">Prosjekter</h1>
            </div>
          </div>
          <div className="flex flex-wrap bg-ocean rounded-lg shadow-md px-12 py-8">
            <div
              className="inline-block bg-dark2 rounded-md shadow mr-4"
              style={{ width: "400px" }}
            >
              <a
                href="https://orkesterplass.no"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-3xl text-center py-3">Orkesterplass.no</h2>
              </a>

              <img
                src="/img/orkesterplass.png"
                alt="screenshot of www.orkesterplass.no"
                width="400px"
                height="280px"
              />
              <p className="text-xl px-4 py-3">
                Nettside lagd med React frontend og ExpressJS backend.
              </p>
              <p className="text-lg  px-4 mb-3 inline-block">
                <span className="opacity-50">Sourcecode:</span>{" "}
                <span className="text-red-400">
                  Ikke offentlig, men{" "}
                  <a
                    className="text-blue-400 underline"
                    href="https://orkesterplass.no"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link til nettsiden
                  </a>
                </span>
              </p>
            </div>
            <div
              className="inline-block bg-dark2 rounded-md shadow mr-4"
              style={{ width: "400px" }}
            >
              <a href="/">
                <h2 className="text-3xl text-center py-3">Denne siden</h2>
              </a>

              <img
                src="/img/orkesterplass.png"
                alt="screenshot of www.orkesterplass.no"
                width="400px"
                height="280px"
              />
              <p className="text-xl px-4 py-3">
                Nettside lagd med React. Animasjoner lagd med Framer Motion.
              </p>
              <p className="text-lg  px-4 mb-3 inline-block">
                <span className="opacity-50">Sourcecode:</span>{" "}
                <a
                  href="https://github.com/s1monb/skbapps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-blue-400 underline">Link til repo</span>
                </a>
              </p>
            </div>
            <div
              className="inline-block bg-dark2 rounded-md shadow"
              style={{ width: "400px" }}
            >
              <h2 className="text-3xl text-center py-3">Andre småprosjekter</h2>
              <img
                src="/img/orkesterplass.png"
                alt="screenshot of www.orkesterplass.no"
                width="400px"
                height="280px"
              />
              <p className="text-xl px-4 py-3">
                Disse er lagd med forskjellige teknologier. JavaScript, React,
                Typescript, JWT, ExpressJS osv.
              </p>
              <p className="text-lg  px-4 mb-3 inline-block">
                <span className="opacity-50">Sourcecode:</span>{" "}
                <a
                  href="https://github.com/s1monb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-blue-400 underline">
                    Link til min github
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <svg
          className="absolute"
          style={{ top: "-120px", right: "0px", zIndex: "-10" }}
          xmlns="http://www.w3.org/2000/svg"
          width="1919"
          height="682.886"
          viewBox="0 0 1919 682.886"
        >
          <path
            d="M144.842-4054.073l1919-1.953v141.22c-66.592-1.634-128.98,6.713-182.349,31.447-224.229,103.923-331.658,230.723-548.069,180.214s-561.531,72.362-561.531,72.362-377.269,131.849-564.663,228c-23.527,12.071-44.21,21.823-62.389,29.646Z"
            transform="translate(-144.842 4056.026)"
            fill="#536d89"
          />
        </svg>
        <svg
          className="absolute"
          style={{ top: "-80px", right: "0px", zIndex: "-10" }}
          xmlns="http://www.w3.org/2000/svg"
          width="1919"
          height="682.886"
          viewBox="0 0 1919 682.886"
        >
          <path
            d="M144.842-4054.073l1919-1.953v141.22c-66.592-1.634-128.98,6.713-182.349,31.447-224.229,103.923-331.658,230.723-548.069,180.214s-561.531,72.362-561.531,72.362-377.269,131.849-564.663,228c-23.527,12.071-44.21,21.823-62.389,29.646Z"
            transform="translate(-144.842 4056.026)"
            fill="#536d89"
            opacity="0.92"
          />
        </svg>
        <svg
          className="absolute"
          style={{ bottom: "-340px", right: "0px", zIndex: "-10" }}
          xmlns="http://www.w3.org/2000/svg"
          width="1919"
          height="620.356"
          viewBox="0 0 1919 620.356"
        >
          <path
            d="M2108.495-3599.623c144.384-57.617,271.94-94.8,457.716-63.383,298.641,50.508,774.9-72.362,774.9-72.362s413.368-104.688,686.388-195.52v618.941l-1919,1.415Z"
            transform="translate(-2108.495 3930.888)"
            fill="#536d89"
            opacity="1"
          />
        </svg>
        <svg
          className="absolute"
          style={{ bottom: "-300px", right: "0px", zIndex: "-10" }}
          xmlns="http://www.w3.org/2000/svg"
          width="1919"
          height="620.356"
          viewBox="0 0 1919 620.356"
        >
          <path
            d="M2108.495-3599.623c144.384-57.617,271.94-94.8,457.716-63.383,298.641,50.508,774.9-72.362,774.9-72.362s413.368-104.688,686.388-195.52v618.941l-1919,1.415Z"
            transform="translate(-2108.495 3930.888)"
            fill="#536d89"
            opacity="0.918"
          />
        </svg>
      </div>
    </section>
  );
}

export default ProjectSection;
