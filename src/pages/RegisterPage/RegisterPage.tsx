import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"

const RegisterPage: React.FC = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const usernameHandler = event => setUsername(event?.target.value)
    const emailHandler = event => setEmail(event?.target.value)
    const passwordHandler = event => setPassword(event?.target.value)

    const registerHandler = async event => {
        event.preventDefault()
        
        try {
            const userInfo = { username, email, password}
            const res = await axios.post('http://localhost:3005/api/client/register', userInfo)
            
            navigate('/home/login')
        } catch (error) {

            console.log('Failed to register', error)
        }

    }

   

    return (
        <div>
            <h1>Register Page</h1>

            <form onSubmit={registerHandler}>
                <div className="form-control">
                    <label htmlFor="text" name="username" id="username" value={username}>Username: </label>
                    <input type="text" name="username" id="username" value={username} onChange={usernameHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="email" name="email" id="email" value={email}>Email: </label>
                    <input type="email" name="email" id="email" value={email} onChange={emailHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="password" name="password" id="password" value={password}>Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={passwordHandler} />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    )

}

export default RegisterPage