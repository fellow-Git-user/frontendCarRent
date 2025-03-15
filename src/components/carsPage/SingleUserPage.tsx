import axios from "axios";
import { useSingleUser } from "../../pages/SingleUser/SingleUserContextProvider"
import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { API_URL } from "../../utils/API_URL";
import { Commet } from "react-loading-indicators";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router";



const SingleUserPage: React.FC = () => {
    const { user, loading } = useSingleUser()
    const [alert, setAlert] = useState<React.ReactElement | null>(null)



    let navigate = useNavigate()

    if(loading) {
        return <Commet color="#5d5d5d" size="medium" text="" textColor="" />
    }

    const deleteHandler = async () => {
        try {
            const response = await axios.delete(`${API_URL}/users/${user.id}`)
        
            if(response.status === 200) {
                setAlert(<Alert severity="success">Successfully deleted</Alert>)
                setTimeout(() => {
                    navigate(`/rent/users`);
                }, 2000)            
            } else {
                setAlert(<Alert severity="error">Something went wrong. Please try again or contact us.</Alert>) 
            }
        } catch (error) {
            setAlert(<Alert severity="error">Something went wrong. Please try again or contact us.</Alert>);
            console.error("Delete error:", error);
        }
        

    } 

    // const deleteHandler = async () => {
    //     await deleteUser(user.id)
    // } 



    return(
        <Container className="mt-4">
            <Row className="align-items-center">
            <Col md={4} className="text-center">
                <Image 
                src={user?.image} 
                roundedCircle 
                style={{ width: "150px", height: "150px", objectFit: "cover" }} 
                />
            </Col>
            <Col md={8}>
                <h3>{user?.name} {user?.surname}</h3>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Phone:</strong> {user?.phone}</p>
                <p><strong>Address: </strong>
                {user?.address?.street}, 
                Flat: {user?.address.flatNumber}, 
                {user?.address.city}, {user?.address.country}
                </p>
                <Button variant="warning" >Edit Profile</Button>
                <Button variant="danger" onClick={deleteHandler}>Delete</Button>
                {alert}
            </Col>
            </Row>
      </Container>
    )
}

export default SingleUserPage
