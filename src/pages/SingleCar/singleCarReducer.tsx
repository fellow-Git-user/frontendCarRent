
import { Car } from "../../types/types";


export interface CarState {
    car: Car | null
    loading: boolean
}

export enum CarActionTypes {
    GET_SINGLE = 'GET_SINGLE',
    LOADING = 'LOADING'
}

export type CarAction = 
|{ type: CarActionTypes.GET_SINGLE, payload: Car}
|{ type: CarActionTypes.LOADING, payload: boolean}

export const initialState: CarState = {
    car: null,
    loading: false,
    
}

export const singleCarReducer = (state: CarState, action: CarAction): CarState => {
    switch(action.type){
        
        case CarActionTypes.GET_SINGLE: {
            return {
                ...state,
                car: action.payload
            }
        }
        case CarActionTypes.LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default:
            return state
    }
}

