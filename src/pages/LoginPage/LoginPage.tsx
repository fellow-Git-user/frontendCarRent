import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "../../AuthContext"

const LoginPage: React.FC = () => {
    const { loginUser } = useAuth()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const emailHandler = event => setEmail(event?.target.value)
    const passwordHandler = event => setPassword(event?.target.value)

    const loginHandler = async event => {
        event.preventDefault()
        
        
        try {
            const loginInfo = { email, password}
            const res = await axios.post('http://localhost:3005/api/users/login', loginInfo)
            const { token } = res.data
            console.log("🚀 ~ res:", res)

            if(token){
                loginUser(token)
                navigate('/admin/profile')
            }

            // navigate('/home/login')
        } catch (error) {
            console.log('Failed to login', error)
        }

    }   

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={loginHandler}>
                <div className="form-control">
                    <label htmlFor="email" name="email" id="email" value={email}>Email: </label>
                    <input type="email" name="email" id="email" value={email} onChange={emailHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="password" name="password" id="password" value={password}>Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={passwordHandler} />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default LoginPage