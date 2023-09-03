import {createContext,useState,useEffect} from 'react';

const addCartItem =(cartItems,productToAdd) => {    //helper function
    const existingCartItem = cartItems.find((cartItems)=>
     cartItems.id === productToAdd.id
     );
    if(existingCartItem){
        return cartItems.map((cartItem)=>
        (cartItem.id === productToAdd.id)
         ? 
         {...cartItem,quantity : cartItem.quantity+1}
         :cartItem
        );
    }
    //return new array with modified or new items
    return [...cartItems,{...productToAdd, quantity: 1}];
}

    const removeCartItem = (cartItems,cartItemToRemove)=>{
        const existingCartItem = cartItems.find((cartItem)=>
        cartItem.id === cartItemToRemove.id
        );
        if(existingCartItem.quantity===1){
            return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
        }
        return cartItems.map((cartItem)=>
        (cartItem.id === cartItemToRemove.id)
         ? 
         {...cartItem,quantity : cartItem.quantity-1}
         :cartItem
        );
    }

    const clearCartItem = (cartItems, cartItemToClear) =>{
        return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
    }

export const CartContext = createContext({
    //actual value you want to access
    isCartOpen: false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},    //method
    removeItemToCart:()=>{},
    clearItemFromCart:()=>{},
    cartTotal: 0,
    cartCount: 0,
    
});

const cartReducer = (state,action) =>{
    const {type, payload} = action;

    switch(type){
        default:
            throw new Error('unhandled type of ${type} in cartReducer')
    }
}

export const CartProvider = ({children}) =>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartTotal,setCartTotal] = useState(0)

    useEffect(() => {
      const newCartCount = cartItems.reduce((total,cartItem)=>          //accumulator,current element
      total + cartItem.quantity,0)                                      // 0 is the initial value for accumulator
      setCartCount(newCartCount);
      
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total,cartItem)=>          //accumulator,current element
        total + cartItem.quantity * cartItem.price,0)                     // 0 is the initial value for accumulator
        setCartTotal(newCartTotal);
        
      }, [cartItems])
    

    const addItemToCart =(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    const removeItemToCart =(cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove));
    }

    const clearItemFromCart=(cartItemToClear)=>{
        setCartItems(clearCartItem(cartItems,cartItemToClear));

    }
    const value = {
        isCartOpen,
        setIsCartOpen, 
        addItemToCart, 
        cartItems,
        cartCount,
        removeItemToCart,
        clearItemFromCart,
        cartTotal }
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}