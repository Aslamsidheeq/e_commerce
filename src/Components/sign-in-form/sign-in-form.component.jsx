import { useState} from "react";
import { signInAuthUserWithEmailAndPassword,
        signInWithGooglePopup} from "../../utils/firebase/firebase.utils";
import Button,
        {BUTTON_TYPE_CLASSES} from '../button/button.component';
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';

const defaultFormFeilds={
    email:'',
    password:'',
}   

const SignInForm = () => {
    const [formFeilds,setFormFeilds] = useState(defaultFormFeilds) ;    
    const {email,password}= formFeilds ;    // destructuring formfeilds needed
    
    const resetFormFeilds =()=>{
        setFormFeilds(defaultFormFeilds)
}                                          // reseting feilds function
    
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        };

    const handleSubmit = async(event)=>{            
        event.preventDefault();                     
        try{
            const {user} = await
            signInAuthUserWithEmailAndPassword(email,password)
            console.log("submit",user)
            resetFormFeilds(); // reset formFeilds
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }                           
        }
    }
    const handleChange = (event)=>{                                     // takes input event
            const {name, value} = event.target;                     // name and value coming through the event - destructure
            setFormFeilds({...formFeilds, [name]:value})}            // update apptopriate feilds only//5
    return(
        <div className="sign-up-container">                                                
            <h2>Already have an account ?</h2>
            <span>Sign in with your email id and password</span>       
            
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="email"
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}/>

                <FormInput 
                    label="password"
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}/>

                <div className="buttons-container">
                    <Button 
                    type="submit">
                    Sign-In
                    </Button> 
                                                            
                    <Button 
                    type='button'  //5:50 @104 : reason
                    buttonType={BUTTON_TYPE_CLASSES.google} 
                    onClick={signInWithGoogle}>
                    Google sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}


export default SignInForm