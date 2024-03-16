import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={27} viewBox="0 0 40 27" {...props}>
      {/* Barras verticales */}
      <g data-name="Group 101" transform="translate(-21 -375)">
        {/* Barra gris */}
        <rect data-name="Rectangle 16" width={8} height={20} x={21} y={375} fill="#D4D2D2" />
        {/* Barra verde */}
        <rect data-name="Rectangle 11" width={8} height={10} x={29} y={385} fill="#25DA1C" />
        {/* Barra azul */}
        <rect data-name="Rectangle 15" width={8} height={15} x={37} y={380} fill="#0E77C8" />
        {/* Barra amarilla */}
        <rect data-name="Rectangle 12" width={8} height={25} x={45} y={370} fill="#F3D10F" />
      </g>
    </svg>
  );
}

export default SvgComponent;
