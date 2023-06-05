import { useContext, useEffect, useState } from "react";
import { PALABRAS } from "../assets/palabras";
import "../css/juego.css";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../assets/25059-gray-seagulls.json";
import Contexto from "../contexto/Contexto";
const Juego = () => {
  const navegacion = useNavigate();
  const [azar, setAzar] = useState(0);
  const [palabra, setPalabra] = useState([]);
  const [misLetras, setMisletras] = useState([]);
  const [correctas, setCorrectas] = useState([]);
  const [erroneas, setErroneas] = useState([]);
  const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

  const misColores = [
    { backgroundColor: " white " },
    { backgroundColor: "green", color: " white " },
    { backgroundColor: "red", color: "white" },
  ];
  const { escribirCorrecta } = useContext(Contexto);
  const letras_array = letras.split("");
  const [imagen, setImagen] = useState(1);
  const handleClick = (e) => {
    const letra = e.target.innerHTML;
    console.log(letra);
    setMisletras([...misLetras, letra]);
    if (palabra.indexOf(letra) >= 0) {
      setCorrectas([...correctas, letra]);
    } else {
      setErroneas([...erroneas, letra]);
      setImagen(imagen + 1);
      if (imagen > 5) {
        navegacion("/final");
      }
    }
  };
  useEffect(() => {
    let noEncontrado = 0;
    palabra.map((valor) => {
      if (misLetras.find((e) => e === valor) === undefined) {
        noEncontrado++;
      }
    });
    if (noEncontrado === 0 && correctas.length > 0) {
      navegacion("/ganado");
    }
  }, [correctas]);

  useEffect(() => {
    setAzar(Math.floor(Math.random() * PALABRAS.length));
  }, []);
  console.log(azar);

  useEffect(() => {
    setPalabra(PALABRAS[azar].palabro.split(""));
    escribirCorrecta(PALABRAS[azar].palabro);
  }, [azar]);
  // aca lo q hace es q si azar tiene una palabra la splitea dando le espacios el
  //split transforma en un array
  console.log(palabra);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="mi-componente">
        <Lottie options={lottieOptions} width={1000} height={500} />
        <div className="contenido">
          <div className="pregunta">{PALABRAS[azar].pregunta}</div>
          <div className="palabra">
            {palabra.map((letra, i) => {
              return misLetras.indexOf(letra) === -1 ? (
                <div className="palo" key={i}></div>
              ) : (
                <div className="palo" key={i}>
                  {letra.toUpperCase()}
                </div>
              );
            })}
          </div>
          <div className="botones">
            {letras_array.map((letras) =>
              correctas.find((e) => e === letras) ? (
                <button style={misColores[1]} key={letras}>
                  {letras}
                </button>
              ) : erroneas.find((e) => e === letras) ? (
                <button style={misColores[2]} key={letras}>
                  {letras}
                </button>
              ) : (
                <button
                  style={misColores[0]}
                  key={letras}
                  onClick={handleClick}
                >
                  {letras}
                </button>
              )
            )}
          </div>
          <div className="imagen">
            <img src={require(`../assets/el_ahorcado${imagen}.png`)} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Juego;
