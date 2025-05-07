import { Container } from "react-bootstrap"
import { CarContextProvider } from "./SingleCarContext"
import SingleCarPage from "../../components/carsPage/SingleCarPage"
import ReviewsComponent from "../../components/reviewComponents/ReviewsComponent"


const SingleCarRent: React.FC = () => {
    

    return (
        <CarContextProvider>

            <Container>
                <SingleCarPage  />
                <ReviewsComponent />
            </Container>

        </CarContextProvider>
    )
}

export default SingleCarRent