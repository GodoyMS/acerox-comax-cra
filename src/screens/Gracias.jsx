import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsGrid3X3Gap, BsPalette2 } from "react-icons/bs";

const Gracias = () => {
  const { name } = useParams();
  return (
    <div className=" md:pl-20 pr-0 flex min-h-full flex-col flex-1  mt-20 md:mt-0 bg-gradient-to-r dark:to-indigo-900 dark:from-zinc-900 from-zinc-100 to-indigo-500">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-zinc-500 sm:text-lg dark:text-zinc-400">
          <h2 className="mb-4 text-4xl     md:text-7xl  tracking-tight font-extrabold text-zinc-900 dark:text-zinc-300">
            Hey, {name}
          </h2>
          <p className="mb-4 mt-8 font-semibold">
            En breve uno de nuestros asesores se comunicará contigo
          </p>
          <p className="font-light">
            Nos esforzamos por satisfacer tus necesidades específicas y ofrecer
            productos que estén diseñados para perdurar.
          </p>

          <div className="flex gap-8 justify-start items-center my-10">
            <div>
              <BsGrid3X3Gap className="w-8 h-8" />
            </div>
            <div className="">
              <Link
                to={"/nosotros"}
                className="font-bold tracking-tight p-3 hover:scale-110  transition duration-300 hover:bg-orange-700  bg-secondary rounded-xl  text-white text-lg "
              >
                Conoce mas de nosotros
              </Link>
            </div>
          </div>
          <div className="flex gap-8 justify-start items-center my-10">
            <div>
              <BsPalette2 className="w-8 h-8" />
            </div>
            <div className="">
              <Link
                to={"/categorias/vigas"}
                className="font-bold tracking-tight p-3 hover:bg-blue-800 bg-blue-700 rounded-xl text-white text-lg "
              >
                Explorar productos
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-8">
          <img
            className="w-full rounded-lg"
            src="/assets/images/maintenance.svg"
            alt="Thank you"
          />
        </div>
      </div>
    </div>
  );
};

export default Gracias;
