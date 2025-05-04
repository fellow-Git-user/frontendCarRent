import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import { useAuth } from "../../AuthContext"

const LogoutButton: React.FC = () => {
    const {logoutUser} = useAuth()

    const navigate = useNavigate()
    const logoutHandler = () => {
        logoutUser()
        navigate('/home/login')
    }

    return (
        <Button variant="danger" size="sm" onClick={logoutHandler}>Logout</Button>
    )
}

export default LogoutButton