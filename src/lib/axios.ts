import axios from 'axios';
import { PUBLIC_API_URL } from '$env/static/public';
const useAxios = axios.create({
	baseURL: PUBLIC_API_URL
});

export { useAxios };
