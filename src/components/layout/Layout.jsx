import Footer from "@components/footer/Footer";
import { Outlet } from "react-router-dom";

import Header from "@components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initializeState } from "@redux/slice";
import ChatBotComponent from "@components/chatBot/ChatBotComponent";
export default function Layout() {
  const theme = useSelector((state) => state.user.theme);
  console.log(theme);
    const dispatch=useDispatch()
    const products=JSON.parse(localStorage.getItem("products"))
    
  useEffect(()=>{

    dispatch(initializeState({products}));

  },[])



  return (
    <div
      className={`${
        theme ? theme : " "
      } flex flex-col justify-between flex-1 h-full min-h-screen `}
    >
      <Header />
      <ChatBotComponent/>

      <div className="bg-gray-100 dark:bg-gray-900 flex-1 ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
