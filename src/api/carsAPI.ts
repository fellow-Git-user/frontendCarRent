import axios from "axios"
import { API_URL } from "../utils/API_URL"
import { Car, User } from "../types/types"

export const fetchCars = async (): Promise<Car[]> => {
    try{

        const { data } = await axios(`${API_URL}/cars`)
        
        
        return data
    } catch {
        throw new Error ('smth went wrong')
    }
}

export const fetchSingleCar = async (id: string): Promise<Car> => {
    try{
        const { data } = await axios(`${API_URL}/cars/${id}`)
        return data

    } catch{
        throw new Error ('smth went wrong')
    }

}

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const { data } = await axios(`${API_URL}/users`)
        return data
    } catch {
        throw new Error ('smth went wrong')
    }
}

export const fetchSingleUser = async (id: string): Promise<User> => {
    try {
        const { data } = await axios(`${API_URL}/users/${id}`)
        return data
    } catch {
        throw new Error ('smth went wrong')
    }
}


