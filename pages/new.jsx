import MainLayout from "@/components/MainLayout";
import { useState, useEffect } from 'react';

function RealPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.9f5908a9.nip.io/shop');
            const responseData = await response.json();
            setData(responseData);
        };
        fetchData();
    }, []);

    return (
        <MainLayout>
            {data ? (
                <div>
                    <h1>Posts</h1>
                    <ul>
                        {data.map(post => (
                            <li key={post.id}>
                                <h2>{post.name}</h2>
                                <p>{post.id}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </MainLayout>
    );
}

export default RealPage;
