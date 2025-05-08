import axios from "axios";
import { useSingleUser } from "../../pages/SingleUser/SingleUserContextProvider"
import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { API_URL } from "../../utils/API_URL";
import { Commet } from "react-loading-indicators";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CreateUserForm from "./CreateUserForm";
import { User } from "../../types/types";
import { useAuth } from "../../AuthContext";
import apiUser from "../../utils/apiUser";



const SingleUserPage: React.FC = () => {
    const { user, loading, editUser } = useSingleUser()
    

    const [alert, setAlert] = useState<React.ReactElement | null>(null)
    const [ editUserMode, setEditUserMode ] = useState(false)

        const [open, setOpen] = React.useState(false);
        // const handleOpen = () => setOpen(true);
        // const handleClose = () => setOpen(false);

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          };

    const navigate = useNavigate()

    if(loading) {
        return <Commet color="#5d5d5d" size="medium" text="" textColor="" />
    }

    const deleteHandler = async () => {
        try {
            const response = await apiUser.delete(`/users/${user?.id}`)
        
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

    const onSaveHandler = (updatedUserData: User) => {
        editUser(updatedUserData)
        setEditUserMode(false)
        setOpen(false)
    }


    const editUserHandler = () => {
        
        setEditUserMode(prevState => !prevState)
        setOpen(true)
    }

    if (editUserMode) {
        return (
            <div>
              <Modal
                open={open}
                onClose={editUserHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                    <p>Edit your profile:</p>
                  <CreateUserForm saveHandler={onSaveHandler} editUserData={user}/> 

                  <Button variant="danger" onClick={editUserHandler}>Close</Button>
                </Box>
              </Modal>
            </div>
        )
    }

    return(
        <Container className="mt-4">
            {editUserMode}
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
                {user?.street}, 
                Flat: {user?.flatNumber}, 
                {user?.city}, {user?.country}
                </p>
                <Button variant="warning" onClick={editUserHandler}>Edit Profile</Button>
                <Button variant="danger" onClick={deleteHandler}>Delete</Button>
                {alert}
            </Col>
            </Row>
      </Container>
    )
}

export default SingleUserPage
