import { Container } from "react-bootstrap"
import CreateUserForm from "../../components/carsPage/CreateUserForm"


const CreateUserPage: React.FC = () => {
    

    return(

        <Container>

        <div>
            <h1>New account</h1>
            <CreateUserForm editUserData={null} />
            
        </div>

        </Container>
    )
}

export default CreateUserPage