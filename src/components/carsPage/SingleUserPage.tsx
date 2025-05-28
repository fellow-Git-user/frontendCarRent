import { useSingleUser } from "../../pages/SingleUser/SingleUserContextProvider"
import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Commet } from "react-loading-indicators";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CreateUserForm from "./CreateUserForm";
import { UpdatedUserData, User } from "../../types/types";
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

    if (!user) {
        return <Alert severity="error">User data not found.</Alert>;
    }

    const deleteHandler = async () => {
        try {
            const response = await apiUser.delete(`/users/${user?._id}`)
        
            if(response.status === 200) {
                setAlert(<Alert severity="success">Successfully deleted</Alert>)
                setTimeout(() => {
                    navigate(`/admin/users`);
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

    const onSaveHandler = (updatedPartialData: UpdatedUserData) => {

        const fullUpdatedUser: User = {
            _id: updatedPartialData._id,
            image: updatedPartialData.image ?? user.image,
            name: updatedPartialData.name ?? user.name,
            surname: updatedPartialData.surname ?? user.surname,
            phone: updatedPartialData.phone ?? user.phone,
            email: updatedPartialData.email ?? user.email,
            address: {
                street: updatedPartialData.address?.street ?? user.address.street,
                flatNumber: updatedPartialData.address?.flatNumber ?? user.address.flatNumber,
                city: updatedPartialData.address?.city ?? user.address.city,
                country: updatedPartialData.address?.country ?? user.address.country,
            },
            
        };

        editUser(fullUpdatedUser)
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
                {user?.address?.street}, 
                Flat: {user?.address?.flatNumber}, 
                {user?.address?.city}, {user?.address?.country}
                </p>
                <Button variant="warning" onClick={editUserHandler}  className="me-1">Edit Profile</Button>
                <Button variant="danger" onClick={deleteHandler}>Delete</Button>
                {alert}
            </Col>
            </Row>
      </Container>
    )
}

export default SingleUserPage
