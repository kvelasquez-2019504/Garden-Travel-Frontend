import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/GardenTravel/v1',
    timeout: 5000
});

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user');

        if (userDetails) {
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (e) => {
        return Promise.reject(e)
    }
);

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getHoteles = async () => {
    try {
        return await apiClient.get('/hoteles/lista');
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const getServices = async () => {
    try {
        return await apiClient.get('/servicio');
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}


export const addService = async (nombre, precio) => {
    try {
        return await apiClient.post('/servicio/create', { nombre, precio });
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const deleteService = async (id) => {
    try {
        return await apiClient.delete('/servicio/eliminar', { data: { id } });
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};