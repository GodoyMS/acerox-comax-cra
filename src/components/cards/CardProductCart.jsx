import { deleteProductById } from "@redux/slice";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
const CardProductCart = ({ e }) => {
    const dispatch=useDispatch();
    const handleDelete=()=>{
        dispatch(deleteProductById(e.id))
    }
  return (
    <>
        <div className="flex justify-between rounded-md gap-2 items-center w-full  p-4">
      <img
        src={e.images[0].url}
        alt="product"
        className="w-20  h-20 object-cover rounded-md"
      />
      <div className="flex flex-col flex-1 justify-around">
        <span className="text-sm px-2 text-gray-700 dark:text-gray-200">{e.name}</span>
        <div className="p-2 w-full">
            <button onClick={handleDelete} className="flex w-full  p-2 rounded-md justify-center gap-3 items-center bg-red-600 hover:bg-red-800 transition duration-300 text-white">
                <span className="font-bold text-sm">Remover</span>
                <FaTrash/> 

            </button>

        </div>
      </div>
      
    </div>
    <div className="px-4">
    <hr className="px-4"/>

    </div>
    </>

  );
};

export default CardProductCart;
