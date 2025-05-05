
import { Car } from "../../types/types";


export interface CartProduct extends Car {
    quantity: number
}

export interface CartState {
    carsList: Car[]
    loading: boolean
    cart: CartProduct[]
}

export enum CartActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    CLEAR_CART = 'CLEAR_CART',
    UPDATE_QUANTITY = 'UPDATE_QUANTITY',
    GET_DATA = 'GET_DATA',
    LOADING = 'LOADING'
}

export type CartAction = 
|{ type: CartActionTypes.ADD_ITEM, payload: Car}
|{ type: CartActionTypes.REMOVE_ITEM, payload: Car['_id']}
|{ type: CartActionTypes.CLEAR_CART}
|{ type: CartActionTypes.UPDATE_QUANTITY, payload: { _id: Car['_id'], quantity: number}}
|{ type: CartActionTypes.GET_DATA, payload: Car[]}
|{ type: CartActionTypes.LOADING, payload: boolean}

export const initialState: CartState = {
    cart: [],
    loading: false,
    carsList: []
}

export const carReducer = (state: CartState, action: CartAction): CartState => {
    switch(action.type){
        case CartActionTypes.ADD_ITEM: {
            const { cart } = state
            const newProduct = action.payload
            const { _id } = newProduct


            const existingItem = cart.find(item => item._id === _id)

            if(existingItem) {
                const updatedCart = cart.map(item => item._id === _id ? { ...item, quantity: item.quantity + 1 }: item)
                return {
                    ...state,
                    cart: updatedCart
                }
            } else {
                const updatedProduct: CartProduct = { ...newProduct, quantity: 1}
                const updatedCart = [...cart, updatedProduct ]

                return {
                    ...state,
                    cart: updatedCart
                }
            }
                
        }
        case CartActionTypes.REMOVE_ITEM: {
            return {
                ...state,
                cart: state.cart.filter(item => item._id !== action.payload)
            }
        }
        case CartActionTypes.CLEAR_CART: {
            return {
                ...state,
                cart: []
            }
        }
        case CartActionTypes.UPDATE_QUANTITY: {
            const { _id, quantity } = action.payload

            const updatedCart = state.cart.map(item => {
                if (item._id === _id) {
                    return {
                        ...item,
                        quantity: quantity
                    }

                } else {
                    return item
                }
            })
            return {
                ...state,
                cart: updatedCart
            }
        }
        case CartActionTypes.GET_DATA: {
            return {
                ...state,
                carsList: action.payload
            }
        }
        case CartActionTypes.LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default:
            return state
    }
}

