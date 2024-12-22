import React, { useState } from "react";
import { FaHome, FaShoppingCart, FaUserAlt } from "react-icons/fa";

function NavBar({ setCurrentSection, cartItemCount }) {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (section) => {
    setActiveButton(section);
    setCurrentSection(section);
  };

  return (
    <nav className="flex flex-row justify-around fixed bottom-0 bg-black md:bg-black w-full md:w-2/5 h-auto rounded-none md:rounded-lg mb-0 md:mb-8">
      <button
        className={`flex flex-col items-center justify-center shadow-sm w-1/3 focus:outline-none ${activeButton === "home" ? "bg-primary rounded-lg" : ""}`}
        onClick={() => handleButtonClick("home")}
        aria-label="Home"
      >
        <FaHome className="text-white text-3xl md:text-3xl my-2 md:my-2" />
      </button>

      <button
        className={`flex flex-col items-center justify-center relative shadow-sm w-1/3 focus:outline-none ${activeButton === "carrinho" ? "bg-primary rounded-lg" : ""}`}
        onClick={() => handleButtonClick("carrinho")}
        aria-label="Carrinho"
      >
        <div className="flex items-center justify-center">
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-10 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              {cartItemCount}
            </span>
          )}
          <FaShoppingCart className="text-white text-3xl md:text-3xl my-4 md:my-2" />
        </div>
      </button>

      <button
        className={`flex flex-col items-center justify-center shadow-sm w-1/3 focus:outline-none ${activeButton === "perfil" ? "bg-primary rounded-lg" : ""}`}
        onClick={() => handleButtonClick("perfil")}
        aria-label="Perfil"
      >
        <FaUserAlt className="text-white text-2xl md:text-2xl my-4 md:my-2" />
      </button>
    </nav>
  );
}

export default NavBar;
