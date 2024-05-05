import React, { useState, useEffect } from 'react';
import { Polygon, Popup } from 'react-leaflet';
import '../../styles/PopupStyles.css';

const PolygonComponent = ({ state, mousePosition, setMousePosition }) => {
  const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
  const stateName = state.properties.text;
  const statePersonas = state.properties.personas;
  const [totalPoblacion, setTotalPoblacion] = useState(null); // Estado para almacenar el total de población
  const [maxPoblacion, setMaxPoblacion] = useState(0); // Estado para almacenar el valor máximo de población

  useEffect(() => {
    const fetchTotalPoblacion = async () => {
      try {
        const response = await fetch('http://localhost:3001/datos2022Poblacion');
        if (!response.ok) {
          throw new Error('Error al obtener los datos del servidor');
        }
        const data = await response.json();
        setTotalPoblacion(data);
        // Calcular el valor máximo de población
        const maxPoblacionValue = Math.max(...data.map(item => item.Poblacion_DANE));
        setMaxPoblacion(maxPoblacionValue);
      } catch (error) {
        console.error('Error al obtener el total de población:', error);
      }
    };
    fetchTotalPoblacion();
  }, []);

  const mapPolygonColorToDensity = (density) => {
    // Calcular el porcentaje de población con respecto al máximo
    const percentage = (density / maxPoblacion) * 100;
    console.log(percentage);
    // Asignar el color en función del porcentaje
    return percentage > 80
      ? '#97060C'
      : percentage > 60
      ? '#a50f15'
      : percentage > 40
      ? '#C4282E'
      : percentage > 20
      ? '#DF4047'
      : percentage > 10
      ? '#FCB29C'
      : '#FFDBD1';
  };

  // Función para encontrar el valor de población correspondiente al nombre del municipio
  // Función para normalizar y comparar nombres de municipios
  const normalizeAndCompare = (name1, name2) => {
    // Convertir ambos nombres a minúsculas y quitar acentos
    const normalizedName1 = name1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedName2 = name2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
    // Comparar los nombres normalizados
    if (normalizedName1 === normalizedName2) {
      return true; // Si los nombres normalizados son iguales, son considerados iguales
    }
  
    // Separar los nombres en palabras
    const words1 = normalizedName1.split(/\s+/);
    const words2 = normalizedName2.split(/\s+/);
  
    // Eliminar términos adicionales como "de" o "del"
    const cleanedWords1 = words1.filter(word => !["de", "del","De", "Del"].includes(word));
    const cleanedWords2 = words2.filter(word => !["de", "del","De", "Del"].includes(word));
  
    // Comparar los nombres normalizados y limpios
    return cleanedWords1.join(" ") === cleanedWords2.join(" ");
  };
  

// Función para encontrar el valor de población correspondiente al nombre del municipio
const findPopulationByMunicipality = (municipalityName) => {
  if (totalPoblacion) {
    const municipalityData = totalPoblacion.find((item) => normalizeAndCompare(item.MunicipioAS, municipalityName));
    if (municipalityData) {
      return municipalityData.Poblacion_DANE;
    }
  }
  return null;
};

  return (
    <Polygon
      key={state.id}
      pathOptions={{
        fillColor: mapPolygonColorToDensity(findPopulationByMunicipality(stateName)),
        fillOpacity: 0.7,
        weight: 2,
        opacity: 1,
        dashArray: 3,
        color: 'white',
      }}
      positions={coordinates}
      eventHandlers={{
        mouseover: (e) => {
          const layer = e.target;
          layer.setStyle({
            dashArray: '',
            fillColor: mapPolygonColorToDensity(findPopulationByMunicipality(stateName)),
            fillOpacity: 0.5,
            weight: 2,
            opacity: 1,
            color: 'white',
          });
          const { lat, lng } = e.latlng;
          setMousePosition({ lat, lng });
        },
        mouseout: (e) => {
          const layer = e.target;
          layer.setStyle({
            fillOpacity: 0.7,
            weight: 2,
            dashArray: '3',
            color: 'white',
            fillColor: mapPolygonColorToDensity(findPopulationByMunicipality(stateName)),
          });
          setMousePosition(null);
        },
      }}
    >
      {mousePosition && (
        <Popup className="custom-popup">
          <div className="popup-header">
            <strong>{stateName}</strong>
          </div>
          <div>Personas: {findPopulationByMunicipality(stateName)}</div>
        </Popup>
      )}
    </Polygon>
  );
};

export default PolygonComponent;
