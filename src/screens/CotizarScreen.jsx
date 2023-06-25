import React,{useState} from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { Navigate } from "react-router-dom";

const CotizarScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);
  const productosRedux = useSelector((state) => state.user.products);

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
          message: `Email: ${email},  Número: ${phone} Mensaje : ${message}, Productos solicitados: ${productosRedux.map((obj)=>obj.name).join(", ")}`,
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
      })
  };

  if (redirect) {
    return <Navigate to={`/graciascotizacion/${name}`} replace={true} />;
  }


  return (
    <main className=" max-w-7xl mx-auto py-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-700 dark:text-gray-300 underline font-bold text-2xl md:text-3xl mb-4">
            Productos a cotizar
          </h2>
          {productosRedux &&
            productosRedux.length > 0 &&
            productosRedux.map((e) => (
              <div
                className="flex items-center dark:bg-gray-800  bg-gray-200 text-gray-700 justify-between p-4 rounded-md"
                key={e.id}
              >
                <div className=" aspect-square w-20">
                  <img
                  alt="product"
                    src={e.images[0].url}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{e.name}</span>
              </div>
            ))}
        </div>
        <div className="flex items-center">
        <form
            onSubmit={handleSubmit}
            className="mt-12 mx-auto px-4 p-8  place-content-center place-items-center bg-white sm:max-w-lg sm:px-8 rounded-xl"
          >
            <h2 className="font-bold text-gray-700 mb-7 text-3xl"> Datos personales</h2>
            <div className="space-y-5 h-full">
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
                <label className="font-medium">Mensaje (opcional)</label>
                <textarea
                  type="text"
                  value={message}
                  onChange={(prev) => setMessage(prev.target.value)}
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                {isLoading ? " Enviando cotización..." : "Enviar cotización"}
              </button>
            </div>
          </form>

        </div>
      </div>
    </main>
  );
};

export default CotizarScreen;
