import {createContext,useState} from 'react';

export const CartContext = createContext({
    //actual value you want to access
    isCartOpen: false,
    setIsCartOpen:()=>{},
    
});

export const CartProvider = ({children}) =>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen,setIsCartOpen}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}