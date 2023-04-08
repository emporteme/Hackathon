import React from "react";
import dynamic from "next/dynamic";
import MainLayout from "@/components/MainLayout";
import "leaflet/dist/leaflet.css";
import shopData from "../../data/shop.json";

const LeafletMap = dynamic(
    () => import("@/components/LeafletMap"),
    { ssr: false } // disable server-side rendering
);

function Map() {
    return (
        <MainLayout>
            <LeafletMap shopLocations={shopData.shops} />
        </MainLayout>
    );
}

export default Map;
