import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null)
    // const [ token, setToken ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            try {
                const decoded = jwtDecode(token)

                if(decoded.exp * 1000 > Date.now()) {
                    setUser(decoded)
                } else {
                    localStorage.removeItem('token')
                }

                
            } catch {
                localStorage.removeItem('token')
            }
        }
        setLoading(false)
    }, [])

    const loginUser = (token) => {
        localStorage.setItem('token', token)
        const decoded = jwtDecode(token)
        setUser(decoded)
    }

    const logoutUser = (token) => {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loading, loginUser, logoutUser }}>
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