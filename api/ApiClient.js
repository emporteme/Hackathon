import axios from "axios";

const ApiClient = axios.create({
    baseURL: "https://api.9f5908a9.nip.io", // Replace with your API's base URL
    // You can also set other default configurations here, like headers, timeouts, etc.
    headers: {
        'Content-Type': 'application/json',
        // Add any other custom headers you need
    },
});

export default ApiClient;
