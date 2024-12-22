import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Pic from "../assets/matias_pic.png";

const Perfil = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto bg-gray-100 px-6">
      {/* Cartão de Perfil */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full my-36 max-w-4xl flex flex-col md:flex-row items-center md:items-start">
        {/* Foto de Perfil */}
        <div className="mb-6 md:mb-0 md:w-1/3 flex justify-center">
          <img
            src={Pic}
            alt="Foto de Perfil"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primaryDark"
          />
        </div>

        {/* Informações do Perfil */}
        <div className="text-center md:text-left md:ml-8 w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Matias</h1>
          <p className="text-lg text-gray-600 mb-4">Desenvolvedor Front-End | UI & UX Designer</p>

          {/* Links de redes sociais */}
          <div className="flex justify-center md:justify-start gap-6 mb-8">
            <a href="https://github.com/webdevmatias" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/matiaz/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/omattiaz/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Informações Pessoais */}
          <div className="text-left text-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Informações Pessoais :</h2>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Idade:</span>
              <span>20 anos</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Formação:</span>
              <span>Bac. Ciência da Computação</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Localização:</span>
              <span>Nordeste, Brasil</span>
            </div>
          </div>

          {/* Botão de Edição */}
          <div className="mt-6">
            <button className="px-6 py-2 bg-primaryDark text-white rounded-lg hover:bg-primaryDark/80 transition">
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
