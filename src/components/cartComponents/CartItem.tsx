import { Button } from "react-bootstrap"
import { CartProduct } from "../../pages/CarRent/allCarsReducer"
import { useCar } from "../../pages/CarRent/AllCarsContextProvider"

type CartProductProps = {
    data: CartProduct
}

const CartItem: React.FC<CartProductProps> = ({ data }) => {
    const { model, _id, quantity, price} = data
    const { updateQuantity, removeProduct } = useCar()

    return (
        <div>
            <h3>{model}</h3>
            <p>Price: {price}€</p>
            <p>Quantity: {quantity}</p>
            <Button variant="outline-danger" size="sm"  onClick={ () => updateQuantity(_id, quantity - 1)} disabled={quantity <= 1}>-</Button>
            <Button variant="outline-success" size="sm" onClick={ () => updateQuantity(_id, quantity + 1)}>+</Button>
            <Button variant="danger" size="sm" onClick={ () => removeProduct(_id)}>Remove</Button>
        </div>
    )
}

export default CartItem