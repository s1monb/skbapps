import React from "react";

function SkillsSection() {
  return (
    <section
      className="h-screen bg-light1 relative text-center"
      id="Ferdigheter"
      style={{ scrollSnapAlign: "start", margin: "0 auto" }}
    >
      <div className="sticky top-0 z-40 text-left">
        <div className="inline-block h-20 w-20 rounded-full bg-dark1 ml-8 text-5xl text-superpink text-center shadow-md mt-5">
          <i className="fal fa-head-side-brain"></i>
        </div>
        <h1 className="ml-10 font-bold inline-block sm:text-5xl text-4xl">
          Ferdigheter
        </h1>
      </div>
      <div className="bg-dark1 inline-block px-16 py-10 rounded-lg shadow-lg text-left mt-12">
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
              <tr className="bg-dark1">
                <th className="px-8 py-2">Navn</th>
                <th className="px-4 pr-32">Ferdighetsnivå</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="px-8 py-2">React</th>
                <th className="px-4 py-2">3 star</th>
              </tr>
              <tr className="bg-ocean2">
                <th className="px-8 py-2">HTML, CSS og JavaScript</th>
                <th className="px-4 py-2">4 star</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <svg
        className="absolute"
        style={{ top: "150px", right: "0px" }}
        xmlns="http://www.w3.org/2000/svg"
        width="78.793"
        height="360"
        viewBox="0 0 78.793 360"
      >
        <path
          d="M2391,4139s-59.114,57.379-68,90,45.591,50.856,0,119,68,151,68,151Z"
          transform="translate(-2312.207 -4139)"
          fill="#4eb9c7"
          opacity="0.826"
        />
      </svg>
      <svg
        className="absolute"
        style={{ top: "172px", right: "0px" }}
        xmlns="http://www.w3.org/2000/svg"
        width="63.626"
        height="298"
        viewBox="0 0 63.626 298"
      >
        <path
          d="M2375.41,4138.571s-47.871,48.029-55,75,36.576,41.658,0,98,55,125,55,125Z"
          transform="translate(-2311.784 -4138.571)"
          fill="#4eb9c7"
        />
      </svg>
    </section>
  );
}

export default SkillsSection;
