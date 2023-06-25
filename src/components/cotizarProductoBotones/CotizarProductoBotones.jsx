import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "@redux/slice";
import { FaCheck } from "react-icons/fa";
const CotizarProductoBotones = ({ producto }) => {
  const reduxProducts = useSelector((state) => state.user.products);
  const distpatch = useDispatch();
  const handleAddProduct = () => {
    distpatch(setProduct(producto));
  };
  return (
    <div className="flex flex-wrap flex-1 gap-8 justify-center w-full items-center py-4">
      {reduxProducts.some((obj) => obj.id === producto.id) ? (
        <span className="text-secondary font-bold flex flex-1 gap-4 items-center justify-center bg-orange-200 rounded-md px-4 py-2">
          Añadido <FaCheck className="w-6 h-7" />
        </span>
      ) : (
        <button
          onClick={handleAddProduct}
          className="px-4 py-2 flex-1  rounded-md flex gap-4 justify-center items-center font-bold text-sm text-white bg-primary hover:bg-primaryhover duration-300 transition"
        >
          <FaShoppingCart className="w-6 h-6" />
          <span>Agregar al carrito</span>
        </button>
      )}

      <a
        href={`https://api.whatsapp.com/send?phone=51973876332&text=Hola%20Me%20gustaria%20cotizar%20el%20producto%3A%20${producto.name}`}
        rel="noreferrer"
        target="_blank"
        className=" flex-1 flex gap-3  text-sm items-center justify-center rounded-md px-4 py-2 text-white font-bold bg-[#25D366] hover:bg-[#199647] duration-300 transition"
      >
        Cotizar por Whatsapp
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
};

export default CotizarProductoBotones;
