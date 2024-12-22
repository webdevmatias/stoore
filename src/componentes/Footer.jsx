import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 w-full pb-28">
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <h3 className="font-bold text-white mb-2">Conheça-nos</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="hover:text-white">
                                Sobre o Stoore
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Comunidade
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-white mb-2">Ganhe dinheiro conosco</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="hover:text-white">
                                Venda no Stoore
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Divulgue seus produtos
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Parcerias
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-white mb-2">Pagamento</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="hover:text-white">
                                Cartões de Crédito
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Pix
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Boleto Bancário
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-white mb-2">Ajuda</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="hover:text-white">
                                Sua conta
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Frete e devoluções
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Central de ajuda
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-4">
                <div className="container mx-auto px-4 py-4 flex flex-col items-center text-sm">
                    <p className="text-gray-400 mb-2">
                        © 2024 Stoore. Todos os direitos reservados.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <a href="#" className="hover:text-white">
                            Termos de Uso
                        </a>
                        <a href="#" className="hover:text-white">
                            Política de Privacidade
                        </a>
                        <a href="#" className="hover:text-white">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
