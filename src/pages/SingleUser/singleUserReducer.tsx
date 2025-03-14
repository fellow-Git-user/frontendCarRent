
import { User } from "../../types/types";



export interface UserState {
    user: User | null
    loading: boolean
}

export enum SingleUserActionTypes {
    GET_SINGLE = 'GET_SINGLE',
    LOADING = 'LOADING'
}

export type SingleUserAction = 
|{ type: SingleUserActionTypes.GET_SINGLE, payload: User}
|{ type: SingleUserActionTypes.LOADING, payload: boolean}

export const initialState: UserState = {
    user: null,
    loading: false,
    
}

export const singleUserReducer = (state: UserState, action: SingleUserAction): UserState => {
    switch(action.type){
        
        case SingleUserActionTypes.GET_SINGLE: {
            return {
                ...state,
                user: action.payload
            }
        }
        case SingleUserActionTypes.LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default:
            return state
    }
}

