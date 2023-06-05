import Contexto from "./Contexto";
import { useState } from "react";

function Provider({ children }) {
  const [laCorrecta, setCorrecta] = useState("");

  const escribirCorrecta = (aGuardar = "") => {
    setCorrecta(aGuardar);
  };
  return (
    <Contexto.Provider value={{ escribirCorrecta, laCorrecta }}>
      {children}
    </Contexto.Provider>
  );
}

export default Provider;
