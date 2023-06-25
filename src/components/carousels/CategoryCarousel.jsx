import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { FaUserCheck, FaRegGrin } from "react-icons/fa";
import { MdTrendingUp, MdSearch, MdOutlineThumbUp } from "react-icons/md";
import { categories } from "@data/categorias";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination]);

const CategoryCarousel = () => {
  const carouselData = [
    {
      id: 1,
      icon: (
        <MdTrendingUp className="my-4 w-20 h-20 xl:w-24 xl:h-24 text-orange-500" />
      ),
      text: "Campañas enfocadas en clientes potenciales",
    },
    {
      id: 2,
      icon: (
        <FaUserCheck className="my-4 w-20 h-20 xl:w-24 xl:h-24 text-orange-500" />
      ),
      text: "No dejaremos tu campaña sola, trabajaremos en ella diariamente",
    },
    {
      id: 3,
      icon: (
        <MdSearch className="my-4 w-20 h-20 xl:w-24 xl:h-24 text-orange-500" />
      ),
      text: "Mínimo de 2 anuncios para cada una de las palabras clave de tu campaña",
    },
    {
      id: 4,
      icon: (
        <MdTrendingUp className="my-4 w-20 h-20 xl:w-24 xl:h-24 text-orange-500" />
      ),
      text: "Aparecerás con todas las palabras claves enfocadas en tus servicios",
    },
    {
      id: 5,
      icon: (
        <MdOutlineThumbUp className="my-4 w-20 h-20 xl:w-24 xl:h-24 text-orange-500" />
      ),
      text: "Comunícate directamente con quien administra tu campaña",
    },
    {
      id: 6,
      icon: (
        <FaRegGrin className="my-4 w-20 h-20 xl:w-24 xl:h-24 text-orange-500" />
      ),
      text: "Analizamos toda la información para optimizar la campaña diariamente",
    },
  ];

  return (
    <div className="max-w-8xl py-8 px-4 mx-auto lg:py-12 lg:px-6 bg-slate-200 dark:bg-slate-800 bg-opacity-50 mt-20 ">
      <div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold my-2 lg:my-4 text-secondary">
            CATEGORIAS
          </h2>
        </div>
        <div className="w-full my-6 lg:my-8 mx-auto">
          <Swiper
           
            loop={true}
            navigation={true}
            autoplay={{
                delay: 3000, // Autoplay interval in milliseconds (3 seconds)
                disableOnInteraction: false, // Enable autoplay even when user interacts with the swiper
              }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 4,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 8,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 8,
              },
            }}
          >
            {categories.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/categorias/${item.route}`}>
                <div className="flex items-center justify-center space-x-4 rounded-2xl my-5 p-4">
                  <div className="flex justify-center items-center flex-col">
                    <img src={item.image} width={300} height={300} className=" w-52 h-52 rounded-full" alt={item.name}/>
                    <p className=" xl:text-lg font-normal text-center text-black dark:text-white">
                      {item.name}
                    </p>
                  </div>
                </div>

                </Link>
               
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
