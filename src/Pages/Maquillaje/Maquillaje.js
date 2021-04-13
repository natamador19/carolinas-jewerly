import Cards from "../../Cards/Cards";
import CardsHolders from "../../Cards/CardsHolder";
import mak21  from '../../assets/maquillaje/mak21.jpg';
import make1  from '../../assets/maquillaje/make1.jpg';
import make2  from '../../assets/maquillaje/make2.jpg';
import make3  from '../../assets/maquillaje/make3.jpg';
import make4  from '../../assets/maquillaje/make4.jpg';
import make5  from '../../assets/maquillaje/make5.jpg';
import make6  from '../../assets/maquillaje/make6.jpg';
import make7  from '../../assets/maquillaje/make7.jpg';
import make8  from '../../assets/maquillaje/make8.jpg';
import make9  from '../../assets/maquillaje/make9.jpg';
import make10 from '../../assets/maquillaje/make10.jpg';
import make11 from '../../assets/maquillaje/make11.jpg';
import make12 from '../../assets/maquillaje/make12.jpg';
import make13 from '../../assets/maquillaje/make13.jpg';
import make14 from '../../assets/maquillaje/make14.jpg';
import make15 from '../../assets/maquillaje/make15.jpg';
import make16 from '../../assets/maquillaje/make16.jpg';
import make17 from '../../assets/maquillaje/make17.jpg';
import make18 from '../../assets/maquillaje/make18.jpg';
import make19 from '../../assets/maquillaje/make19.jpg';
import make20 from '../../assets/maquillaje/make20.jpg';
import make21 from '../../assets/maquillaje/make21.png';
import make22 from '../../assets/maquillaje/make22.jpg';
import make23 from '../../assets/maquillaje/make23.jpg';

function Maquillaje() {
  return (
      <section>
      <CardsHolders>
        <Cards title="Kit para modelar tus cejas" p="Estiliza y da forma a tus cejas facilmente. " img={mak21} price="15,000.00"></Cards>
        <Cards title="Polvos sueltos" p="Sella tu base de maqillaje para mayor uniformidad." img={make1} price="15,000.00"></Cards>
        <Cards title="Sombras coloridas" p="Da color a tus párpados." img={make2} price="15,000.00"></Cards>
        <Cards title="Cremas Hidratantes faciales" p="Humecta tu piel antes del maquillaje." img={make3} price="15,000.00"></Cards>
        <Cards title="Kit de brochas estilo Sirena" p="Brochas para los párpados y para aplicar base y polvos." img={make4} price="15,000.00"></Cards>
        <Cards title="Kit de brochas Profesionales" p="Brochas para los párpados y para aplicar base y polvos." img={make5} price="15,000.00"></Cards>
        <Cards title="Sombras shimmer" p="Realiza diseños lindos y coloridos en tus párpados." img={make6} price="15,000.00"></Cards>
        <Cards title="Corrector" p="Corrector para ojos y cejas." img={make7} price="15,000.00"></Cards>
        <Cards title="Polvos compactos" p="Sella tu base de maqillaje para mayor uniformidad." img={make8} price="15,000.00"></Cards>
        <Cards title="Base full covertura" p="Cubre tus imperfecciones para lucir expectacular." img={make9} price="15,000.00"></Cards>
        <Cards title="Concealer para imperfecciones" p="Luce una piel perfecta, oculta las ojeras y pequeñas cicatrices." img={make10} price="15,000.00"></Cards>
        <Cards title="Hidratante facial" p="Espuma facial para que laves tu rostro luego de desmaquillate." img={make11} price="15,000.00"></Cards>
        <Cards title="Bálsamos labiales" p="Hidrata tus labios." img={make12} price="15,000.00"></Cards>
        <Cards title="Concealer Matte para pieles mixtas" p="Luce una piel perfecta, oculta las ojeras y pequeñas cicatrices." img={make13} price="15,000.00"></Cards>
        <Cards title="Esponjas de maquillaje" p="Aplica tu base de maquillaje uniformemente y con mejor covertura." img={make14} price="15,000.00"></Cards>
        <Cards title="Polvos compactos" p="Sella tu base de maqillaje para mayor uniformidad." img={make15} price="15,000.00"></Cards>
        <Cards title="Máscara para pestañas" p="Alarga y da volumen a tus pestañas." img={make16} price="15,000.00"></Cards>
        <Cards title="Kit Make-up" p="Base de maquillaje, junto con máscara de pestaña y labial." img={make17} price="15,000.00"></Cards>
        <Cards title="Serum Facial" p="Prepara tu rostro antes del maquillaje." img={make18} price="15,000.00"></Cards>
        <Cards title="Kit de brochas estéticas" p="Brochas para los párpados y para aplicar base y polvos." img={make19} price="15,000.00"></Cards>
        <Cards title="Máscara full para pestañas" p="Alarga y da volumen a tus pestañas." img={make20} price="15,000.00"></Cards>
        <Cards title="Paleta de sombras" p="Da color a tus párpados." img={make21} price="15,000.00"></Cards>
        <Cards title="Sombras totalmente matte" p="Realiza diseños lindos y coloridos en tus párpados." img={make22} price="15,000.00"></Cards>
        <Cards title="Iluminadores y Rubores" p="Ilumina tu rostro y ruboriza tus mejillas." img={make23} price="15,000.00"></Cards>
      </CardsHolders>
      </section>
  );
}

export default Maquillaje;