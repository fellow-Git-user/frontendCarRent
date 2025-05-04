import { Navigate } from "react-router"
import { useAuth } from "../../AuthContext"
import { Commet } from "react-loading-indicators"


const ProfilePage: React.FC = () => {

    const { user, loading, logoutUser} = useAuth()

        if(loading) {
            return <Commet color="#5d5d5d" size="medium" text="" textColor="" />
        }

        if(!user) {
            return <Navigate to={'/home/login'}/>
        }

        const isExpired = user.exp * 1000 < Date.now()

        if(!isExpired) {
            logoutUser()
            return <Navigate to={'/home/login'}/>
        }

        

    return (
        <div>
            <div>Profile page</div>
            <p>Username: {user.username} </p>
            <p>Email: {user.email} </p>
            
        </div>
        
    )
}

export default ProfilePage