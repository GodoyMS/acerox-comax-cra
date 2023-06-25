import React from "react";
import ChatBot from "react-simple-chatbot";
import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom"

import { FaWindowClose } from "react-icons/fa";

import { BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { productos } from "@data/products";

const Contacto = () => {
  const contactLinks = [
    {
      id: 1,
      name: "Whatsapp",
      icon: BsWhatsapp,
      color: "blue",
      link: "https://api.whatsapp.com/send?phone=51973876332&text=Hola%",
    },
    {
      id: 2,
      name: "Llamar",
      icon: BsFillTelephoneFill,
      color: "blue",
      link: "tel:51973876332",
    },
    { id: 3, name: "Email", icon: MdOutlineEmail, color: "blue", link: "" },
  ];

  return (
    <div className="flex  flex-col gap-4">
      {contactLinks.map((e) => (
        <a
        rel="noreferrer"
          href={e.link}
          target="_blank"
          key={e.id}
          className={`flex  items-center gap-4  rounded-md p-3 justify-start bg-${e.color}-600 hover:bg-${e.color}-700 `}
        >
          {<e.icon className="text-white" />}
          <span className="text-white  font-semibold">{e.name}</span>
        </a>
      ))}
    </div>
  );
};

const Products = () => {


  return (
    <>
      {productos && (
        <div style={{ width: "100%" }}>
          <div className="text-start font-bold">Productos</div>
          {productos.map((e) => (
            <div key={e.id} className="flex flex-col mt-2 py-2 gap-8 mb-4">
              <div className="flex justify-between gap-4 items-center">
                <td className="">
                  <Link
                    className=" text-xs  text-justify  space-y-0   leading-5"
                    to={`/productos/${e.id}`}
                  >
                    {e.name}
                  </Link>
                </td>
                <td>
                  {" "}
                  <Link
                    className=" text-xs p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-justify  space-y-0  font-sans  leading-5"
                    to={`/productos/${e.id}`}
                  >
                    Ver
                  </Link>
                </td>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const ChatBotComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [isChatBotActive, setIsChatBotActive] = useState(false);


  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(()=>{
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    // Set the initial value of the `isMobile` state variable
    if(mediaQuery.matches){
      setIsChatBotActive(true)
    }
  },[])

  



  const steps = [
    {
      id: "1",
      message: "¡Bienvenido a Aceros Comax! ",
      trigger: "2",
    },
    {
      id: "2",
      message: "¿En que te puedo ayudar?",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        {
          value: "cursos",
          label: "Explorar productos",
          trigger: "renderAllProducts",
        },
        {
          value: "contacto",
          label: "Contactar a Aceros Comax",
          trigger: "contacto",
        },
        {
          value: "whatIsAcerosComax",
          label: "¿Que es Aceros Comax?",
          trigger: "whatIsAC",
        },
      ],
    },
    {
      id: "renderAllProducts",
      component: <Products />,
      asMessage: false,
      trigger: "final",
    },
    {
      id: "contacto",
      component: <Contacto />,
      asMessage: true,
      trigger: "final",
    },
    {
      id: "whatIsAC",
      message:
        "Somos un equipo dinámico y comprometido que se dedica a brindar soluciones excepcionales a nuestros clientes. En nuestro grupo, nos enorgullece contar con profesionales altamente capacitados y apasionados en sus respectivos campos",
      trigger: "final",
    },
    {
      id: "final",
      options: [
        {
          value: "inicio",
          label: "Volver a inicio",
          trigger: "2",
        },
        {
          value: "end",
          label: "Terminar Chat",
          trigger: "endChat",
        },
      ],
    },
    {
      id: "endChat",
      message: "Gracias por hablar conmigo, hasta la próxima",
      end: true,
    },
  ];
  const toggleChat = () => {
    setIsChatBotActive(!isChatBotActive);
  };

  return (
    <>
      <ChatBot
        handleEnd={() => setIsChatBotActive(false)}
        opened={isChatBotActive}
        toggleFloating={toggleChat}
        enableMobileAutoFocus={false}
        bubbleStyle={{
          backgroundColor: "#3949ab ",
          color: "#fff",
        }}
        bubbleOptionStyle={{
          backgroundColor: "#283593",
          color: "#fff",
        }}
        headerStyle={{
          backgroundColor: "#3949ab",
          color: "#fff",
        }}
        headerComponent={
          <div
            style={{ backgroundColor: "#3949ab", color: "#fff" }}
            className="p-4 text-base flex justify-between"
          >
            <span>Aceros Comax Chat</span>
            <button onClick={toggleChat}>
              <FaWindowClose className="w-6 h-6" />{" "}
            </button>
          </div>
        }
        headerTitle="Aceros Comax Chat"
        autoplay={true}
        speechSynthesis={{ enable: true, lang: "es" }}
        className="bg-gray-600"
        placeholder={"Escribir un mensaje"}
        floating={true}
        botAvatar={
          "https://flowbite.com/docs/images/people/profile-picture-4.jpg"
        }
        steps={steps}
        floatingStyle={{
          backgroundColor: "#3949ab",
          color: "#fff",
        }}
      />

      {/* {isChatActive && (
        <div
          style={{ zIndex: 300 }}
          className="fixed bottom-5 right-5  rounded-md  shadow-md "
        >
          <div
            style={{ zIndex: 400 }}
            className="text-gray-500 relative w-full flex justify-end  mr-2 mb-2 "
          >
            <div>
              {" "}
              <button onClick={() => setIsChatActive(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-8 w-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      {!isChatActive && (
        <div
          onClick={() => setIsChatActive(true)}
          style={{ zIndex: 300 }}
          className="fixed bottom-5 cursor-pointer bg-gray-200 shadow-sm shadow-black rounded-full p-2 right-5 "
        >
          <BiMessageAlt className="w-6 h-6 md:w-8 md:h-8" />
        </div>
      )} */}
    </>
  );
};

export default ChatBotComponent;
