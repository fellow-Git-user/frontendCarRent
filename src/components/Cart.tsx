import { Button } from "react-bootstrap"
import { useCar } from "../pages/CarRent/AllCarsContextProvider"
import CartItem from "./CartItem"

const Cart: React.FC = () => {
    const { cart, clearCart } = useCar()

    if (cart.length === 0) {
        return ( 
            <div>
            <h2>Cart is empty</h2>
            </div>)
        
    }

    const finalPrice = cart.reduce((sum, currentProduct) => sum + currentProduct.price * currentProduct.quantity, 0)

    return (
        <div>
            <h1>CART</h1>
         <div>
            {cart.map(item => (
                <CartItem key={item.id} data={item}  />
            ))}
         </div>
         <p>Final price: {finalPrice}€</p>

         <Button variant="warning" onClick={clearCart}>Clear Cart</Button>
        </div>
        
    )
}

export default Cart