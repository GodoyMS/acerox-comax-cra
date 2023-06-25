import CardProduct from "@components/cards/CardProduct";
import BannerHomeCarousel from "@components/carousels/BannerHomeCarousel";
import CategoryCarousel from "@components/carousels/CategoryCarousel";
import CotizarPasos from "@components/cotizarPasos/CotizarPasos";
import Testimonials from "@components/testimonials/Testimonials";
import { categories } from "@data/categorias";
import { productos } from "@data/products";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className={``}>
        <BannerHomeCarousel/>

      <section>
        <CategoryCarousel />
        {/* <div className=" max-w-6xl py-20 gap-8 mx-auto grid  grid-cols-1  md:grid-col-2 lg:grid-cols-3 px-4">
          {categories.map((e) => (
            <CardCategory key={e.id} data={e} />
          ))}
        </div> */}
      </section>

      <section>
        <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-6 py-10">
          {productos.slice(0, 6).map((e) => (
            <CardProduct key={e.id} e={e} />
          ))}
        </div>
        <div className="w-full flex justify-center ">
          <Link
            to={"/categorias/vigas"}
            className=" px-4 py-2 rounded-md flex justify-center items-center hover:bg-gray-400 dark:hover:bg-gray-500 bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-400"
          >
            Ver todos los productos
          </Link>
        </div>
      </section>
      <section>
        <div className=" max-w-7xl mx-auto py-20 bg-tertiary px-10 rounded-lg mt-28">
          <div className="flex flex-col items-center py-10 ">
            <h4 className="text-secondary font-bold text-2xl ">
              ¿Necesitas Cotizar productos?
            </h4>
            <span className="text-base font-medium text-gray-300 ">
              Hazlo en 3 simples pasos
            </span>
          </div>
          <CotizarPasos />
        </div>
      </section>
      <section>
        <Testimonials />
      </section>
    </main>
  );
};

export default Home;
