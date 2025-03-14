import { useSingleUser } from "../../pages/SingleUser/SingleUserContextProvider"
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";


const SingleUserPage: React.FC = () => {
    const { user, loading } = useSingleUser()

    if(loading) {
        return <p>LOADING</p>
    }

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
                <Button variant="warning">Edit Profile</Button>
            </Col>
            </Row>
      </Container>
    )
}

export default SingleUserPage
