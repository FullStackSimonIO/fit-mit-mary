import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-primary-backgroundGreen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16">
          <h2 className="mb-4 pt-10 text-4xl tracking-tight font-extrabold text-primary-buttonGreen ">
            Kontaktiere Mich:
          </h2>
          <p className="font-light text-gray-600  sm:text-xl">
            Hier kannst du mir ganz unkompliziert eine Nachricht zukommen
            lassen. Ich werde mich so schnell wie möglich bei dir melden.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
          <div className="col-span-2 mb-8 lg:mb-0">
            <form
              action="#"
              className="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen ">
                  Vorname
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="block p-3 w-full text-sm text-primary-backgroundGreen bg-primary-buttonGreen rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Sabine"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen ">
                  Nachname
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="block p-3 w-full text-sm text-primary-backgroundGreen bg-primary-buttonGreen rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Mustermann"
                  color="red"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen ">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-primary-buttonGreen border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="sabine@mustermann.de"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen ">
                  Telefonnummer
                </label>
                <input
                  type="number"
                  id="phone-number"
                  className="block p-3 w-full text-sm text-gray-900 bg-primary-buttonGreen rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="+151 345 6789"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen ">
                  Deine Nachricht:
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-primary-backgroundGreen bg-primary-buttonGreen rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
                <p className="mt-4 text-sm text-gray-500">
                  By submitting this form you agree to our{" "}
                  <a href="#" className="text-primary-600 hover:underline ">
                    terms and conditions
                  </a>{" "}
                  and our{" "}
                  <a href="#" className="text-primary-600 hover:underline ">
                    privacy policy
                  </a>{" "}
                  which explains how we may collect, use and disclose your
                  personal information including to third parties.
                </p>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-buttonGreen sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Nachricht senden
              </button>
            </form>
          </div>
          <div className="grid grid-cols-1 col-span-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-[#2D4542] rounded-lg  lg:h-16 lg:w-16">
                <svg
                  className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8"
                  fill="#EEFFF3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-[#2D4542]">
                Kontaktinformationen:
              </p>
              <p className="text-gray-500">
                Maria Zillner <br />
                Carossastraße 1 <br />
                94474 Vilshofen
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-primary-buttonGreen rounded-lg  lg:h-16 lg:w-16">
                <svg
                  className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8"
                  fill="#EEFFF3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-gray-900">Addresse:</p>
              <p className="text-gray-500">
                Osterhofener Staße 9<br />
                94550 Künzing <br />
                Deutschland
                <br />
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-primary-buttonGreen rounded-lg lg:h-16 lg:w-16">
                <svg
                  className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8"
                  fill="#EEFFF3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-primary-buttonGreen">
                Telefonnummer:
              </p>
              <p className="font-semibold text-primary-600">+1525 3407610</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
