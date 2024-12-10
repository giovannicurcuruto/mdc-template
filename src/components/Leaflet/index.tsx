import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import favicon from '../../assets/favicon.png';
import { locations } from './location';

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMap = useRef<L.Map | null>(null);  // Ajuste do tipo

  

  useEffect(() => {
    if (mapRef.current) {
      // Se leafletMap.current não for inicializado, cria o mapa
      if (!leafletMap.current) {
        leafletMap.current = L.map(mapRef.current).setView([-27.590746, -48.554424], 7); // Centraliza o mapa em Florianópolis

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(leafletMap.current);
      }

      const customIcon = L.icon({
        iconUrl: favicon, // URL para a imagem do ícone
        iconSize: [32, 32], // Tamanho do ícone
        iconAnchor: [16, 32], // Ponto do ícone que ficará ancorado no local do marcador
        popupAnchor: [0, -32], // Ajusta o ponto de ancoragem do popup
      });


      // Adiciona os marcadores para cada localização
      locations.forEach(location => {
        if (leafletMap.current) {
          L.marker([location.lat, location.lng], {icon: customIcon})
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

  return <div ref={mapRef} style={{ height: '500px', width: '500px' }} />;
};

export default MapComponent;
