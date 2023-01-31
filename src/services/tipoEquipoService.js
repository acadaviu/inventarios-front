import { axiosInstance } from "../helpers/axios-config";

const getTiposEquipos = () => {
    return axiosInstance.get('tipo-equipo', {
        headers:{
            'Content-type': 'application/json'
        }
    })
}



export {
    getTiposEquipos
}