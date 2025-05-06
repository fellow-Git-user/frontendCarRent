import { useNavigate } from "react-router"
import { useAuth } from "../../AuthContext"
import { LogOut } from "lucide-react";
import { Button } from "@mui/material";



const LogoutButton: React.FC = () => {
    const {logoutUser} = useAuth()

    const navigate = useNavigate()
    const logoutHandler = () => {
        logoutUser()
        navigate('/home/login')
    }

    return (
        // <Button variant="danger" size="sm" onClick={logoutHandler}>Logout</Button>
        <Button variant="text"  onClick={logoutHandler} sx={{ color: '#fff', '&:hover': { color: 'red' } }}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
    )
}

export default LogoutButton