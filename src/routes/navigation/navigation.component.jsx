import { Fragment,useContext } from "react"
import { Outlet,Link } from "react-router-dom"
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { UserContext } from "../../Components/context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";

const Navigation = ()=> {

    const {currentUser}= useContext(UserContext);


    return(
      <Fragment> 
        <div className="navigation">
            <Link  className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
          <div className="nav-links-container">
                <Link className="nav-link" to='/Shop'>SHOP</Link>
                {
                  currentUser ? (
                    <span className="nav-link" onClick={signOutUser}>
                      Sign Out</span> )
                    : (<Link className="nav-link" to='/auth'>Sign in</Link>)
                  
                }
                <CartIcon/>

          </div>
          <CartDropdown/>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation