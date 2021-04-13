import CardsHolders from '../../Cards/CardsHolder';
import Cards from '../..//Cards/Cards';

import img12 from '../../assets/tendencias/imagen12.jpg';
import img13 from '../../assets/tendencias/imagen13.jpg';
import img14 from '../../assets/tendencias/imagen14.jpg';
import img15 from '../../assets/tendencias/imagen15.jpg';
import img16 from '../../assets/tendencias/imagen16.jpg';
import img17 from '../../assets/tendencias/imagen17.jpg';
import img18 from '../../assets/tendencias/imagen18.jpeg';

function Temporada(){
    return(
        <section>
            <CardsHolders>
                <Cards title="Set de sombras" p="Da color a tus párpados para lucir reluciente." img={img12} price="15,000.00"></Cards>
                <Cards title="Instrumento masajeador facial" p="Lava y masajea tu rostro." img={img13} price="15,000.00"></Cards>
                <Cards title="Esponja y líquido limpiador de brochas" p="Lava tus brochas." img={img14} price="15,000.00"></Cards>
                <Cards title="Esponja de maquillaje" p="Aplica tu base y difumina uniformemente." img={img15} price="15,000.00"></Cards>
                <Cards title="Espejo con iluminación" p="Usalo para cuando te maquilles." img={img16} price="15,000.00"></Cards>
                <Cards title="Delineador para ojos" p="Estiliza tus ojos." img={img17} price="15,000.00"></Cards>
                <Cards title="Body Locion" p="El perfume es algo invisible, pero un accesorio inolvidable." img={img18} price="15,000.00"></Cards>
            </CardsHolders>
        </section>
    );
}

export default Temporada;