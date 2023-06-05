import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import "../css/final.css";

function Final() {
  const navegacion = useNavigate();
  const { laCorrecta } = useContext(Contexto);
  const video = require("../video/infierno.mp4");
  return (
    <>
      <div className="componente1">
        <video muted autoPlay>
          <source src={video} height={300} />
        </video>

        <div className="componente2">
          <div className="pregunta">
            <h1>vaya vaya!!</h1>
          </div>
          <h3 className="palabra">la respuesta correcta era : </h3>
          <h2>
            <strong>{laCorrecta}</strong>
          </h2>
          {/* <div className="imagen">
                <img src={require(`../assets/el_ahorcado${6}.png`)} alt="" />
              </div> */}
          <div className="boton">
            <button onClick={() => navegacion("/juego")}>volver a jugar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Final;
