
import "./inicio.css";

import CardsHolders from "../Cards/CardsHolder";
import CardSencilla from "../Cards/CardSencilla";
import SliderC from "../Slider/SliderC";
import quote from '../assets/more/quote.png'
import { NavLink } from "react-router-dom";
function Inicio(){
    let uri="/suscribirse";
    let uri2="/encuesta";
    return(
        <section >
            
         
            <div className="paralax">
                <h4 class="text-3xl font-bold ">Encuentra tus productos favoritos con nosotros </h4>
            </div >
            <div class="mt-10 md:mt-0 lg:mt-10 xl:mt-10"></div>
            <SliderC></SliderC>
            <div class="flex justify-center items-center mt-10 mb-6">
                <img src={quote} ccdlass=" w-76 md:w-2/4 lg:w-2/4 xl:w-2/4"/>
            </div>
            <div className="paralax2">
                <h2 class="  mb-4 text-2xl font-normal">Levantate cada mañana y convencente de que puedes hacerlo</h2>
                <NavLink to={uri} class=" theme-general px-8 py-4 bg-secondary  hover:bg-primary text-xl  text-white rounded-lg shadow-2xl">Suscribirse</NavLink>
            </div>
            <CardsHolders >
                <CardSencilla title="Misión" content="Nuestra misión en Carolina's Jewerly es ofrecer productos reconocidos a precios accesibles. Al igual lograr conectarnos con nuestras clientas."></CardSencilla>
                <CardSencilla title="Visión" content="Nuestra visión es lograr expandirnos como macroempresa. Buscando crecer día a día en experiencia y en experiencia hacia la atención al cliente."></CardSencilla>
            </CardsHolders>
            <div className="paralax3">
                <h2 class="  mb-4 text-2xl font-normal text-white">La Sonrisa es el mejor maquillaje de una mujer</h2>
                <NavLink to={uri2} class=" theme-general px-8 py-4 bg-tertiary  hover:bg-secondary text-xl  text-white rounded-lg shadow-2xl">Encuesta</NavLink>
            </div>
            
          
        </section>    
        );

}
export default Inicio;
