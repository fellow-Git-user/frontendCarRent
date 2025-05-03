import axios from "axios"
import { API_URL } from "../utils/API_URL"
import { Car, User } from "../types/types"
import apiClient from "../utils/apiClient"


export const fetchCars = async (): Promise<Car[]> => {
    try{
        const { data } = await apiClient.get('/cars')
           
        return data
    } catch {
        throw new Error ('smth went wrong')
    }
}

export const fetchSingleCar = async (id: string): Promise<Car> => {
    try{
        const { data } = await axios(`${API_URL}/cars/${id}`)
        console.log("🚀 ~ fetchSingleCar ~ data:", data)
        
        return data
    } catch{
        throw new Error ('smth went wrong')
    }

}

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const { data } = await axios(`${API_URL}/users`)
        console.log("🚀 ~ fetchUsers ~ data:", data)
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

export const createUser = async (newUserData: User): Promise<User> => {
    try {
        const { data } = await axios.post(`${API_URL}/users`, newUserData)
        return data
    } catch {
        throw new Error ('smth went wrong')
    }
}

export const updateUser = async (updatedUserData: User): Promise<User> => {
    try {
        const { data } = await axios.put(`${API_URL}/users/${updatedUserData.id}`, updatedUserData)
        return data
    } catch {
        throw new Error ('smth went wrong')
    }
}

export const deleteUser = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/users/${id}`)
        
    } catch {
        throw new Error ('smth went wrong')
    }
}
