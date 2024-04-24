import { EditIcon } from "@/assets/icons/admin";
import React from "react";

const ArticleCard = () => {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-gray-900 text-white shadow-gray-900/20 shadow-lg mx-0 mt-0 mb-4 h-64 xl:h-40">
        <img
          src="https://i1.wp.com/hechingerreport.org/wp-content/uploads/2018/04/Jennifer-Heller-Buckley-PHOTO1.jpg?ssl=1"
          alt="Scandinavian"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 py-0 px-1">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
          Project #2
        </p>
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-1 mb-2">
          Scandinavian
        </h5>
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
          Music is something that every person has his or her own specific opinion about.
        </p>
      </div>
      <div className="p-6 mt-6 flex items-center justify-between py-0 px-1">
        <a href="#/dashboard/profile">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
            type="button"
          >
            view project
          </button>
        </a>
        <div>
          <EditIcon />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
