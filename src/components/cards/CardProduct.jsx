import { setProduct } from "@redux/slice";
import React, { useState } from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CardProduct = ({ e }) => {
  const [isToolTipActive, setIsToolTipActive] = useState(false);
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);

  const reduxProducts = useSelector((state) => state.user.products);


  const distpatch = useDispatch();
  const handleAddProduct = () => {
    distpatch(setProduct(e));
    setIsToolTipActive(false)
  };
  return (
    <div className=" p-3 rounded-lg bg-white dark:bg-gray-800">
      <div className="relative ">
      <img
      onMouseEnter={()=>setIsDescriptionActive(true)} 
        src={e.images[0].url}
        alt={e.images[0].alt}
        className="w-full  object-cover h-60 rounded-md"
      />
       {isDescriptionActive && (
              <div   onMouseLeave={()=>setIsDescriptionActive(false)} className="absolute shadow-xl  flex items-center h-full  z-50 left-1/2  transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-full text-white  mb-8 rounded-md p-4">
              {e.descripcion}
  
            </div>

          )}
          <div className={`${isDescriptionActive ?" bg-black absolute top-0 w-full h-full bg-opacity-70 z-40" :"bg-transparent" } rounded-md` }>

          </div>

      </div>
   
      <div className="flex flex-col justify-center mt-10 ">
        <h4 className="font-bold px-2 mb-3 text-gray-700 dark:text-gray-100 ">
          {e.name}
        </h4>
        <hr />
        <span className="text-gray-500 text-xs mt-4 px-2">{e?.header}</span>
        <div className="px-2  my-6 w-full relative">
         
        
          <Link  to={`/productos/${e.id}` } className=" text-white bg-primary hover:bg-primaryhover font-bold px-4 py-3 rounded-md flex justify-center w-full ">
            Ver Producto
          </Link>
        </div>
        <div className="flex justify-start relative w-full px-2 mt-4">
          {reduxProducts.some((obj) => obj.id === e.id) ? (
            <div className="text-secondary font-bold flex  justify-start gap-4 items-center"><span>Añadido</span><FaCheck/></div>
          ) : (
            <button
              onClick={handleAddProduct}
              className="text-secondary "
              onMouseEnter={() => setIsToolTipActive(true)}
              onMouseLeave={() => setIsToolTipActive(false)}
            >
              <FaShoppingCart className="h-6 w-6" />
            </button>
          )}

          {isToolTipActive && !reduxProducts.some((obj) => obj.id === e.id) && (
            <div className="absolute z-10  bottom-full px-3 py-2 text-sm font-medium text-white  duration-300 bg-gray-900 rounded-lg shadow-sm  dark:bg-gray-700">
              Agregar a cotizaciones
              <div class="tooltip-arrow"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
