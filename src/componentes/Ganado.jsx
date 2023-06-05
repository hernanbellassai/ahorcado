import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/ganado.css";

function Ganado() {
  const navegacion = useNavigate();
  const video1 = require("../video/cielo.mp4");
  return (
    <div className="caja">
      <video muted autoPlay loop>
        <source src={video1} height={300} />
      </video>

      <div className="caja2">
          <div className="ganaste">
            <h1>Ganaste!</h1>
            </div>
         
        <div className="boton">
          <button onClick={() => navegacion("/juego")}>volver a jugar</button>
        </div>
      </div>
    </div>
  );
}

export default Ganado;
