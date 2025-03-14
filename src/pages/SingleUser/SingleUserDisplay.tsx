import { Container } from "react-bootstrap"
import { UserContextProvider } from "../../pages/SingleUser/SingleUserContextProvider"
import SingleUserPage from "../../components/carsPage/SingleUserPage"

const SingleUserDisplay: React.FC = () => {
    
    

    return (
        <UserContextProvider>

            <Container>
                <SingleUserPage />
            </Container>
        
        </UserContextProvider>
    )
}

export default SingleUserDisplay