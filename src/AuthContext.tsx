import { jwtDecode } from "jwt-decode";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AuthContextType, User } from "./types/types";

type AuthContextProviderProps = {
    children: ReactNode
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    loginUser: () => {},
    logoutUser: () => {},
    updateUser: () => {}
})

export const AuthProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [ user, setUser ] = useState<User | null>(null)
    console.log("🚀 ~ AuthProvider ~ user:", user)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            try {
                const decoded = jwtDecode<User>(token)

                if(decoded.exp && decoded.exp * 1000 > Date.now()) {
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

    const loginUser = (token: string) => {
        localStorage.setItem('token', token)
        const decoded = jwtDecode<User>(token)
        setUser(decoded)
    }

    const logoutUser = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    const updateUser = (changedData: Partial<User>) => {
        setUser(prevState => {
            if (prevState) {
                return {
                    ...prevState,
                    ...changedData
                } as User
            } 
            return null
        })
    }

    return (
        <AuthContext.Provider value={{ user, loading, loginUser, logoutUser, updateUser }}>
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