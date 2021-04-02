import { MdShoppingCart } from "react-icons/md";
import { MdRemoveRedEye} from 'react-icons/md';
function ButtonsShop(){

    return(
        <section>
            <div className="flex justify-center items-center">
            <h3 className="flex text-center items-center text-3xl">$</h3>
            <h3 className="flex text-center font-light mt-1 text-xl ">1234.00</h3>
            </div>
        <section className="flex justify-between mt-8 mb-6">
            
            <button className=" px-4 py-3 mr-3 text-center flex  bg-black text-white rounded-lg hover:bg-red-500 shadow-sm mb-2"> <MdShoppingCart class="mt-1 mr-1"></MdShoppingCart> Comprar</button>
            <button  className="p-2    bg-red-200 text-black rounded-3xl shadow-sm mb-2 hover:bg-black hover:text-white"><MdRemoveRedEye></MdRemoveRedEye></button>
        </section>
        </section>
    );
}
export default ButtonsShop;