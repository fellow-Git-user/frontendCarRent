import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap"
import Cart from "../../components/cartComponents/Cart"
import ProductsList from "../../components/carsPage/ProductsList"
import { CarsContextProvider } from "./AllCarsContextProvider"


const CarRent: React.FC = () => {


    return ( 
        <CarsContextProvider>
            <Container>

            <Row>
                <Col sm={10}><ProductsList /></Col>
                <Col sm={2}><Cart /></Col>
            </Row>
            
        
            
             </Container>
        </CarsContextProvider>
        

    )
}

export default CarRent