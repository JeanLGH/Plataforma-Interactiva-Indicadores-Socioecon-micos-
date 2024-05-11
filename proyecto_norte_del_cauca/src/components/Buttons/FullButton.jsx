import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Importa el componente Link de React Router

export default function FullButton({ title, to, border }) {
  return (
    <StyledLink to={to}> {/* Envuelve el botón con el componente Link y proporciona la ruta a la que deseas navegar */}
      <Wrapper className="animate pointer radius8" border={border}>
        {title}
      </Wrapper>
    </StyledLink>
  );
}

const StyledLink = styled(Link)` // Estiliza el componente Link
  text-decoration: none;
`;

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#00703C" : "#00703C")};
  background-color: ${(props) => (props.border ? "transparent" : "#00703C")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#00703C" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#00703C")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#00703C" : "#fff")};
  }
`;
