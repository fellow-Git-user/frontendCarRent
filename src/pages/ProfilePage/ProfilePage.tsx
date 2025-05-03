import { Navigate } from "react-router"
import LogoutButton from "../../components/buttons/logoutButton"


const ProfilePage: React.FC = () => {

    const token = localStorage.getItem('token')

        if(!token) {
        return <Navigate to={'/home/login'}/>
        }

    return (
        <div>
            <div>Profile page</div>
            
        </div>
        
    )
}

export default ProfilePage