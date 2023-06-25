import { toggleTheme } from '@redux/slice';
import React from 'react';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';

const DarkModeToggle = () => {

  const theme= useSelector((state)=>state.user.theme)
  const dispatch=useDispatch();

  const toggleDarkMode = () => {
    dispatch(toggleTheme())

  
  };


  return (
    <>
    
    {
      theme && (
        <button
      onClick={toggleDarkMode}
      className={`bg-[#fff3be] z-[200] ${
        theme === "dark" 
          ? "dark:text-blue-700 dark:bg-blue-300"
          : "text-yellow-600  bg-yellow-200 "
      } rounded-md  p-2 hidden lg:block `}
    >
      {theme === "dark" ? (
        <MdDarkMode className=" h-6 w-6" />
      ) : (
        <MdLightMode className=" h-6 w-6" />
      )}
    </button>

      )
    }
    </>
  );
};

export default DarkModeToggle;