import { Fragment } from "react"
import { Outlet,Link } from "react-router-dom"
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import "../navigation/navigation.styles.scss";


const Navigation=()=>{
    return(
      <Fragment> 
        {/* fragment instead of div is to avoid empty cover div */}
        <div className="navigation">
            <Link  className="logo-container" to='/'>
                <CrownLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to={'/Shop'}>SHOP</Link>
            </div>
        <Outlet/>
        </div>
      </Fragment>
    )
  }

  export default Navigation