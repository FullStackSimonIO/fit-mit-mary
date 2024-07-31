import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <section className="bg-[#EEFFF3] ">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#0F3B1C] dark:text-white">
            Yoga & Sporttherapie
          </h2>
          <p className="mb-4">
            Yoga und Sporttherapie bieten eine ganzheitliche Methode, Körper und
            Geist in Einklang zu bringen. Yoga, eine jahrtausendealte Praxis,
            vereint körperliche Übungen, Atemtechniken und Meditation, um
            Flexibilität, Kraft und innere Ruhe zu fördern. Sporttherapie
            ergänzt diese Ansätze durch gezielte Bewegungsprogramme, die auf
            individuelle gesundheitliche Bedürfnisse abgestimmt sind. Zusammen
            können Yoga und Sporttherapie helfen, Stress abzubauen, Verletzungen
            zu rehabilitieren und die allgemeine körperliche Fitness zu
            verbessern.
          </p>
          <p>
            Diese Kombination unterstützt nicht nur die physische Gesundheit,
            sondern fördert auch das mentale Wohlbefinden, indem sie Achtsamkeit
            und Entspannung in den Alltag integriert.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src="/assets/3.JPG"
            alt="office content 1"
            width={100}
            height={100}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="/assets/1.JPG"
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
