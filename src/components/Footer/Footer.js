import {FaFacebookF} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import {ImPhone} from "react-icons/im";
import {MdEmail} from "react-icons/md";

function Footer(){


        return(
            <section className="bg-black text-white flex flex-wrap flex-row mt-8">
                <div className="flex w-96 h-60 flex-col m-6">
                    <h2 className="text-white text-lg ">ACERCA DE</h2>
                    <div className="w-32 bg-red-400 h-1"></div>
                    <p className="text-left text-white ">Somos una empresa hondureña que ha revolucionado el fast fashion, poniendo a tu alcance más de 1000 productos de alta calidad a precios accesibles.
                     Nuestros productos están diseñados para todo público adaptándonos a tus gustos y generaciones.</p>
                    <div className="flex ">
                    <button class="bg-gray-900 hover:bg-red-300 text-white p-2 ml-2 rounded-xl "><FaFacebookF className="text-white text-xl"></FaFacebookF></button>
                    <button class="bg-gray-900 hover:bg-red-300 text-white p-2 ml-2 rounded-xl "><AiOutlineTwitter className="text-white text-xl"></AiOutlineTwitter></button>
                    <button class="bg-gray-900 hover:bg-red-300 text-white p-2 ml-2 rounded-xl "><AiFillInstagram className="text-white text-xl"></AiFillInstagram></button>
                    </div>
                </div>
                <div className="flex w-96 h-60 flex-col m-6">
                   <h2 className="text-white text-lg ">DIRECCIÓN</h2>
                   <div className="w-32 bg-red-400 h-1"></div>
                    <div className="flex mt-5">
                        <button className="ml-2 bg-gray-900 rounded-3xl p-2 shadow-md"><ImLocation className="text-white"></ImLocation></button>
                        <h3 className="ml-2">Tegucigalpa, Honduras</h3>
                    </div>
                    <div className="flex mt-3">
                        <button className="ml-2 bg-gray-900 rounded-3xl p-2 shadow-md"><ImPhone className="text-white"></ImPhone></button>
                        <h3 className="ml-2">+504 9876-9876</h3>
                    </div>
                    <div className="flex mt-3">
                        <button className="ml-2 bg-gray-900 rounded-3xl p-2 shadow-md"><MdEmail className="text-white"></MdEmail></button>
                        <h3 className="ml-2">carolinas@gmail.com</h3>
                    </div>
                </div>
                <div className="flex w-96 h-72 flex-col m-5">
                <h2 className="text-white text-lg ">CONTÁCTANOS</h2>
                <div className="w-32 bg-red-400 h-2"></div>
                <label for="txtEmail" className="mt-2">Correo Electrónico</label>
                <input className="p-2 mt-1 shadow-sm  border-red-400 border-2 bg-black" placeholder="tucorreo@gmail.com "name="txtEmail" id="txtEmail"></input>
                <label for="txtMensaje" className="mt-2">Mensaje</label>
                <input className="p-7 mt-1 shadow-sm  border-red-400 border-2 bg-black" name="txtMensaje" id="txtMensaje"></input>
                <button className="p-4 bg-red-400 mt-2">Enviar</button>
                </div>
            </section>
        );
}

export default  Footer;