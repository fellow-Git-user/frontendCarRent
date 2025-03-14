import { createContext, ReactNode, useContext, useEffect, useReducer } from "react"
import { useParams } from "react-router"
import { fetchSingleCar } from "../../api/carsAPI"
// import { CarActionTypes, initialState, singleCarReducer } from "./SingleCarReducer"
import { Car } from "../../types/types"
import { CarActionTypes, initialState, singleCarReducer } from "./singleCarReducer"

type CarContextProviderProps = {
    children: ReactNode
}

interface SingleCarContextType {
        car: Car | null
        loading: boolean
}
    


export const SingleCarContext = createContext< SingleCarContextType | undefined>(undefined)

export const CarContextProvider: React.FC<CarContextProviderProps> = ({ children }) => {

    const { id } = useParams()
    const [state, dispatch] = useReducer(singleCarReducer, initialState)
    const { car, loading } = state
    console.log(car)


    useEffect(() => {
        const fetchCar = async() => {
            if(id) {
                dispatch({ type: CarActionTypes.LOADING, payload: true})
                const fetchSingle = await fetchSingleCar(id)
                dispatch({ type: CarActionTypes.GET_SINGLE, payload: fetchSingle})
                dispatch({ type: CarActionTypes.LOADING, payload: false})
            }
            
        }
        fetchCar()
    }, [id])

    if(!id) {
        return <p>not found</p>
    }

    const ctxValue: SingleCarContextType = {
        car,
        loading
    }

    

    return (
        <SingleCarContext.Provider value={ctxValue}>
            {children}
        </SingleCarContext.Provider>
    )
}

export const useSingleCar = () => {
    const ctx = useContext(SingleCarContext)

    if(!ctx) {
        throw new Error('useSingleCar cannot be used outside the CarsContextProvider')
    }
    return ctx
}

