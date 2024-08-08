import Image from "next/image";
import React from "react";
import { homeFirst } from "@/data";

const Info = () => {
  return (
    <section className="bg-[#EEFFF3] ">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#0F3B1C] dark:text-white">
            {homeFirst[0].title}
          </h2>
          <p className="mb-4">{homeFirst[0].firstParagraph}</p>
          <p>{homeFirst[0].secondParagraph}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={homeFirst[0].firstImg}
            alt="office content 1"
            width={100}
            height={100}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={homeFirst[0].secondImg}
            alt="office content 2"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
