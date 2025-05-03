import axios from "axios";
import { API_URL } from "./API_URL";

const apiClient = axios.create({
    baseURL : API_URL

})

apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token')

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default apiClient