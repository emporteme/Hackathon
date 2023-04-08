import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import L from "leaflet";
import styles from "../styles/LeafletMap.module.scss";
import { useRouter } from "next/router";

function LeafletMap({ shopLocations }) {
  const router = useRouter();
  const [shops, setShops] = useState(shopLocations);
  const [groupedLocations, setGroupedLocations] = useState({});
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [zoom, setZoom] = useState(13);
  const nuLocation = { lat: 51.090961, lng: 71.428154 };

  useEffect(() => {
    setShops(shopLocations);
  }, [shopLocations]);

  useEffect(() => {
    const groups = {};

    shops.forEach((location) => {
      let group = null;
      Object.values(groups).forEach((existingGroup) => {
        const distance = locationDistance(existingGroup[0], location);
        if (distance < 200) {
          group = existingGroup;
        }
      });
      if (group) {
        group.push(location);
      } else {
        groups[location.lat + "_" + location.lng] = [location];
      }
    });

    setGroupedLocations(groups);
  }, [shops]);

  function locationDistance(location1, location2) {
    const latLng1 = L.latLng(location1.lat, location1.lng);
    const latLng2 = L.latLng(location2.lat, location2.lng);
    return latLng1.distanceTo(latLng2);
  }

  const circles = Object.values(groupedLocations).map((locations, index) => {
    const count = locations.length;
    const latLng = [locations[0].lat, locations[0].lng];
    const radius = 5 + count * 5; // adjusted radius

    const handleClick = () => {
      if (count === 1) {
        // Navigate to the shop detail page if there's only one shop in the circle
        router.push(`/shop/${locations[0].id}`);
      } else if (selectedGroup === index) {
        setZoom(16);
        setSelectedGroup(null);
      } else {
        setZoom(13);
        setSelectedGroup(index);
      }
    };

    return (
      <CircleMarker
        key={`${latLng[0]}_${latLng[1]}`}
        center={latLng}
        radius={radius}
        pathOptions={{
          color: "red",
          fillColor: "red",
          fillOpacity: selectedGroup === index ? 1 : 0.5,
        }}
        eventHandlers={{
          click: handleClick,
        }}
      >
        {count > 1 && <span className={styles.circleText}>{count}</span>}
      </CircleMarker>
    );
  });

  return (
    <MapContainer center={[nuLocation.lat, nuLocation.lng]} zoom={zoom} className={styles.mapContainer}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {circles}
    </MapContainer>
  );
}

export default LeafletMap;
