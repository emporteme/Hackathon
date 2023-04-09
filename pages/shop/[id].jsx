import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import ApiClient from "@/api/ApiClient";

function ShopDetail() {
    const router = useRouter();
    const { id } = router.query;

    const [shop, setShop] = useState(null);

    useEffect(() => {
        // Make an API request to fetch the shop data using the ID from the URL
        ApiClient.get(`/shop/${id}`).then((response) => {
            setShop(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [id]);

    return (
        <MainLayout>
            {shop ? (
                <>
                    <h1>{shop.name}</h1>
                    <p>{shop.description}</p>
                    <h2>Products:</h2>
                    <ul>
                        {shop.products.map((product) => (
                            <li key={product.id}>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </MainLayout>
    );
}

export default ShopDetail;
