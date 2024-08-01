import Image from "next/image";
import React from "react";
import { Button } from "./ui/moving-border";

const AboutSection = () => {
  return (
    <section className="bg-primary-backgroundGreen antialiased">
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:px-6 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-buttonGreen sm:text-4xl ">
            Über Mich:
          </h2>
          <p className="mt-4 text-base font-normal text-gray-800 sm:text-xl ">
            Flowbite helps you connect with friends, family and communities of
            people who share your interests.
          </p>
        </div>

        {/* About Section */}
        <div className="mt-12 space-y-16 sm:mt-16">
          <div className="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
            <div>
              <Image
                src="/assets/yogaraum/fit_mit_mary_raum_querformat.JPG"
                alt=""
                width={500}
                height={500}
                className="object-cover w-full rounded-lg shadow-lg border-4 border-primary-buttonGreen"
              />
            </div>

            <div className="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
              <div className="space-y-3">
                <h3
                  className="text-3xl font-bold leading-tight text-primary-buttonGreen sm:text-4xl 
                "
                >
                  Mein Yogastudio:
                </h3>
                <p className="text-base font-normal text-gray-500 sm:text-lg ">
                  Erleben Sie ganzheitliches Wohlbefinden in unserem Yogastudio
                  in Künzing. Unsere erfahrenen Lehrer bieten Yoga für alle
                  Levels an. Finden Sie innere Ruhe und körperliche Stärke.
                  Jetzt Kurse buchen!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:items-center pt-12 lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
          <div className="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl ">
                Mail management system
              </h3>

              <p className="text-base font-normal text-gray-500 sm:text-lg ">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests. Connecting with your friends
                and family as well as discovering new ones is easy with features
                like Groups.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/assets/IMG_6703.JPG"
              alt=""
              width={500}
              height={500}
              className="object-cover w-full rounded-lg shadow-lg border-4 border-primary-buttonGreen"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            duration={2000}
            className="text-primary-backgroundGreen bg-primary-buttonGreen justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            TERMIN ANFRAGEN
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
