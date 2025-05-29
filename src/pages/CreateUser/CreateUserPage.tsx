import { Container } from "react-bootstrap"
import CreateUserForm from "../../components/carsPage/CreateUserForm"
import { UpdatedUserData } from "@/types/types";


const CreateUserPage: React.FC = () => {

    const dummySaveHandler = (data: UpdatedUserData) => {
        console.log("Save handler called on Create User Page (should not happen for creation):", data);
    };

    

    return(

        <Container>

        <div>
            <h1>New account</h1>
            <CreateUserForm editUserData={null} saveHandler={dummySaveHandler} />
            
        </div>

        </Container>
    )
}

export default CreateUserPage