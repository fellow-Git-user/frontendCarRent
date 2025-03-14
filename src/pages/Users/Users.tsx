import { UsersContextProvider } from "./AllUsersContextProvider"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UsersList from "../../components/carsPage/UsersList";


const Users: React.FC = () => {

    return (
        <UsersContextProvider>
            <Container fluid>
                <Row>
                    <Col><UsersList /> </Col>
                </Row>

            </Container>
        </UsersContextProvider>
    )
}

export default Users
