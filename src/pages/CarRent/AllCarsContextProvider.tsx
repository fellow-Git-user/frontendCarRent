import { createContext, ReactNode, useContext, useEffect, useReducer, useState, } from "react"
import { Car } from "../../types/types"

import { carReducer, CartActionTypes, CartState, initialState } from "./allCarsReducer"
import { fetchCars } from "../../api/carsAPI"

type CarsContextProviderProps = {
    children: ReactNode
}

interface CarsContextType extends CartState {
    addProduct: (product: Car) => void
    removeProduct: (id: Car['id']) => void
    clearCart: () => void
    updateQuantity: (id: Car['id'], quantity: number) => void
}



export const CarsContext = createContext<CarsContextType | undefined>(undefined)

export const CarsContextProvider: React.FC<CarsContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(carReducer, initialState)
    const { cart, carsList, loading} = state

    const [ error, setError ] = useState('')


    

    useEffect(() => {
        const fetchData = async() => {
            try {
                dispatch({ type: CartActionTypes.LOADING, payload: true})
                const carsData = await fetchCars()
                dispatch({ type: CartActionTypes.GET_DATA, payload: carsData })
                dispatch({ type: CartActionTypes.LOADING, payload: false})
            } catch (error: any) {
                setError(error)
                console.log('Failed to fetch cars', error);
            }
            
        }
        fetchData()
    }, [])


    const addProduct = (product: Car) => dispatch({ type: CartActionTypes.ADD_ITEM, payload: product })
    const removeProduct = (id: Car['id']) => dispatch({ type: CartActionTypes.REMOVE_ITEM, payload: id })
    const clearCart = () => dispatch({ type: CartActionTypes.CLEAR_CART })
    const updateQuantity = (id: Car['id'], quantity: number) => dispatch({ type: CartActionTypes.UPDATE_QUANTITY, payload: { id, quantity }})

    const ctxValue: CarsContextType = {
        cart,
        loading,
        carsList,
        addProduct,
        removeProduct,
        clearCart,
        updateQuantity
        }
    

    return (
        <CarsContext.Provider value={ctxValue}>
            {children}

        </CarsContext.Provider>
    )
}

export const useCar = () => {
    const ctx = useContext(CarsContext)

    if (!ctx) {
        throw new Error('useCar cannot be used outside the CarsContextProvider')
    }
    return ctx
}