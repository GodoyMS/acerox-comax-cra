import BreadCrumbSingleProduct from "@components/breadCrumb/BreadCrumbSingleProduct";
import CotizarProductoBotones from "@components/cotizarProductoBotones/CotizarProductoBotones";
import ProductGallery from "@components/productGallery/ProductGallery";
import { productos } from "@data/products";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { HiDocumentText } from "react-icons/hi";

const ProductScreen = () => {
  const { id } = useParams();
  const [currentPhotoId, setCurrentPhotoId] = useState(null);

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
          </div>
        </div>

        <div className="  md:col-span-7">
          <ProductGallery
            setCurrentPhotoId={setCurrentPhotoId}
            currentPhotoId={currentPhotoId}
            id={id}
            product={currentProduct}
          />
        </div>
        <div className="md:col-span-12 grid grid-cols-12 gap-10 items-center ">
          <div className=" col-span-12 md:col-span-5 order-2  md:order-none ">
            <a
              href="/pdf/CATALOGO ACEROS COMEX SAC.pdf"
              target="_blank"
              className="flex justify-center gap-6 items-center hover:bg-transparent hover:border-gray-800 dark:hover:border dark:hover:border-200 dark:hover:bg-gray-100  dark:hover:bg-transparent dark:hover:border-gray-200 hover:text-gray-800 hover:border transition duration-300 bg-gray-300 dark:bg-gray-600 dark:text-gray-100 px-4 rounded-md  py-3 font-bold "
            >
              <span>Descargar Ficha Técnica</span>
              <HiDocumentText className="w-6 h-6" />
            </a>
          </div>
          <div className="flex justify-end gap-4 items-center md:col-span-7 col-span-12 order-1 md:order-none">
            {currentProduct.images.map((img) => (
              <button key={img.id} onClick={() => setCurrentPhotoId(img.url)}>
                <img
                  alt="producto"
                  width={300}
                  height={300}
                  className="w-20 h-20 object-cover rounded-md"
                  key={img.id}
                  src={img.url}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-12">
          <div className="flex  w-full justify-center flex-wrap gap-6">
          {currentProduct.usos && (
              <div
                style={{ minWidth: "250px" }}
                className="flex-col flex w-full gap-4 flex-1 text-justify bg-gray-300 dark:bg-gray-700 p-3 rounded-md"
              >
                <h5 className="font-bold text-base text-gray-700 dark:text-gray-100 ">
                  Usos
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {currentProduct?.usos}
                </p>
              </div>
            )}
            {currentProduct.presentacion && (
              <div
                style={{ minWidth: "250px" }}
                className="flex flex-col gap-4 flex-1 text-justify bg-gray-300 dark:bg-gray-700 p-3 rounded-md"
              >
                <h5 className="font-bold text-base text-gray-700 dark:text-gray-100 ">
                  Presentación
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {currentProduct?.presentacion}
                </p>
              </div>
            )}
            
             {currentProduct.normaTecnica && (
              <div
                style={{ minWidth: "250px" }}
                className="flex flex-col flex-1 gap-4  text-justify bg-gray-300 dark:bg-gray-700 p-3 rounded-md"
              >
                <h5 className="font-bold text-base text-gray-700 dark:text-gray-100 ">
                  Norma Técnica
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {currentProduct?.normaTecnica}
                </p>
              </div>
            )}
          </div>

          <div className="mt-10  justify-start ">
            {(currentProduct.composicionQuimica ||
              currentProduct.longitudEstandar ||
              currentProduct.medidasCoberturas ||
              currentProduct.toleraciasDimensionales) && (
              <>
                <h4 className="font-bold w-full text-start text-xl text-gray-700 dark:text-gray-100">
                  Adicionales
                </h4>
                <div>
                  <div className="flex flex-1 flex-wrap justify-start gap-6">
                    {currentProduct.composicionQuimica && (
                      <div className="flex flex-col w-auto gap-4  max-w-xs flex-1 text-justify bg-gray-300 dark:bg-gray-700 p-3 rounded-md">
                        <h5 className="font-bold text-base text-gray-700 dark:text-gray-100 ">
                          Composicion Quimica
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {currentProduct?.composicionQuimica && (
                            <ul>
                              {currentProduct.composicionQuimica.map((e) => (
                                <li key={e.id}>{e.name}</li>
                              ))}
                            </ul>
                          )}
                        </p>
                      </div>
                    )}
                    {currentProduct.longitudEstandar && (
                      <div className="flex flex-col w-auto gap-4  max-w-xs flex-1 text-justify bg-gray-300 dark:bg-gray-700 p-3 rounded-md">
                        <h5 className="font-bold text-base text-gray-700 dark:text-gray-100 ">
                          Longitud estándar
                        </h5>
                        {currentProduct?.longitudEstandar && (
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {currentProduct?.longitudEstandar}
                          </p>
                        )}
                      </div>
                    )}
                    {currentProduct.medidasCoberturas && (
                      <div className="flex flex-col w-auto gap-4  max-w-xs flex-1 text-justify bg-gray-300 dark:bg-gray-700 p-3 rounded-md">
                        <h5 className="font-bold text-base text-gray-700 dark:text-gray-100 ">
                          Medidas de cobertura
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {currentProduct?.medidasCoberturas && (
                            <ul>
                              {currentProduct.medidasCoberturas.map((e) => (
                                <li key={e.id}>{e.name}</li>
                              ))}
                            </ul>
                          )}
                        </p>
                      </div>
                    )}
                    {currentProduct.toleraciasDimensionales && (
                      <div className="flex flex-col w-auto gap-4  max-w-xs flex-1 text-justify bg-gray-300 dark:bg-gray-700 p-3 rounded-md">
                        <h5 className="font-bold text-base text-gray-700 dark:text-gray-100 ">
                          Tolerancias dimensionales
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {currentProduct?.toleraciasDimensionales && (
                            <ul>
                              {currentProduct.toleraciasDimensionales.map(
                                (e) => (
                                  <li key={e.id}>{e.name}</li>
                                )
                              )}
                            </ul>
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductScreen;
