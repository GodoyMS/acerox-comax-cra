import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard, MdNavigateNext} from 'react-icons/md'
import {TbBrandGmail,TbBrandWhatsapp} from 'react-icons/tb';
import { companyFeatures } from '@data/nosotros';
import { teamMembers } from '@data/nosotros';

const NosotrosScreen = () => {
  return (
    
    <main>
        <section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="flex justify-center items-center  flex-col gap-10">
            <div className="flex flex-col gap-6 px-4">
              <h1 className=" text-gray-700 dark:text-gray-300  font-black leading-tight text-2xl lg:text-5xl">
                ACEROS{" "}
                <span className="text-orange-600">ACOMEX</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm  text-justify mt-4 max-w-md">
              Nos especializamos en ofrecer una amplia selección de productos
                de hierro y metal de alta calidad. Desde herramientas robustas y
                ferretería hasta materiales de construcción duraderos, somos tu
                destino principal para todo lo relacionado con el hierro y el
                metal.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link
                  to={"/categorias/vigas"}
                  className="bg-blue-600 text-white py-3 px-8 hover:bg-blue-700 rounded-lg font-bold flex gap-4 items-center justify-center"
                >
                  <span> Ver productos</span>
                  <MdOutlineDashboard className="w-6 h-6" />
                </Link>
                <Link
                  to={"/contacto"}
                  className="bg-indigo-600 text-white py-3 px-8 hover:bg-indigo-700 rounded-lg font-bold flex gap-4 items-center justify-center"
                >
                  <span> Contactar </span>
                  <MdNavigateNext className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img
              src={"/assets/images/nosotros/viga.png"}
              height={1000}
              width={1000}
              alt='Aceros Comax'
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
      <section>


      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Nuestro enfoque empresarial
                </h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl ">
                  Here at AcerosComex, we focus on markets where technology,
                  innovation, and capital can unlock long-term value and drive
                  economic growth.
                </p>
              </div>
              <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {companyFeatures.map((e) => (
                  <div
                    key={e.id}
                    className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-zinc-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 shadow "
                  >
                    <h3 className="mb-4 text-5xl font-extrabold text-gray-700 dark:text-gray-200">{e.title}</h3>
                    <img
                        alt={e.title}
                      className="h-full w-full"
                      src={e.img}
                      width={1000}
                      height={1000}
                    />

                    <p className="font-light my-10 text-gray-500 sm:text-lg ">
                      {e.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
    
    <div className="mt-10">
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-zinc-500 text-lg text-center font-normal pb-3">
            CONSTRUYENDO EL FUTURO
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-zinc-800 dark:text-zinc-400 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Nuestros talentos detras de la escena de la organización
          </h1>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {teamMembers.map((e) => (
              <div
                key={e.id}
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-800">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={e.img}
                        alt={e.description}
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-zinc-700 dark:text-gray-300  text-center pb-1">
                      {e.title}
                    </div>
                    <p className="text-zinc-700 dark:text-gray-400  text-sm text-center">
                      {e.title}
                    </p>
                    <p className="text-center text-zinc-500   text-base pt-3 font-normal">
                      {e.description}
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <Link href="/" className="mx-5">
                        <div>
                          <TbBrandGmail className="h-6 w-6 hover:text-black dark:hover:text-white text-[#718096]"></TbBrandGmail>
                        </div>
                      </Link>
                      <Link href="/" className="mx-5">
                        <div>
                          <TbBrandWhatsapp className="h-6 w-6 hover:text-black dark:hover:text-white text-[#718096]"></TbBrandWhatsapp>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>



      </section>
    </main>
  )
}

export default NosotrosScreen