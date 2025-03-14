import { createContext, ReactNode, useContext, useEffect, useReducer } from "react"
import { useParams } from "react-router"
import { fetchSingleUser } from "../../api/carsAPI"
import { User } from "../../types/types"
import { initialState, SingleUserActionTypes, singleUserReducer } from "./singleUserReducer"

type UserContextProviderProps = {
    children: ReactNode
}

interface SingleUserContextType {
        user: User | null
        loading: boolean
}
    


export const SingleUserContext = createContext< SingleUserContextType | undefined>(undefined)

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {

    const { id } = useParams()
    const [state, dispatch] = useReducer(singleUserReducer, initialState)
    const { user, loading } = state
    console.log(user)


    useEffect(() => {
        const fetchUser = async() => {
            if(id) {
                dispatch({ type: SingleUserActionTypes.LOADING, payload: true})
                const fetchSingle = await fetchSingleUser(id)
                dispatch({ type: SingleUserActionTypes.GET_SINGLE, payload: fetchSingle})
                dispatch({ type: SingleUserActionTypes.LOADING, payload: false})
            }
            
        }
        fetchUser()
    }, [id])

    if(!id) {
        return <p>not found</p>
    }

    const ctxValue: SingleUserContextType = {
        user,
        loading
    }

    

    return (
        <SingleUserContext.Provider value={ctxValue}>
            {children}
        </SingleUserContext.Provider>
    )
}

export const useSingleUser = () => {
    const ctx = useContext(SingleUserContext)

    if(!ctx) {
        throw new Error('useSingleCar cannot be used outside the CarsContextProvider')
    }
    return ctx
}

