import { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {useNavigate} from 'react-router-dom';
import { CartDropdownContainer, EmptyMessage,CartItems } from './cart-dropdown.styles';

const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () =>{
        navigate('/checkout')
    }
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map(item => <CartItem key={cartItems.id} CartItem={item}/>)):
                    <EmptyMessage>Cart is Empty</EmptyMessage>
                }
            </CartItems>
                <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;