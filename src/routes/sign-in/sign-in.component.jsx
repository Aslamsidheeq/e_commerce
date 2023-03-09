

import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import {signInWithGooglePopup} from "../../utils/firebase/firebase.utils";


const SignIn = () =>{
//     useEffect((auth)=>{
//         const response =  getRedirectResult(auth);
//         console.log(response)
//     },[])

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        console.log(user);
        // const userDocRef = await createUserDocumentFromAuth(user);
    }
    // const logGoogleRedirectUser = async () =>{
    //     const {user} = await signInWithGooglePopup();
    //     console.log({user});
        
    // }
    return(
        <div>
            <h1>Sign-In</h1>
            <button onClick={logGoogleUser}>Sign-In with Google popup</button>
            <SignUpForm/>
            </div>
    )
}

export default SignIn;