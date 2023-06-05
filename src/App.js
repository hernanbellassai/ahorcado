import logo from "./logo.svg";
import "./App.css";
import Juego from "./componentes/Juego";
import { Route, Routes } from "react-router-dom";
import Ganado from "./componentes/Ganado";
import Portada from "./componentes/Portada";
import Final from "./componentes/Final";
import Provider from "./contexto/Provider";
function App() {
  return (
    <Provider>
    <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="juego/" element={<Juego />} />
        <Route path="final/" element={<Final />} />
        <Route path="ganado/" element={<Ganado />} />
      </Routes>
    </Provider>
  );
}

export default App;
