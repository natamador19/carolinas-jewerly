import NavBar from "./components/NavBar/NavBar";
import React from "react";
import Cards from "./components/Cards/Cards";
import logo from './logo.png';
import CardsHolders from "./components/Cards/CardsHolder";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <section>
    <NavBar></NavBar>
    <CardsHolders>
    <Cards title="Hola" p="Las descripciones de producto son textos que explican las características y características de los productos. " img={logo}></Cards>
    <Cards title="Hola" p="Las descripciones de producto son textos que explican las características y características de los productos. " img={logo}></Cards>
    <Cards title="Hola" p="Las descripciones de producto son textos que explican las características y características de los productos. " img={logo}></Cards>
    <Cards title="Hola" p="Las descripciones de producto son textos que explican las características y características de los productos. " img={logo}></Cards>
    </CardsHolders>
    <Footer></Footer>
    </section>
  );
}

export default App;
