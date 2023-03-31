

import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
// import {signInWithGooglePopup} from "../../utils/firebase/firebase.utils";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component";


const Authentication = () =>{
    return(
        <div className="authentication-container">
            <h1>Sign-In</h1>
            <SignInForm/>
            <SignUpForm/>
            </div>
    )
}

export default Authentication;