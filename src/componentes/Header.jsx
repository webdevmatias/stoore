import StooreLogo from "../assets/stoore_logo_white.svg";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex flex-col justify-center items-center fixed z-50 top-0 w-full h-auto bg-primary">
      {/* Primeira linha do header */}
      <div className="flex w-full justify-center items-center py-4">
        {/* Logo */}
        <div className="flex items-center w-24 md:w-28">
          <img src={StooreLogo} alt="Stoore Logo" className="h-8" />
        </div>

        {/* Campo de Pesquisa */}
        <div className="flex w-3/5 md:w-1/4 ml-4">
          <input
            type="text"
            placeholder="Pesquisar na Stoore.com.br"
            className="w-full px-2 focus:outline-none rounded-l-md"
          />
          <button className="p-2 bg-secondary rounded-r-md text-white flex items-center justify-center">
            <FaSearch className="text-lg text-black font-light" />
          </button>
        </div>
      </div>

      {/* Segunda linha do header */}
      <div className="flex w-full justify-center bg-gray-800 h-full px-4 py-2 gap-8">

        {/* Dropdown de Categorias */}
        <div className="flex md:flex-row flex-col items-center">
          <label htmlFor="categories" className="text-white mr-2">Categorias:</label>
          <select
            id="categories"
            className="focus:outline-none rounded-md bg-gray-800 text-white"
          >
            <option value="Notebooks">Notebooks</option>
            <option value="PC Gamer">PC Gamer</option>
            <option value="Desktop">Desktop</option>
            <option value="Escritório">Escritório</option>
            <option value="Gadgets">Gadgets</option>
          </select>
        </div>

        {/* CEP */}
        <div className="flex flex-row items-center justify_center">
            <FaMapMarkerAlt className="text-white mr-2" />
            <span className="text-white">Enviar para:</span>
          <input
            type="text"
            placeholder="00000-000"
            className="ml-4 w-24 focus:outline-none rounded-md bg-transparent text-white placeholder-gray-300"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
