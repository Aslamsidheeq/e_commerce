import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../context/cart.context';


const CheckoutItem = ({cartItem}) =>{
    const {name , imageUrl , quantity , price } = cartItem ;
    const {clearItemFromCart,addItemToCart,removeItemToCart,setIsCartOpen,isCartOpen} = useContext(CartContext);

    const clearItemHandler = ()=> clearItemFromCart(cartItem);
    const removeItemHandler =()=> removeItemToCart(cartItem);
    const addItemHandler = ()=> addItemToCart(cartItem);
    const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen)
    return(
        <div className='checkout-item-container' onClick={toggleIsCartOpen}>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10096;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
                </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem ;