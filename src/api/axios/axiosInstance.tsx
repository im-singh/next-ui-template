import axios, {
    AxiosInstance,
    InternalAxiosRequestConfig,
    AxiosResponse,
    AxiosError,
} from 'axios';
import withAccessToken from './withAccessToken';

const instance: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(
    (internalAxiosRequestConfig: InternalAxiosRequestConfig) => {
        if (
            withAccessToken(
                internalAxiosRequestConfig.url || '',
                internalAxiosRequestConfig.method || ''
            )
        ) {
            // Add access token to request headers
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                internalAxiosRequestConfig.headers.set(
                    'Authorization',
                    `Bearer ${accessToken}`
                );
            }
        }

        return internalAxiosRequestConfig;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        // Handle successful responses
        return response;
    },
    (error: AxiosError) => {
        // Handle error responses
        console.log('#API error: ', error);
        return Promise.reject(error);
    }
);

export default instance;
