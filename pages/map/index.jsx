import React from "react";
import dynamic from "next/dynamic";
import MainLayout from "@/components/MainLayout";
import ApiClient from "@/api/ApiClient"; // Import ApiClient
import "leaflet/dist/leaflet.css";

const LeafletMap = dynamic(
    () => import("@/components/LeafletMap"),
    { ssr: false } // disable server-side rendering
);

function Map({ shopLocations }) {
    return (
        <MainLayout>
            <LeafletMap shopLocations={shopLocations} />
        </MainLayout>
    );
}

export default Map;

export async function getServerSideProps() {
    try {
        const response = await ApiClient.get("/shop"); // Replace with your API endpoint
        const shopLocations = response.data.map(shop => ({
            id: shop.id,
            lat: shop.latitude,
            lng: shop.longitude,
        }));

        return {
            props: {
                shopLocations,
            },
        };
    } catch (error) {
        console.error("Error fetching shop data:", error);
        return {
            notFound: true,
        };
    }
}
