import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import make1 from '../assets/maquillaje/make1.jpg';
import make7 from '../assets/maquillaje/make7.jpg';
import make9 from '../assets/maquillaje/make9.jpg';
import make12 from '../assets/maquillaje/make12.jpg';
import make14 from '../assets/maquillaje/make14.jpg';
import make15 from '../assets/maquillaje/make15.jpg';
import make19 from '../assets/maquillaje/make19.jpg';
import make23 from '../assets/maquillaje/make23.jpg';
import make4 from '../assets/maquillaje/make4.jpg';
import imagen2 from '../assets/cuidadopersonal/imagen2.jpg';
import Cards from '../Cards/Cards';
const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  function SliderC(){
      return(
  <Carousel responsive={responsive}>
      <Cards title="AirSpun" img={make1} price="300.00"></Cards>
        <Cards title="Revlon" img={make7} price="215.00"></Cards>
        <Cards title="Beauty Creation" img={make9} price="300.00"></Cards>
        <Cards title="She LipBalm" img={make12} price="45.00"></Cards>
        <Cards title="Px Look" img={make14} price="100.00"></Cards>
        <Cards title="Banana" img={make15} price="200.00"></Cards>
        <Cards title="Brochas" img={make19} price="650.00"></Cards>
        <Cards title="Bobbi Brown" img={make23} price="340.00"></Cards>
        <Cards title="Dr.Rashee" img={imagen2} price="200.00"></Cards>
        <Cards title="Brocha de Sirena" img={make4} price="500.00"></Cards>
        <Cards title="AirSpun" img={make1} price="300.00"></Cards>
  </Carousel>);
  }
  export default SliderC;