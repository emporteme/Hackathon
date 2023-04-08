import { useRouter } from "next/router";
import MainLayout from "@/components/MainLayout";

function ShopDetail() {
    const router = useRouter();
    const { id } = router.query;

    // Fetch shop details using the id from the API or JSON data
    // Display the fetched shop details on this page

    return (
        <MainLayout>
            <h1>Shop Detail Page for ID: {id}</h1>
            {/* Render the shop details here */}
        </MainLayout>
    );
}

export default ShopDetail;