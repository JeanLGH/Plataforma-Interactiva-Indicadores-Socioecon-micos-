import React from 'react';
import { Polygon, Popup } from 'react-leaflet';
import '../../styles/PopupStyles.css';

const PolygonComponent = ({ state, mousePosition, setMousePosition }) => {
  const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
  const stateName = state.properties.personas;

  const mapPolygonColorToDensity = (density) => {
    return density > 3023
      ? '#a50f15'
      : density > 676
      ? '#de2d26'
      : density > 428
      ? '#fb6a4a'
      : density > 236
      ? '#fc9272'
      : density > 23
      ? '#fcbba1'
      : '#fee5d9';
  };

  return (
    <Polygon
      key={state.id}
      pathOptions={{
        fillColor: mapPolygonColorToDensity(stateName),
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
            fillColor: mapPolygonColorToDensity(stateName),
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
            fillColor: mapPolygonColorToDensity(stateName),
          });
          setMousePosition(null);
        },
      }}
    >
      {mousePosition && (
        <Popup className="custom-popup">
          <div className="popup-header">
            <strong>{state.properties.name}</strong>
          </div>
          <div>Population: {stateName}</div>
        </Popup>
      )}
    </Polygon>
  );
};

export default PolygonComponent;