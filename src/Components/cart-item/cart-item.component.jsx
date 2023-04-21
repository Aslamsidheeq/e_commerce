import './cart-item.syles.scss'

const CartItem=({CartItem})=>{
    const {name,quantity} = CartItem;
    return(
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem;