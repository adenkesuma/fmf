"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Menambahkan icon marker agar sesuai dengan peta Leaflet
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Maps = () => {
  const monasPosition = [-6.175392, 106.827153]; // Koordinat Monas Jakarta

  return (
    <div className="w-full h-[500px] rounded-xl">
      <MapContainer center={L.latLng(monasPosition[0], monasPosition[1])} zoom={16} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={monasPosition} icon={customIcon}>
          <Popup>Monumen Nasional (Monas), Jakarta</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
