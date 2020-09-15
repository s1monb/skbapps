import React from "react";

function SkillsSection() {
  return (
    <section
      className="h-screen bg-light1 relative text-center"
      id="Ferdigheter"
      style={{ scrollSnapAlign: "start", margin: "0 auto", zIndex: "0" }}
    >
      <div className="sticky top-0 z-40 text-left">
        <div className="inline-block h-20 w-20 rounded-full bg-dark1 ml-8 text-5xl text-superpink text-center shadow-md mt-5">
          <i className="fal fa-head-side-brain"></i>
        </div>
        <h1 className="ml-10 font-bold inline-block sm:text-5xl text-4xl">
          Ferdigheter
        </h1>
      </div>
      <div className="bg-dark1 inline-block px-16 py-10 rounded-lg shadow-lg text-left mt-24">
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
            <h1 className="text-5xl inline-block font-bold">Ferdigheter</h1>
          </div>
        </div>
        <div className="nunito bg-ocean rounded-lg shadow-md px-24 pt-12 pb-8">
          <table className="table-auto">
            <thead>
              <tr className="bg-dark1 font-bold">
                <th className="px-8 py-2">Navn</th>
                <th className="px-16 pr-24">Ferdighetsnivå</th>
              </tr>
            </thead>
            <tbody className="font-normal oswald">
              <tr>
                <th className="px-8 py-2">HTML, CSS og JavaScript</th>
                <th className="px-16 py-2">Gode kunnskaper</th>
              </tr>
              <tr className="bg-ocean2">
                <th className="px-8 py-2">ExpressJS and NodeJS</th>
                <th className="px-16 py-2">Gode kunnskaper</th>
              </tr>
              <tr>
                <th className="px-8 py-2">API-design</th>
                <th className="px-16 py-2">Litt erfaring</th>
              </tr>
              <tr className="bg-ocean2">
                <th className="px-8 py-2">React</th>
                <th className="px-16 py-2">Middels erfaring</th>
              </tr>
              <tr>
                <th className="px-8 py-2">TailwindCSS</th>
                <th className="px-16 py-2">En del erfaring</th>
              </tr>
              <tr className="bg-ocean2">
                <th className="px-8 py-2">Docker And Containers</th>
                <th className="px-16 py-2">Litt erfaring</th>
              </tr>
              <tr className="">
                <th className="px-8 py-2">Graphql</th>
                <th className="px-16 py-2">Litt erfaring</th>
              </tr>
              <tr className="bg-ocean2">
                <th className="px-8 py-2">TypeScript</th>
                <th className="px-16 py-2">Litt erfaring</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <svg
        className="absolute"
        style={{ top: "200px", right: 0, zIndex: "-10" }}
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="570"
        viewBox="0 0 1920 570"
      >
        <rect width="1920" height="570" fill="#4cafbf" />
      </svg>
      <svg
        className="absolute"
        style={{ top: "240px", right: 0, zIndex: "-10" }}
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="336.388"
        viewBox="0 0 1920 336.388"
      >
        <path
          d="M2461,4488.75s365.886-42.213,498.791-118.035,431.054-85.792,592.377-70.759,427.23-14.941,597.009-58.914S4381,4203.75,4381,4203.75v-51.388H2461Z"
          transform="translate(-2461 -4152.362)"
          fill="#536d89"
          opacity="0.899"
        />
      </svg>
      <svg
        className="absolute"
        style={{ top: "200px", right: 0, zIndex: "-10" }}
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="336.388"
        viewBox="0 0 1920 336.388"
      >
        <path
          d="M2461,4488.75s365.886-42.213,498.791-118.035,431.054-85.792,592.377-70.759,427.23-14.941,597.009-58.914S4381,4203.75,4381,4203.75v-51.388H2461Z"
          transform="translate(-2461 -4152.362)"
          fill="#536d89"
        />
      </svg>
      <svg
        className="absolute"
        style={{ top: "520px", right: 0, zIndex: "-10" }}
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="288.668"
        viewBox="0 0 1920 288.668"
      >
        <path
          d="M2461,4588.6l459.848-93.187c114.962-23.3,261.548-67.287,360.319-34.895s90.594,60.789,340.867,43.875,182.61-86.425,442.858-116.877S4381,4614.439,4381,4614.439v59.244l-1920-1.578Z"
          transform="translate(-2461 -4385.015)"
          fill="#536d89"
          opacity="0.854"
        />
      </svg>
      <svg
        className="absolute"
        style={{ top: "560px", right: 0, zIndex: "-10" }}
        xmlns="http://www.w3.org/2000/svg"
        width="1919"
        height="240.429"
        viewBox="0 0 1919 240.429"
      >
        <path
          d="M-2460.5-3559.5v-37l456.543-93.085c114.26-23.3,259.953-67.287,358.12-34.895s90.041,60.789,338.788,43.875,181.495-86.425,440.156-116.878c233.777-27.523,312.425,185.26,325.393,226.45v11.531Z"
          transform="translate(2460.5 3799.929)"
          fill="#536d89"
        />
      </svg>
    </section>
  );
}

export default SkillsSection;
