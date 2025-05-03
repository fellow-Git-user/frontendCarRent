import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"

const LogoutButton: React.FC = () => {
    const navigate = useNavigate()
    const logoutHandler = () => {
        localStorage.removeItem('token')
        navigate('/home/login')
    }

    return (
        <Button variant="danger" size="sm" onClick={logoutHandler}>Logout</Button>
    )
}

export default LogoutButton