import { useAllUsers } from "../../pages/Users/AllUsersContextProvider";
import Row from 'react-bootstrap/Row';
import UserItem from "./UserItem";
import { Commet } from "react-loading-indicators";
import { Link } from "react-router";
import classes from "../../cssModules/UserLink.module.css"



const UsersList: React.FC = () => {
    const { usersList, loading } = useAllUsers()
    
    if(loading) {
        return <Commet color="#5d5d5d" size="medium" text="" textColor="" />
    }

    return (
        <div>
            <div >

                <h1>Users</h1>
                <Link to={`/rent/users/create`} className={classes.link}>Create your account</Link>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
        
            {usersList.map(user => (
                
                    <UserItem data={user} key={user._id}  />
                
                ))}

            </Row>

        </div>
        
    )
}

export default UsersList
