
import React, { useState } from "react";

function MapSearchBar({ onSearch }) {
    const [search, setSearch] = useState("");

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(search);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleInputChange}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default MapSearchBar;