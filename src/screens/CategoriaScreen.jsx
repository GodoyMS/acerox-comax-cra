import BreadCrumbProducts from "@components/breadCrumb/BreadCrumbProducts";
import CardProduct from "@components/cards/CardProduct";
import { categories } from "@data/categorias";
import { productos } from "@data/products";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CategoriaScreen = () => {
  const { categoria } = useParams();
  const categoryProducts = productos.filter(
    (product) => product.route === categoria
  );
  const [currentProductId, setCurrentProductId] = useState(null);
  useEffect(() => {
    setCurrentProductId(categoryProducts[0].id);
  }, []);
  console.log(categoryProducts);

  return (
    <main className=" ">
      <div className="w-full relative">
        <img
          alt="Categoria"
          width={1500}
          height={900}
          src={categories.find((obj) => obj.route === categoria).image}
          className="w-full  h-96 object-cover "
        />
        <div className="bg-black w-full top-0 absolute h-full bg-opacity-60 z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 font-bold text-white text-8xl">
          {categories.find((obj) => obj.route === categoria).name}
        </div>
        <div className="py-8 absolute bottom-0  w-full mx-auto z-20 block lg:hidden">
          <div className="max-w-7xl  mx-auto ">
            <BreadCrumbProducts categoria={categoria} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10">
        <div className=" w-full flex gap-4 px-2 justify-center">
          <div className="h-full hidden lg:block">
            <div className="  h-auto flex flex-col lg:w-80   p-4 justify-center items-center gap-8 bg-gray-200 dark:bg-gray-700 rounded-md">
              <h2 className=" text-2xl font-bold text-tertiary dark:text-secondary text-center">
                Categorias
              </h2>
              <div className="flex flex-col gap-3 ">
                {categories.map((e) => (
                  <Link
                    key={e.id}
                    className={` ${
                      categoria === e.route
                        ? "bg-white text-primary dark:text-primary"
                        : " hover:bg-gray-100 dark:hover:bg-gray-800"
                    } flex justify-around font-bold    text-gray-700 dark:text-gray-200 gap-4 items-center rounded-md px-4 py-3`}
                    to={`/categorias/${e.route}`}
                  >
                    <span>{e.name}</span>
                    <e.icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-6">
            {categoryProducts.map((e) => (
              <CardProduct key={e.id} e={e} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoriaScreen;
