import axios from 'axios';

const apiClient = axios.create({
    baseURL:'http://127.0.0.1:8080/GardenTravel/v1',
    timeout: 1000,
})

export const agregarTipoHabitacion = async(data)=>{
    try {
        await apiClient.post ('/tipoHabitacion/agregar',data);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const listarTipoHabitacion = async()=>{
    try {
        return await apiClient.get('/tipoHabitacion/lista');
    } catch (exception) {
        return {error: true, 
            exception
        }
    }
}

export const editarTipoHabitacion = async(data)=>{
    try {
        await apiClient.put('/tipoHabitacion/actualizar',data);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const eliminarTipoHabitacion = async(id)=>{
    try {
        await apiClient.delete('/tipoHabitacion/eliminar',{ data: { id } });
    }catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const listarPaqueteServicios = async()=>{
    try {
        return await apiClient.get('/paqueteServicio/listar');
    } catch (exception) {
        return {error: true, 
            exception
        }
    }
}