import { toggleTheme } from "@redux/slice";
import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const DarkModeToggleMovil = () => {
  const theme = useSelector((state) => state.user.theme);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      {theme && (
        <div className="flex  flex-1">
          <button
            onClick={toggleDarkMode}
            className={`bg-[#fff3be] z-[200] ${
              theme === "dark"
                ? "dark:text-blue-700 dark:bg-blue-300"
                : "text-yellow-600  bg-yellow-200 "
            } rounded-md  p-2  lg:block w-full flex justify-start  gap-4 items-center `}
          >
            {theme === "dark" ? (
              <>
                <MdDarkMode className=" h-6 w-6" />
                <span>Modo oscuro </span>
              </>
            ) : (
              <>
                <MdLightMode className=" h-6 w-6" />
                <span>Modo claro </span>
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default DarkModeToggleMovil;
