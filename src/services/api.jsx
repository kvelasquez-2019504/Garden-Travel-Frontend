import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/GardenTravel/v1',
    timeout: 5000
});

apiClient.interceptors.request.use(
    (config) => {
        const usuario = localStorage.getItem('usuario');

        if (usuario) {
            const token = JSON.parse(usuario).token;
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

export const addHotel = async (data) => {
    try {
        return await apiClient.post('/hoteles/agregar', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const updateUser = async (data) => {
    try {
        const response = await apiClient.put(`/usuario/update`, data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return {
            error: true,
            message: error.message
        };
    }
};

export const getUsuario = async (token) => {
    try {
        const response = await apiClient.get('/usuario/getOwnUser', {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (e) {
        return {
            error: true,
            message: e.message
        };
    }
};