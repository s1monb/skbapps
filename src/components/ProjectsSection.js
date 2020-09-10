import React from "react";

function ProjectSection() {
  return (
    <section className="h-screen bg-light1" id="Prosjekter">
      <div className="sticky top-0 z-40">
        <div className="inline-block h-20 w-20 rounded-full bg-dark1 ml-8 text-5xl text-superpink text-center shadow-md mt-5">
          <i className="fal fa-folder"></i>
        </div>
        <h1 className="ml-10 font-bold inline-block sm:text-5xl text-4xl">
          Prosjekter
        </h1>
      </div>

      <div className="bg-turkis relative" style={{ height: "90vh" }}>
        <svg
          className="absolute"
          style={{ top: "-120px", right: "0px" }}
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
          style={{ top: "-80px", right: "0px" }}
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
          style={{ bottom: "-340px", right: "0px" }}
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
          style={{ bottom: "-300px", right: "0px" }}
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
