import { MdShoppingCart } from "react-icons/md";
import { MdRemoveRedEye} from 'react-icons/md';
function ButtonsShop(){

    return(
        <section>
           
        <section className="flex justify-between mt-8 mb-6">
            
            <button className="theme-general px-4 py-3 mr-3 text-center flex  bg-tertiary text-white rounded-lg hover:bg-secondary shadow-sm mb-2"> <MdShoppingCart class="mt-1 mr-1"></MdShoppingCart> Comprar</button>
            <button  className="theme-general p-2    bg-primary text-tertiary rounded-3xl shadow-sm mb-2 hover:bg-tertiary hover:text-white"><MdRemoveRedEye></MdRemoveRedEye></button>
        </section>
        </section>
    );
}
export default ButtonsShop;