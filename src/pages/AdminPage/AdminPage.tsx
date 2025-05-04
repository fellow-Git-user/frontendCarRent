import { useAuth } from "../../AuthContext"
import ROLES from "../../config/roles"


const AdminPage: React.FC = () => {
    const { user } = useAuth()

    if(user?.role !== ROLES.ADMIN) {

        return (
            <p>ACCESS DENIED</p>
        )
    }


    return (

        <div>AdminPage</div>
    )
}

export default AdminPage