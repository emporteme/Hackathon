import MainLayout from "@/components/MainLayout";
import ApiClient from "@/api/ApiClient"; // Import ApiClient
import SearchBar from "@/components/SearchBar";

// Fetch data from API using getServerSideProps
export async function getServerSideProps() {
	try {
		const response = await ApiClient.get("/shop"); // Replace with your API endpoint
		const shop = response.data;

		return {
			props: {
				shop,
			},
		};
	} catch (error) {
		console.error("Error fetching shop data:", error);
		return {
			notFound: true,
		};
	}
}


export default function Shop({ shop }) {
	return (
		<MainLayout>
			<SearchBar shops={shop} />
		</MainLayout>
	)
}