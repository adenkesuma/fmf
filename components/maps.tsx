"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

let L: typeof import("leaflet"); // Deklarasi tipe untuk Leaflet

const Maps = () => {
  const [customIcon, setCustomIcon] = useState<L.Icon | null>(null); // Berikan tipe untuk customIcon
  const monasPosition = [-6.227611, 106.827147];


  useEffect(() => {
    if (typeof window === "undefined") return;
    (async () => {
      const leaflet = await import("leaflet");
      L = leaflet.default;

      setCustomIcon(
        new L.Icon({
          iconUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      );
    })();
  }, []);

  if (!customIcon) return <div>Loading map...</div>;

  return (
    <div className="w-full h-[500px] rounded-xl">
      <MapContainer
        center={L.latLng(monasPosition[0], monasPosition[1])}
        zoom={16}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={L.latLng(monasPosition[0], monasPosition[1])}
          icon={customIcon}
        >
          <Popup>JW Marriot Hotel, Jakarta</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Maps), { ssr: false });
