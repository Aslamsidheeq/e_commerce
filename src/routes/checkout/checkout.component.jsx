import { useContext } from "react";
import { CartContext } from "../../Components/context/cart.context";

const Checkout = () =>{
    const {cartItems,addItemToCart,removeItemToCart} = useContext(CartContext);
return(
  <div>
            {
                cartItems.map((cartItem) =>{
                const {id,name,quantity,price} = cartItem;
                return(
                    <div key={id}>
                     <h2>{name}</h2>
                     <span>{quantity}x{price}</span>
                     <br/>
                     <span onClick={()=>addItemToCart(cartItem)}>Increment</span>
                     <br/>
                     <span onClick={()=>removeItemToCart(cartItem)}>Decrement</span>
                     </div>
                )}
                )
            }
            </div>
            )}
export default Checkout;