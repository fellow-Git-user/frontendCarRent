import { createContext, ReactNode, useContext, useEffect, useReducer } from "react"
import { User } from "../../types/types"
import { allUsersReducer, initialState, UsersActionTypes } from "./allUsersReducer"
import { fetchUsers } from "../../api/carsAPI"


type UsersContextProviderProps = {
    children: ReactNode
}

interface UsersContextType {
        usersList: User[]
        loading: boolean
}


export const UsersContext = createContext<UsersContextType | undefined>(undefined)

export const UsersContextProvider: React.FC<UsersContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(allUsersReducer, initialState)
    const { usersList, loading } = state


    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: UsersActionTypes.LOADING, payload: true})
            const usersData = await fetchUsers()
            dispatch({ type: UsersActionTypes.GET_ALL_USERS, payload: usersData})
            dispatch({ type: UsersActionTypes.LOADING, payload: false})
        }
        
        fetchData()
    }, [])

    const contextValue: UsersContextType = {
        usersList,
        loading
    }

    
    return (
        <UsersContext.Provider value={contextValue}>
            {children}
        </UsersContext.Provider>
    )

}

export const useAllUsers = () => {
    const ctx = useContext(UsersContext)

    if(!ctx) {
        throw new Error('useAllUsers cannot be used outside the CarsContextProvider')

    }
    return ctx
}