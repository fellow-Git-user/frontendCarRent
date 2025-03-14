import { Container } from "react-bootstrap"
import { CarContextProvider } from "./SingleCarContext"
import SingleCarPage from "../../components/carsPage/SingleCarPage"


const SingleCarRent: React.FC = () => {
    

    return (
        <CarContextProvider>

            <Container>
                <SingleCarPage  />
            </Container>

        </CarContextProvider>
    )
}

export default SingleCarRent