import { axiosInstance } from "../helpers/axios-config";

const getUsuarios = () => {
    return axiosInstance.get('usuario', {
        headers:{
            'Content-type': 'application/json'
        }
    })
}



export {
    getUsuarios
}