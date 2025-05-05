import { Car } from "../../types/types"
import { Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useCar } from "../../pages/CarRent/AllCarsContextProvider";
import { Link } from "react-router";
import classes from "../../cssModules/ProductItem.module.css"


type ProductItemProps = {
    data: Car
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
    const { addProduct, cart } = useCar()
    const { brand, image, model, carMakeDate, engine, engineDisplacement, _id, price} = data
    
    const inCart = cart.find(item => item._id === _id)
    

    return (
        
            <Col key={_id}>
                <Card>
                    <Link to={`/rent/car-renting/${_id}`}
                    className={classes.link}>
                     <Card.Img variant="top" src={image} className={classes.img} />
                        <Card.Body>
                            <Card.Title>
                                {brand} {model} {carMakeDate} 
                                {engineDisplacement && engineDisplacement !== "" ? ` (${engineDisplacement}l) ` : " "}
                                {engine}. 
                            </Card.Title>
                            <Card.Text>
                                For only {price}€
                            </Card.Text>
                            
                        </Card.Body>
                    </Link>     
                    <Card.Footer>
                    <div className="d-flex justify-content-center">
                        <Button variant="outline-warning" size="lg" onClick={() => addProduct(data)}>
                            {inCart ? 'Add one more' : 'Add to cart'} </Button>
                    </div>
                    </Card.Footer>
                </Card>
            </Col>
        
        
    )
}

export default ProductItem