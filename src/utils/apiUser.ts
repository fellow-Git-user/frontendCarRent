import axios from "axios";
import { API_URL } from "./API_URL";

const apiUser = axios.create({
    baseURL : API_URL

})

apiUser.interceptors.request.use(config => {
    const token = localStorage.getItem('token')

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default apiUser