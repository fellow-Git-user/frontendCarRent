import { Commet } from "react-loading-indicators";
import { useCar } from "../../pages/CarRent/AllCarsContextProvider"
import ProductItem from "./ProductItem"
import Row from 'react-bootstrap/Row';



const ProductsList: React.FC = () => {
    const { carsList, loading } = useCar()
    
    
    if(loading) {
        return <Commet color="#5d5d5d" size="medium" text="" textColor="" />
    }


    return (
        <div>
            <h1>Products</h1>
            <Row xs={1} md={3} lg={4} className="g-4">
        
            {carsList.map(product => (
                
                    <ProductItem data={product} key={product._id} />
                
                ))}

            </Row>

        </div>
        
    )
}

export default ProductsList