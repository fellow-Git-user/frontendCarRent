import { Navigate } from "react-router"
import { useAuth } from "../../AuthContext"
import { Commet } from "react-loading-indicators"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { Form } from "react-bootstrap"
import apiClient from "../../utils/apiClient"


const ProfilePage: React.FC = () => {
    const { user, loading, logoutUser, updateUser} = useAuth()

    const [ username, setUsername ] = useState(user.username)


    useEffect(() => {
        if (user && user.exp * 1000 < Date.now()) {
            logoutUser();
        }
        }, [user, logoutUser]); // Depend on user and logoutUser
    
        if(loading) {
        return <Commet color="#5d5d5d" size="medium" text="" textColor="" />
        }
    
        if(!user) {
        return <Navigate to={'/home/login'}/>
        }

        const usernameHandler = event => {
            setUsername(event.target.value)
        }

        const submitHandler = async () => {
            event?.preventDefault()
            
            try { 
                const { data } = await apiClient.put('/client/update', { username })
                const { user } = data

                updateUser(user)
            }
            catch (error) {
                console.log(error)
            }
        }

    return (
        <div>
            <div>Profile page</div>
            <p>Username: {user.username} </p>
            <p>Email: {user.email} </p>

            <Form onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={username} onChange={usernameHandler} />
                </div>


                <Button variant="contained" endIcon={<SendIcon />} type="submit">Update profile</Button>

            </Form>
            
        </div>
        
    )
}

export default ProfilePage