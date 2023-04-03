import { Fragment,useContext } from "react"
import { Outlet,Link } from "react-router-dom"
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { UserContext } from "../../Components/context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = ()=> {

    const {currentUser,setCurrentUser}= useContext(UserContext);

    const signOutHandler = async() =>{
      await signOutUser();
      setCurrentUser(null);
    };

    return(
      <Fragment> 
        {/* fragment instead of div is to avoid empty cover div */}


        <div className="navigation">
            <Link  className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/Shop'>SHOP</Link>
                {
                  currentUser ? (
                    <span className="nav-link" onClick={signOutHandler}>
                      Sign Out</span> )
                    : (<Link className="nav-link" to='/auth'>Sign in</Link>)
                  
                }

            </div>
          
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation