import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import PolygonComponent from './PolygonComponent.jsx';
import { statesData } from '../../files/data';
import 'leaflet/dist/leaflet.css';
import '../../styles/MapStyles.css';


export default function MapComponent({ center, mousePosition, setMousePosition }) {
  return (
    <div className="map-container">
      <div style={{ width: '800px', height: '700px' }}>
        <MapContainer
          center={center}
          zoom={8}
          style={{ width: '100%', height: '100%' }}
          onMouseMove={(e) => setMousePosition(e.latlng)}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/basic/256/%7Bz%7D/%7Bx%7D/%7By%7D.png?key=bPH7ayo05grPl639LD7n"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          {statesData.features.map((state) => (
            <PolygonComponent
              key={state.id}
              state={state}
              mousePosition={mousePosition}
              setMousePosition={setMousePosition}
            />
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
