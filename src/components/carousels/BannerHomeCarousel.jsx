import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { FaUserCheck, FaRegGrin } from "react-icons/fa";
import { MdTrendingUp, MdSearch, MdOutlineThumbUp } from "react-icons/md";
import { categories } from "@data/categorias";
import { Link } from "react-router-dom";


const Slide1=()=>{
    return (
        <div class=" h-full min-h-screen flex flex-col justify-center  relative ">
        <video
          className="z-10 absolute inset-0 object-cover w-full h-full"
          autoPlay
          muted
          loop
        >
          <source src="/assets/videos/2_1.mp4" type="video/mp4" />
        </video>
        <div className="z-20 absolute inset-0 object-cover w-full h-full  bg-black opacity-40"></div>
        <div className="z-50  items-center justify-center py-20 inset-0 object-cover w-full h-full px-6 md:px-0 flex flex-col ">
          <div className="z-50 justify-center flex-col max-w-5xl mx-auto items-center mb-5 sm:mb-10">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center  text-gray-200 font-black leading-7 md:leading-10">
              ACEROS DE CALIDAD
              <span class="text-primary"> SUPERIOR </span>
            </h1>
            <div className="flex justify-center">
              <p class="mt-5 sm:mt-10 self-center   lg:w-10/12 text-gray-300 font-normal text-center text-sm sm:text-lg">
                A professonal website drives sales. Create a beautiful website
                to impress and engage new customers and establish your business
                online{" "}
              </p>
            </div>
          </div>

          <div class="flex z-50 justify-center items-center max-w-5xl mx-auto">
            <Link
              to={"/productos"}
              class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-primary transition duration-150 ease-in-out hover:bg-primaryhover lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-primary py-2 sm:py-4 text-sm"
            >
              Ver productos
            </Link>
            <Link
              to={"/contacto"}
              class="ml-4 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-primary bg-transparent transition duration-150 ease-in-out hover:border-primaryhover lg:text-xl lg:font-bold  hover:text-primary rounded border border-primary text-primary px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    )
}


const Slide2=()=>{
    return (
        <div class=" h-full min-h-screen flex flex-col justify-center  relative ">
        <img
        src="/assets/images/inicio/slide2.jpg"
          className="z-10 absolute inset-0 object-cover w-full h-full"
          
          
        />
        <div className="z-20 absolute inset-0 object-cover w-full h-full  bg-black opacity-70"></div>
        <div className="z-50  items-center justify-center py-20 inset-0 object-cover w-full h-full px-6 md:px-0 flex flex-col ">
          <div className="z-50 justify-center flex-col max-w-5xl mx-auto items-center mb-5 sm:mb-10">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center  text-gray-200 font-black leading-7 md:leading-10">
              VARIEDAD DE 
              <span class="text-secondary"> ACEROS </span>
            </h1>
            <div className="flex justify-center">
              <p class="mt-5 sm:mt-10 self-center   lg:w-10/12 text-gray-300 font-normal text-center text-sm sm:text-lg">
                A professonal website drives sales. Create a beautiful website
                to impress and engage new customers and establish your business
                online{" "}
              </p>
            </div>
          </div>

          <div class="flex z-50 justify-center items-center max-w-5xl mx-auto">
            <Link
              to={"/productos"}
              class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-secondary transition duration-150 ease-in-out hover:bg-secondaryhover lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-secondary py-2 sm:py-4 text-sm"
            >
              Ver productos
            </Link>
            <Link
              to={"/contacto"}
              class="ml-4 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-secondary bg-transparent transition duration-150 ease-in-out hover:border-secondaryhover lg:text-xl lg:font-bold  hover:text-secondary rounded border border-secondary text-secondary px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    )
}


const Slide3=()=>{
    return (
        <div class=" h-full min-h-screen flex flex-col justify-center  relative ">
        <img
        src="/assets/images/inicio/slide3.avif"
        width={1500}
        height={900}
        alt="tubos"
          className="z-10 absolute inset-0 object-cover w-full h-full"
          
          
        />
        <div className="z-20 absolute inset-0 object-cover w-full h-full  bg-black opacity-70"></div>
        <div className="z-50  items-center justify-center py-20 inset-0 object-cover w-full h-full px-6 md:px-0 flex flex-col ">
          <div className="z-50 justify-center flex-col max-w-5xl mx-auto items-center mb-5 sm:mb-10">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center  text-gray-200 font-black leading-7 md:leading-10">
              TU FUENTE DE CALIDAD Y 
              <span class="text-tertiary"> DURABILIDAD </span>
            </h1>
            <div className="flex justify-center">
              <p class="mt-5 sm:mt-10 self-center   lg:w-10/12 text-gray-300 font-normal text-center text-sm sm:text-lg">
                A professonal website drives sales. Create a beautiful website
                to impress and engage new customers and establish your business
                online{" "}
              </p>
            </div>
          </div>

          <div class="flex z-50 justify-center items-center max-w-5xl mx-auto">
            <Link
              to={"/productos"}
              class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-tertiary transition duration-150 ease-in-out hover:bg-tertiaryhover lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-tertiary py-2 sm:py-4 text-sm"
            >
              Ver productos
            </Link>
            <Link
              to={"/contacto"}
              class="ml-4 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-tertiary bg-transparent transition duration-150 ease-in-out hover:border-tertiaryhover lg:text-xl lg:font-bold  hover:text-tertiary rounded border border-tertiary text-tertiary px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    )
}


const BannerHomeCarousel = () => {
  return (
    <Swiper
           
    loop={true}
    slidesPerView={1}
    spaceBetween={10}
    navigation
    pagination={{ clickable: true }}
      autoplay={{
        delay: 3000, // Autoplay interval in milliseconds (3 seconds)
        disableOnInteraction: false, // Enable autoplay even when user interacts with the swiper
      }}
            
          >
             <SwiperSlide >
                <Slide1/>

               
              </SwiperSlide>
              <SwiperSlide >
                <Slide2/>

               
              </SwiperSlide>
              <SwiperSlide >
                <Slide3/>

               
              </SwiperSlide>
          </Swiper>
    
    
  )
}

export default BannerHomeCarousel