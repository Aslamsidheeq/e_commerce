import {createContext,useState} from 'react';

const addCartItem =(cartItems,productToAdd) => {    //helper function
    //find if cartItems contain products to add
    console.log("context check",cartItems)
    const existingCartItem = cartItems.find((cartItems)=> cartItems.id === productToAdd.id);

    //if found ; increment quantity
    if(existingCartItem){
        return cartItems.map((cartItem)=>
        (cartItem.id === productToAdd.id)
         ? {...cartItem,quantity : cartItem.quantity+1}
        :cartItem );
    }

    //return new array with modified or new items
    return [...cartItems,{...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
    //actual value you want to access
    isCartOpen: false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{}    //method
    
});

export const CartProvider = ({children}) =>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);

    const addItemToCart =(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    const value = {isCartOpen,setIsCartOpen, addItemToCart, cartItems}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}