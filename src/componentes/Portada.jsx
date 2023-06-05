import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledComponent } from "styled-components";
import StyleSheet from "react";
import styled from "styled-components";
import "../css/portada.css";
function Portada() {
  const navigate = useNavigate();
  return (
    <div className="cont1">
      <h1 className="titulo">Bienvenido</h1>
      <div className="botonn">
        <StyledButton onClick={() => navigate("/juego")}>Jugar</StyledButton>
      </div>
    </div>
  );
}

const StyledButton = styled.button`
  background-color: #f0f0f0;
  color: #333;

  font-size: 16px;
`;
export default Portada;
