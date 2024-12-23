import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import favicon from '../../assets/favicon.png';
import { locations } from './location';

// Styled component para o mapa
const StyledMapContainer = styled.div`
  height: 500px;
  width: 500px;

  @media (max-width: 768px) {
    height: 300px; /* Altura menor para dispositivos móveis */
    width: 100%; /* Ajusta a largura para caber na tela */
  }
`;

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMap = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      if (!leafletMap.current) {
        leafletMap.current = L.map(mapRef.current).setView([-27.590746, -48.554424], 7);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(leafletMap.current);
      }

      const customIcon = L.icon({
        iconUrl: favicon,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      locations.forEach(location => {
        if (leafletMap.current) {
          L.marker([location.lat, location.lng], { icon: customIcon })
            .addTo(leafletMap.current)
            .bindPopup(`
              <b>${location.name}</b><br />
              Endereço: ${location.address}<br />
              Cultos: ${location.cults}
            `);
        }
      });
    }

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  return <StyledMapContainer ref={mapRef} />;
};

export default MapComponent;
