import { useState } from "react";
import './sign-up-form.styles.scss';
import Button from '../button/button.component';
import FormInput from "../form-input/form-input.component";

import { 
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
 } from "../../utils/firebase/firebase.utils";
 
    const defaultFormFeilds={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }   //5 

 const SignUpForm = () => {
    const [formFeilds,setFormFeilds] = useState(defaultFormFeilds) ;    //6 
    const {displayName,email,password,confirmPassword}= formFeilds ;    //7 destructuring formfeilds needed
    
    const resetFormFeilds =()=>{
        setFormFeilds(defaultFormFeilds)
    }                                               //20 reseting feilds function
    
    const handleSubmit = async(event)=>{            //12
        event.preventDefault();
        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }                                           //13
        try{                                        //14
             const {user} = await createAuthUserWithEmailAndPassword(
                email,
                 password
                 ); //15

             await createUserDocumentFromAuth(user,{displayName}) //18 setting email,password and additional displayName too
             resetFormFeilds(); //21 reset formFeilds
             
        }catch(error){
                if(error.code=="auth/email-already-in-use"){
                    alert('cannot create user, email already in use'); //19 error managing - already exist
                }else{                       
                console.log("user creation encountered an error",error);
        }                                           //16 email and password authentication isnt accessing or storing other 
                                                    //data like displayName. so , saving display name too for sign in 
                                                    // function is the next step.
    }
    }
    const handleChange = (event)=>{                                     //8 takes input event
                const {name, value} = event.target;                     //10. name and value coming through the event
                setFormFeilds({...formFeilds, [name]:value})            //11. update apptopriate feilds only
        }                                                               //5
    return(
        <div className="sign-up-container">
                                                                        {/* 1. creating function */}
            <h2>Dont have an account ?</h2>
            <span>Sign up with your email id and password</span> 

                                                                        {/* 2. form component */}
            <form onSubmit={handleSubmit}>
                
                                                                        {/* 9. onChange to recieve inputs  part 1 9:40 ,name will come through event ; name of attribute in fucntion to updatevalue is the value to update in named feild */}
                <FormInput 
                    label='Display Name'
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}/>

                
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

                <FormInput 
                    label="confirmPassword"
                    type='password'
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}/>

                <Button type="submit">Sign-Up</Button> 
                {/* 3. on clicking the button, onSubmit function works */}

            </form>
        </div>
    )
    }
    export default SignUpForm;