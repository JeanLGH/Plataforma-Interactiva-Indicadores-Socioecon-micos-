import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const ColombiaMap = () => {
  // Datos demográficos (solo como ejemplo)
  const data = {
    "Bogotá D.C.": { total: 8000000, male: 4000000, female: 4000000 },
    "Cali.": { total: 100000, male: 6000000, female: 4000000 },
    // ... otros departamentos
  };

  // GeoJSON para los límites de los departamentos
  const geoJSONData = {}; // Incluir tus datos GeoJSON aquí

  return (
    <MapContainer center={[4.5709, -74.2973]} zoom={6} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON
        data={geoJSONData}
        style={(feature) => ({
          fillColor: 'blue',  // Puedes cambiar esto según tus necesidades
          fillOpacity: 0.7,
          color: 'white',
          weight: 1,
        })}
        onEachFeature={(feature, layer) => {
          const departmentName = feature.properties.name;
          const populationData = data[departmentName];
          const popupContent = `
            <div>
              <h3>${departmentName}</h3>
              <p>Población total: ${populationData.total}</p>
              <p>Población masculina: ${populationData.male}</p>
              <p>Población femenina: ${populationData.female}</p>
            </div>
          `;
          layer.bindPopup(popupContent);
        }}
      />
    </MapContainer>
  );
};

export default ColombiaMap;