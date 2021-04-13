import NavBar from "./components/NavBar/NavBar";
import React from "react";
import Footer from "./components/Footer/Footer";
import Inicio from "./components/Pages/Inicio";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Consejos from "./components/Pages/Consejos/Consejos";
import Maquillaje from "./components/Pages/Maquillaje/Maquillaje";
import Cabello from "./components/Pages/Cabello/Cabello";
import CuidadoPersonal from "./components/Pages/CuidadoPersonal/cuidadopersonal";
import Temporada from "./components/Pages/Temporada/Temporada";
import Natural from "./components/Pages/Natural/Natural";
import Suscribirse from "./components/Pages/Suscribir/Suscribirse";
import Encuesta from "./components/Pages/Encuesta/Encuesta";

function App() {
  return (
    <Router>
    <section>
         <NavBar></NavBar>
         <Switch>
           <Route path="/" exact>
              <Inicio />
           </Route>
           <Route path="/consejos" exact>
            <Consejos/>
           </Route>
           <Route path="/maquillaje" exact>
          <Maquillaje></Maquillaje>
        </Route>
        <Route path="/cabello" exact>
          <Cabello></Cabello>
        </Route>
        <Route path="/cuidado" exact>
        <CuidadoPersonal></CuidadoPersonal>
        </Route>
        <Route path="/temporada" exact>
          <Temporada></Temporada>
        </Route>
        <Route path="/natural" exact>
         <Natural></Natural>
        </Route>
        <Route path="/conocenos" exact>
        
        </Route>
        <Route path="/consejos" exact>
            <Consejos/>
        </Route>
        <Route path="/suscribirse" exact>
         <Suscribirse/>
        </Route>
        <Route path="/encuesta" exact>
         <Encuesta/>
        </Route>
         </Switch>
    

    <Footer></Footer>
    </section>
    </Router>
  );
}

export default App;

