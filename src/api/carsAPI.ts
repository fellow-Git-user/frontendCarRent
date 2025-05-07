
import { Car, User } from "../types/types"
import apiUser from "../utils/apiUser"


export const fetchCars = async (): Promise<Car[]> => {
    try{
        const { data } = await apiUser.get('/cars')
           
        return data
    } catch {
        throw new Error ('smth went wrong')
    }
}

export const fetchSingleCar = async (id: string): Promise<Car> => {
    try{
        const { data } = await apiUser.get(`/cars/${id}`)
        
        return data
    } catch{
        throw new Error ('smth went wrong')
    }

}

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const { data } = await apiUser.get(`/users`)
        return data
    } catch {
        throw new Error ('smth went wrong')
    }
}

export const fetchSingleUser = async (id: string): Promise<User> => {
    try {
        const { data } = await apiUser.get(`/users/${id}`)
        
        console.log("🚀 ~ fetchSingleUser ~ data:", data)
        return data
    } catch {
        throw new Error ('smth went wrong')
    }
}

export const createUser = async (newUserData: User): Promise<User> => {
    try {
        const { data } = await apiUser.post(`/users/create`, newUserData)
        return data
    } catch {
        throw new Error ('smth went wrong')
    }
}

export const updateUser = async (updatedUserData: User): Promise<User> => {
    try {
        const { data } = await apiUser.put(`/users/${updatedUserData.id}`, updatedUserData)
        return data
    } catch {
        throw new Error ('smth went wrong')
    }
}

export const deleteUser = async (id: string): Promise<void> => {
    try {
        await apiUser.delete(`/users/${id}`)
        
    } catch {
        throw new Error ('smth went wrong')
    }
}
