import { testimonials } from "@data/testimonials";
import React from "react";
import { Fa500Px, FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section>
      <div class="min-w-screen min-h-screen flex items-center justify-center py-5">
        <div class="w-full   px-5 py-16 md:py-24 text-gray-800">
          <div class="w-full max-w-6xl mx-auto">
            <div class="text-center max-w-2xl mx-auto">
              <h1 class="text-6xl md:text-7xl font-bold mb-5 text-blue-500">
                Lo que nuestros <br />{" "}
                <span className="text-gray-300">clientes dicen.</span>{" "}
              </h1>
              <h3 class="text-xl mb-5 font-light text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div class="text-center mb-10">
                <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div class="-mx-3 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-7">
              {testimonials.map((e) => (
                <div key={e.id} class="w-full mx-auto rounded-lg bg-white  shadow-md  dark:bg-gray-800 border dark:border-gray-700 p-5 dark:text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={e.img} alt={e.name} />
                    </div>
                    <div class="flex-grow flex flex-col gap-2 pl-3">
                      <h6 class="font-bold text-sm uppercase text-indigo-400">
                        {e.name}
                      </h6>
                      <span className="dark:text-gray-300 flex gap-2 justify-start"  >
                        {Array.from({ length: e.star }, (_, index) => <FaStar className="w-3 h-3 text-amber-400" key={index} />)}
                      </span>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm text-gray-600 dark:text-gray-300 leading-tight">
                      <span class="text-lg leading-none italic font-bold  text-gray-600 dark:text-gray-400 mr-1">
                        "
                      </span>
                      {e.content}
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
