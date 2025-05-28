import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "../../AuthContext"
import { Alert } from "@mui/material"

const LoginPage: React.FC = () => {
    const { loginUser } = useAuth()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState<string | null>(null)


    const navigate = useNavigate()

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        setLoginError(null)
    }
    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
        setLoginError(null)
    }

    const loginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoginError(null)
        
        try {
            const loginInfo = { email, password}
            const res = await axios.post('http://localhost:3005/api/users/login', loginInfo)
            const { token } = res.data
            console.log("🚀 ~ token:", token)
            

            if(token){
                loginUser(token)
                navigate('/home')
            } else {
                setLoginError("Login failed: No token received.")
            }

            // navigate('/home/login')
        } catch (error) {
            console.log('Failed to login', error)
            if (axios.isAxiosError(error) && error.response) {
                setLoginError(error.response.data.message || 'Login failed. Please check your credentials.');
            } else {
                setLoginError('An unexpected error occurred during login.');
            }
        }

    }   

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={loginHandler}>
                <div className="form-control">
                    <label htmlFor="email" >Email: </label>
                    <input type="email" name="email" id="email" value={email} onChange={emailHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="password"  >Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={passwordHandler} />
                </div>

                {loginError && <Alert severity="warning">{loginError}</Alert> }


                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default LoginPage