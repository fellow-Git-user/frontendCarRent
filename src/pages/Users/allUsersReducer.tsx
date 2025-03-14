
import { User } from "../../types/types";


export interface UserState {
    usersList: User[]
    loading: boolean
}

export enum UsersActionTypes {
    GET_ALL_USERS = 'GET_ALL_USERS',
    LOADING = 'LOADING'
}

export type UsersAction = 
|{ type: UsersActionTypes.GET_ALL_USERS, payload: User[]}
|{ type: UsersActionTypes.LOADING, payload: boolean}

export const initialState: UserState = {
    usersList: [],
    loading: false
    
}

export const allUsersReducer = (state: UserState, action: UsersAction): UserState => {
    switch(action.type){
        
        case UsersActionTypes.GET_ALL_USERS: {
            return {
                ...state,
                usersList: action.payload
            }
        }
        case UsersActionTypes.LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default:
            return state
    }
}


