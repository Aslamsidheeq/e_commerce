import { useState } from "react";
import './sign-in-form.styles.scss';
import Button from '../button/button.component'
import { 
    signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInWithGooglePopup
 } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

    const defaultFormFeilds={
        email:'',
        password:'',
    }   //5 


const SignInForm = () => {
    const [formFeilds,setFormFeilds] = useState(defaultFormFeilds) ;    //6 
    const {email,password}= formFeilds ;    //7 destructuring formfeilds needed
    

    const resetFormFeilds =()=>{
        setFormFeilds(defaultFormFeilds)
    }                                               //20 reseting feilds function
    
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
      };

    const handleSubmit = async(event)=>{            //12
        event.preventDefault();
                                                 //13
        try{
            const response = await signInAuthUserWithEmailAndPassword(
                email,password
            )
            console.log(response)
             resetFormFeilds(); //21 reset formFeilds
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
    const handleChange = (event)=>{                                     //8 takes input event
                const {name, value} = event.target;                     //10. name and value coming through the event
                setFormFeilds({...formFeilds, [name]:value})            //11. update apptopriate feilds only
        }                                                               //5
    return(
        <div className="sign-up-container">
                                                                        {/* 1. creating function */}
            <h2>Already have an account ?</h2>
            <span>Sign in with your email id and password</span> 

                                                                        {/* 2. form component */}
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
                                                                        {/* 3. on clicking the button, onSubmit function works */}
                    <Button 
                    type='button'  //5:50 @104 : reason
                    buttonType='google' 
                    onClick={signInWithGoogle}>
                    Google sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}


export default SignInForm