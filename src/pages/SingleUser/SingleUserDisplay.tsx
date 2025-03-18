import { Container } from "react-bootstrap"
import SingleUserPage from "../../components/carsPage/SingleUserPage"
import { SingleUserContextProvider } from "./SingleUserContextProvider"

const SingleUserDisplay: React.FC = () => {
    
    

    return (
        <SingleUserContextProvider>

            <Container>
                <SingleUserPage />
            </Container>
        
        </SingleUserContextProvider>
    )
}

export default SingleUserDisplay