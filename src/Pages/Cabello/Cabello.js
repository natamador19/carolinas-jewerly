import Cards from '../../Cards/Cards';
import CardsHolders from '../../Cards/CardsHolder';
import img1 from '../../assets/cabello/1.jpg';
import img2 from '../../assets/cabello/2.jpg';
import img3 from '../../assets/cabello/3.jpg';
import img4 from '../../assets/cabello/4.jpeg';
import img5 from '../../assets/cabello/5.jpeg';
import img6 from '../../assets/cabello/6.jpeg';
import img7 from '../../assets/cabello/7.jpg';
import img8 from '../../assets/cabello/8.jpg';

function Cabello(){
    return(
        <section>
            <CardsHolders>
                <Cards title="Plancha de cerámica para cabello" p="Deja tu cabello reluciente y sin tanto daño con solo una pasada." img={img1} price="15,000.00"></Cards>
                <Cards title="Shampoo TreSemmé" p="Shampoo que hidrata tu cabello desde la raíz hasta las puntas." img={img2} price="15,000.00"></Cards>
                <Cards title="Crema hidratante para el cabello" p="Nutre y humecta tu cabello después del baño." img={img3} price="15,000.00"></Cards>
                <Cards title="Cepillo para el cabello" p="Cepillo con cerdas y que aplica un poco de calor a tu cabello." img={img4} price="15,000.00"></Cards>
                <Cards title="Cepillo para el cabello" p="Cepillo con cerdas suaves y con espejo incorporado." img={img5} price="15,000.00"></Cards>
                <Cards title="Cepillo para el cabello" p="Cepillo con cerdas extra suaves y con mango cómodo." img={img6} price="15,000.00"></Cards>
                <Cards title="Tinte para el cabello" p="Tiñe tu cabello sin preocupaciones." img={img7} price="15,000.00"></Cards>
                <Cards title="Tónico para el cabello" p="Humecta tu cabello con esta loción." img={img8} price="15,000.00"></Cards>
            </CardsHolders>
        </section>
    );
}

export default Cabello;