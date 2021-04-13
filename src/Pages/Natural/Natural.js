import CardsHolders from '../../Cards/CardsHolder';
import Cards from '../../Cards/Cards';
import img1  from '../../assets/Natural/imagen1.jpg';
import img2  from '../../assets/Natural/imagen2.jpg';
import img3  from '../../assets/Natural/imagen3.jpg';
import img4  from '../../assets/Natural/imagen4.jpg';
import img5  from '../../assets/Natural/imagen5.jpeg';
import img6  from '../../assets/Natural/imagen6.jpg';
import img7  from '../../assets/Natural/imagen7.jpg';
import img8  from '../../assets/Natural/imagen8.jpg';
import img9  from '../../assets/Natural/imagen9.jpg';
import img10 from '../../assets/Natural/imagen10.jpg';
import img11 from '../../assets/Natural/imagen11.jpg';


function Natural(){
    return(
        <section>
            <CardsHolders>
            <Cards title="Mascarilla de carbón activado" p="Saca los puntos negros y espinillas de tu piel." img={img1} price="15,000.00"></Cards>
            <Cards title="Crema facial de vitamina C" p="Hidrata tu rostro con la escencia de vitamina C." img={img2} price="15,000.00"></Cards>
            <Cards title="Crema facial de aloe vera" p="Peeling y exfoliación facial." img={img3} price="15,000.00"></Cards>
            <Cards title="Serum de vitamina C" p="Afirma y logra una piel con elasticidad y un efecto antiedad." img={img4} price="15,000.00"></Cards>
            <Cards title="Máscaras faciales" p="Máscarillas para hidratar tu rostro." img={img5} price="15,000.00"></Cards>
            <Cards title="Mascarillas hidratantes" p="Utilizalas para humectar tu rostro." img={img6} price="15,000.00"></Cards>
            <Cards title="Toallitas desmaquillantes" p="Limpia el maquillaje de tu rostro." img={img7} price="15,000.00"></Cards>
            <Cards title="Espuma para el rostro" p="Lava tu rostro con esta espuma ya sea de leche, aloe vera o manzanilla." img={img8} price="15,000.00"></Cards>
            <Cards title="Toallas desmaquillantes" p="Limpia el maquillaje de tu rostro." img={img9} price="15,000.00"></Cards>
            <Cards title="Primer de coco" p="Aplica en tu rostro antes del maquillaje." img={img10} price="15,000.00"></Cards>
            <Cards title="Limpiador de brochas" p="Higiene para tus brochas, higiene para tu rostro." img={img11} price="15,000.00"></Cards>
            </CardsHolders>
        </section>       
    );
}

export default Natural;