import { Fragment,useContext } from "react"
import { Outlet } from "react-router-dom"
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { UserContext } from "../../Components/context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../Components/context/cart.context";
import {NavLinks, NavigationContainer, LogoContainer, NavLink} from "./navigation.styles";
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";

const Navigation = ()=> {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return(
      <Fragment> 
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className="logo"/>
            </LogoContainer>
          <NavLinks>
                <NavLink to='/Shop'>
                  SHOP
                  </NavLink>
                {
                  currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>
                      Sign Out</NavLink> )
                    : (<NavLink to='/auth'>Sign in</NavLink>)
                  
                }
                <CartIcon/>

          </NavLinks>
          { isCartOpen && <CartDropdown/> }
        </NavigationContainer>
        <Outlet/> 
      </Fragment>
    )
  }

  export default Navigation