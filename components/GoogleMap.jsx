import React from 'react';
import { GoogleMap, useLoadScript, MarkerClusterer, Marker, Circle } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100vh',
};

const center = { lat: 43.238949, lng: 76.889709 };

const locations = [
    { lat: 43.250194, lng: 76.933777, name: "Shop 1" },
    { lat: 43.250274, lng: 76.933729, name: "Shop 2" },
];

function GoogleMapComponent() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (loadError) return <div>Error loading Google Maps</div>;
    if (!isLoaded) return <div>Loading Google Maps...</div>;

    return (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <MarkerClusterer>
                {(clusterer) =>
                    locations.map((location, index) => (
                        <Marker
                            key={index}
                            position={location}
                            clusterer={clusterer}
                            onClick={() => {
                                // Handle click event, e.g., navigate to the shop detail page
                            }}
                        />
                    ))
                }
            </MarkerClusterer>
            {locations.map((location, index) => (
                <Circle
                    key={index}
                    center={location}
                    radius={100}
                    options={{
                        strokeColor: "#FF0000",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#FF0000",
                        fillOpacity: 0.35,
                    }}
                    onClick={() => {
                        // Handle click event, e.g., navigate to the shop detail page
                    }}
                />
            ))}
        </GoogleMap>
    );
}

export default React.memo(GoogleMapComponent);
