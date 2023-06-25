import BreadCrumbSingleProduct from "@components/breadCrumb/BreadCrumbSingleProduct";
import CotizarProductoBotones from "@components/cotizarProductoBotones/CotizarProductoBotones";
import ProductGallery from "@components/productGallery/ProductGallery";
import { productos } from "@data/products";
import React from "react";
import { useParams } from "react-router-dom";

import { HiDocumentText } from "react-icons/hi";

const ProductScreen = () => {
  const { id } = useParams();

  const currentProduct = productos.find((obj) => obj.id === Number(id));

  console.log(currentProduct);

  return (
    <main className="max-w-7xl  w-full mx-auto pt-10 pb-20">
      {currentProduct && (
        <BreadCrumbSingleProduct
          categoria={"planchas"}
          producto={currentProduct}
        />
      )}

      <div className="py-10 flex flex-col md:grid-cols-12 md:grid w-full gap-10 px-4 relative  ">
        <div className="  md:col-span-5  justify-center gap-6">
          <div className="flex flex-col flex-wrap gap-6">
            <div className="flex flex-wrap gap-4 flex-col justify-center items-start">
              <h2 className="text-gray-500 dark:text-gray-400 text-sm">
                {currentProduct?.header}
              </h2>
              <h1 className="text-gray-700 dark:text-gray-200 font-bold text-2xl">
                {currentProduct.name}
              </h1>
              <div
                style={{ height: "1px" }}
                className="w-full  bg-gray-300 dark:bg-gray-700"
              >
                {" "}
              </div>
            </div>
            {currentProduct?.descripcion && (
              <div className=" flex flex-col gap-4">
                <span className="text-gray-700 dark:text-gray-200 font-bold text-xl">
                  Descripción
                </span>
                <p className="text-gray-600 dark:text-gray-400">
                  {currentProduct.descripcion}
                </p>
              </div>
            )}
            <CotizarProductoBotones producto={currentProduct} />
            <div className=" mt-10 pt-10 border-t border-gray-300 dark:border-gray-600">
              <a
                href="/pdf/CATALOGO ACEROS COMEX SAC.pdf"
                target="_blank"
                className="flex justify-center gap-6 items-center hover:bg-transparent hover:border-gray-800 dark:hover:border dark:hover:border-200 dark:hover:bg-gray-100  dark:hover:bg-transparent dark:hover:border-gray-200 hover:text-gray-800 hover:border transition duration-300 bg-gray-300 dark:bg-gray-600 dark:text-gray-100 px-4 rounded-md  py-3 font-bold "
              >
                <span>Descargar Ficha Técnica</span>
                <HiDocumentText className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="  md:col-span-7">
          <ProductGallery id={id} product={currentProduct} />
        </div>
      </div>
    </main>
  );
};

export default ProductScreen;