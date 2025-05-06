import { Col, Container, Row } from "react-bootstrap"
import { useAuth } from "../../AuthContext"
import ROLES from "../../config/roles"
import CreateAlbumForm from "../../components/adminPageForms/CreateAlbumForm"
import CreateCarForm from "../../components/adminPageForms/CreateCarForm"



const AdminPage: React.FC = () => {
    const { user } = useAuth()

    if(user?.role !== ROLES.ADMIN) {

        return (
            <p>ACCESS DENIED</p>
        )
    }


    return (
        <Container>

            <Row>
                <Col sm={6}> <CreateAlbumForm /> </Col>
                <Col sm={6}> <CreateCarForm /></Col>
            </Row>

        </Container>
        
    )
}

export default AdminPage