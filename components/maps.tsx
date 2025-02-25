"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [isClient, setIsClient] = useState(false); // State untuk mengecek apakah di client-side
  const [customIcon, setCustomIcon] = useState<L.Icon | null>(null); // State untuk custom icon

  const monasPosition: L.LatLngExpression = [-6.227611, 106.827147];

  useEffect(() => {
    // Pastikan kode ini hanya berjalan di client-side
    setIsClient(true);

    // Load custom icon
    setCustomIcon(
      L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })
    );
  }, []);

  // Jika belum di client-side atau customIcon belum di-load, tampilkan loading
  if (!isClient || !customIcon) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="w-full h-[500px] rounded-xl">
      <MapContainer
        center={monasPosition}
        zoom={16}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={monasPosition} icon={customIcon}>
          <Popup>JW Marriott Hotel, Jakarta</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
