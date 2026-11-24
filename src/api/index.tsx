import Config from "react-native-config";

const BASE_URL = Config.BASE_API_URL || '';

export const fetchApi = async (endpoint = '') => {
    if (!endpoint) throw new Error('Endpoint string is missing!')

    const data = await fetch(`${BASE_URL}${endpoint}`);

    if (!data.ok) {
        throw new Error('Something went wrong!')
    }

    if (data) {
        return data.json();
    }

    return null;
}