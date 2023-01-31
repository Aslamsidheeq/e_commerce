import { Fragment } from "react"
import { Outlet,Link } from "react-router-dom"
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import "./navigation.styles.scss";


const Navigation = ()=> {
    return(
      <Fragment> 
        {/* fragment instead of div is to avoid empty cover div */}
        <div className="navigation">
            <Link  className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/Shop'>SHOP</Link>
                <Link className="nav-link" to='/SignIn'>Sign-In</Link>

            </div>
          
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation