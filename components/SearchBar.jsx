/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/searchBar.module.scss";

export default function SearchBar({ shops }) {
    const [search, setSearch] = useState("");

    const filteredShops = shops.filter((shop) => {
        return (
            shop.name.toLowerCase().includes(search.toLowerCase()) ||
            shop.description.toLowerCase().includes(search.toLowerCase())
            // Add any other search criteria if needed
        );
    });

    return (
        <>
            <div className={styles.unik}>
                <div className={styles.search}>
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search here..."
                    />
                </div>
                <div className={styles.list}>
                    {filteredShops.map((shop) => {
                        return (
                            <Link href={`/shop/${shop.id}`} key={shop.id}>
                                <div className={styles["best-sellers-item"]}>
                                    <img src='/team1.jpg' alt={shop.name} />
                                    <div className={styles["best-sellers-item-details"]}>
                                        <h3>{shop.name}</h3>
                                        <p>{shop.description}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
