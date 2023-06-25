import CardProductCart from "@components/cards/CardProductCart";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CarritoCompras = ({
  isCarritoComprasActive,
  setIsCarritoComprasActive,
}) => {
  const productsRedux = useSelector((state) => state.user.products);
  return (
    <>
      <div style={{ zIndex: 200 }} >
        <button
          onClick={() => setIsCarritoComprasActive(!isCarritoComprasActive)}
          className={ ` ${isCarritoComprasActive ?  "bg-secondary text-white " : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-100"}  p-2   rounded-lg flex justify-center items-center gap-4 `}
        
        >
          <FaCartPlus className=" w-6 h-6" />
          <span className=" font-bold text-sm hidden lg:block">
            Carrito ({productsRedux.length})
          </span>
        </button>
        {isCarritoComprasActive && (
          <div style={{maxHeight:"500px"}} className="absolute top-full right-0  max-w-xs    overflow-y-scroll   justify-center rounded-lg  ">
            <div className="w-full flex-col gap-2 flex bg-gray-200 dark:bg-gray-700 rounded-md   ">
              {productsRedux &&
                productsRedux.map((e) => <CardProductCart key={e.id} e={e} />)}
              {productsRedux.length === 0 && (
                <div className="p-4 text-gray-700 dark:text-gray-300">
                  Aun hay productos en el carrito
                </div>
              )}
              {productsRedux.length > 0 && (
                <div className="p-4 flex justify-center">
                  <Link to={"/cotizar"} className="text-white bg-tertiary hover:bg-tertiaryhover flex justify-center transition duration-300 px-4 py-2 font-bold w-full rounded-md">Cotizar</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CarritoCompras;
