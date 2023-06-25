import React from "react";
import { Link } from "react-router-dom";

const   CardCategory = ({ data }) => {
  return (
    <Link to={ `/categorias/${data.route}`}>

      <div className="bg-gradient-to-t rounded-md  from-black to-transparent  w-full relative h-96">

        <img
          alt="Producto categoria"
          className="w-full object-cover h-full rounded-md"
          src={data.image}
          width={600}
          height={600}
        />
        <div className="absolute bg-gradient-to-t rounded-md  from-black to-transparent h-full w-full top-0">

        </div>
        <div className="absolute bottom-4 p-2 flex justify-center gap-8 items-center w-full flex-col">
          <h3 className="font-bold text-gray-100 text-2xl">{data.name}</h3>
          <button className="flex justify-center w-full rounded-md px-4 py-2 bg-primary hover:bg-primaryhover font-bold text-white">
            Explorar mas{" "}
          </button>
        </div>

      </div>
      </Link>

  );
};

export default CardCategory;
