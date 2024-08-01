import { GrYoga } from "react-icons/gr";
import { FaBowlFood } from "react-icons/fa6";
import { GiSportMedal } from "react-icons/gi";
import { homeFirst } from "@/data";

import React from "react";

const LandingOffers = () => {
  return (
    <section className="bg-[#EEFFF3]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#0F3B1C]">
          Für jeden etwas dabei
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          Here are a few reasons why you should choose Flowbite
        </p>
        <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <FaBowlFood className="mx-auto mb-4 w-12 h-12 text-primary-buttonGreen" />
            <h3 className="mb-2 text-xl font-bold text-[#0F3B1C]">
              {homeFirst[0].title}
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              {homeFirst[0].description}
            </p>
          </div>

          <div>
            <GrYoga className="mx-auto mb-4 w-12 h-12 text-primary-buttonGreen" />
            <h3 className="mb-2 text-xl font-bold text-[#0F3B1C]">
              {homeFirst[1].title}
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              {homeFirst[0].description}
            </p>
          </div>

          <div>
            <GiSportMedal className="mx-auto mb-4 w-12 h-12 text-primary-buttonGreen" />
            <h3 className="mb-2 text-xl font-bold text-[#0F3B1C]">
              {homeFirst[2].title}
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              {homeFirst[0].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingOffers;
