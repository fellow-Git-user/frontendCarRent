import { createContext, useContext } from "react";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token')

    const loginUser = (token) => {
        localStorage.setItem('token', token)
    }

    const logoutUser = (token) => {
        localStorage.removeItem('token')
    
    }

    return (
        <AuthContext.Provider value={{ token, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error('useAuth is being used outside of AuthProvider')
    }

    return context
}