import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  MdPhoneInTalk,
  MdEmail,
  MdLocationOn,
  MdWhatsapp,
} from "react-icons/md";
import emailjs from "@emailjs/browser";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const contactInfo = [
    {
      id: 0,
      name: "Telefonos:",
      icon: MdPhoneInTalk,
      content: [{ id: 0, name: "(+51) 913464041" }],
    },
    {
      id: 1,
      name: "Email:",
      icon: MdEmail,
      content: [{ id: 0, name: "aceroscomax@gmail.com" }],
    },
    {
      id: 2,
      name: "Ubicación: ",
      icon: MdLocationOn,
      content: [{ id: 0, name: "Lima - Perú" }],
    },
    {
      id: 2,
      name: "Whatsapp: ",
      icon: MdWhatsapp,
      content: [{ id: 0, name: "(+51) 913464041" }],
    },
  ];

  const socialMediaLinks = [
    {
      id: 0,
      icon: FaFacebookF,
      link: "https://www.facebook.com",
    },
    { id: 1, icon: FaInstagram, link: "/" },
    {
      id: 2,
      icon: FaLinkedinIn,
      link: "https://pe.linkedin.com/",
    },

    {
      id: 4,
      icon: FaYoutube,
      link: "https://www.youtube.com/",
    },
    { id: 5, icon: FaTwitter, link: "/" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        "service_wvqh7h9",
        "template_qnaprz6",
        {
          to_name: "Aceros Comax",
          from_name: name,
          message: `Email: ${email},  Número: ${phone} Mensaje : ${message}`,
        },
        "bhi5dMdjnkTHWDDlQ"
      )
      .then((result) => {
        console.log(result.text);
        setIsLoading(false);
      })
      //   .then(() => router.push(`/formsuccess/${name}`))
      .then(() => setRedirect(true))
      
      .catch((error) => {
        console.log(error.text);
      })
      .finally(() => {
        resetValues();
      })
  };

  const resetValues = () => {
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  };
  if (redirect) {
    return <Navigate to={`/gracias/${name}`} replace={true} />;
  }

  return (
    <main className="  items-center py-40 bg-gray-100  dark:bg-gray-900 ">
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <p className="text-secondary dark:text-secondary text-4xl font-bold sm:text-6xl mt-20">
            Contactanos
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Nos gustaria escucharte, rellena el formulario para ponerte en
            contacto con nosotros
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-20 px-4 ">
          <div className="flex items-center justify-center">
            <div className="bg-gray-400 rounded-xl p-10 shadow-xl   bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 relative ">
              <div
                className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
                style={{
                  background:
                    "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                }}
              ></div>
              <h2 className="text-gray-700 dark:text-gray-50 font-bold text-4xl mb-8 ">
                Informacion de contacto
              </h2>

              <div className="flex flex-col gap-10">
                {contactInfo.map((e) => (
                  <div
                    className="flex flex-col  justify-start flex-wrap gap-3"
                    key={e.id}
                  >
                    <div className="flex gap-4 items-center ">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full p-2">
                        <e.icon className="w-full h-full text-white" />
                      </div>
                      <div className="text-gray-600 dark:text-gray-100 font-bold">
                        {e.name}
                      </div>
                    </div>
                    <div>
                      {e.content.map((c) => (
                        <div
                          className="text-gray-600 dark:text-gray-300 pl-10"
                          key={c.id}
                        >
                          {c.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <hr className="mt-20 mb-8" />

              <div className=" flex justify-center gap-4">
                {socialMediaLinks.map((e) => (
                  <div className="rounded-full bg-white p-2 text-black hover:bg-black hover:text-white">
                    <a key={e.id} href={e.link}>
                      <e.icon className="w-5 h-5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl"
          >
            <div className="space-y-5">
              <div>
                <label className="font-medium">Nombres completos</label>
                <input
                  value={name}
                  onChange={(prev) => setName(prev.target.value)}
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  value={email}
                  onChange={(prev) => setEmail(prev.target.value)}
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Nùmero de telefono</label>
                <div className="relative mt-2">
                  <input
                    value={phone}
                    onChange={(phone) => setPhone(phone.target.value)}
                    type="number"
                    placeholder="+52 929 123 292"
                    required
                    className="w-full pl-2 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Mensaje</label>
                <textarea
                  type="text"
                  value={message}
                  onChange={(prev) => setMessage(prev.target.value)}
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                {isLoading ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactScreen;
