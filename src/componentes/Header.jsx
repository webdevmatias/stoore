import StooreLogo from "../assets/stoore_logo_white.svg";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex flex-row justify-center gap-4 items-center fixed z-50 top-0 w-full h-16 bg-primary">
      {/* Logo */}
      <div className="flex items-center w-24 md:w-28">
        <img src={StooreLogo} alt="Stoore Logo" className="h-8" />
      </div>

      {/* Campo de Pesquisa */}
      <div className="flex w-3/5 md:w-2/5"> 
        <input
          type="text"
          placeholder="Pesquisa na Stoore"
          className="w-full px-2 border-t focus:outline-none rounded-l-md"
        />
        <button className="p-2 bg-primaryDark rounded-r-md text-white flex items-center justify-center">
          <FaSearch className="text-lg" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
