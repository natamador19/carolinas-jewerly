import CardsHolders from '../../Cards/CardsHolder';

import Cards from '../../Cards/Cards';
import img1  from '../../assets/cuidadopersonal/imagen1.jfif';
import img2  from '../../assets/cuidadopersonal/imagen2.jpg';
import img3  from '../../assets/cuidadopersonal/imagen3.jpg';
import img5  from '../../assets/cuidadopersonal/imagen5.jpg';
import img6  from '../../assets/cuidadopersonal/imagen6.jpeg';
import img7  from '../../assets/cuidadopersonal/imagen7.jpeg';
import img8  from '../../assets/cuidadopersonal/imagen8.jpeg';
import img9  from '../../assets/cuidadopersonal/imagen9.jpeg';
import img10 from '../../assets/cuidadopersonal/imagen10.jpeg';
import img11 from '../../assets/cuidadopersonal/imagen11.jpg';
import img12 from '../../assets/cuidadopersonal/imagen12.jpg';

function CuidadoPersonal(){
    return(
        <section>
            <CardsHolders>
            <Cards title="Toallas húmedas" p="Remueve tu maquillaje fácilmente." img={img1} price="15,000.00"></Cards>
            <Cards title="Crema humectante de aloe vera" p="Hidrata tu piel ." img={img2} price="15,000.00"></Cards>
            <Cards title="Serum para hidratar la piel" p="Humecta y revitaliza tu piel con vitamina C." img={img3} price="15,000.00"></Cards>
            <Cards title="Toallas demaquillantes" p="Remueve tu maquillaje fácilmente e hidrata." img={img5} price="15,000.00"></Cards>
            <Cards title="Crema para granitos" p="Aplicar sobre la zona afectada." img={img6} price="15,000.00"></Cards>
            <Cards title="Removedor de maquillaje" p="Limpia profundamente tu rostro." img={img7} price="15,000.00"></Cards>
            <Cards title="Exfoliante corporal de café" p="Antiedad e hidratante por excelencia." img={img8} price="15,000.00"></Cards>
            <Cards title="Exfoliante corporal" p="Crema tonificate y reafirmante" img={img9} price="15,000.00"></Cards>
            <Cards title="Exfoliante corporal de aloe vera" p="Hidrata y nutre tu piel." img={img12} price="15,000.00"></Cards>
            <Cards title="Spray facial de Aloe Vera" p="Dale a tu piel esa calma y humectación necesaria." img={img10} price="15,000.00"></Cards>
            <Cards title="Spray facial de Colágeno" p="Escencia y elasticidad para tu rostro." img={img11} price="15,000.00"></Cards>
            </CardsHolders>
        </section>
    );
}

export default CuidadoPersonal;