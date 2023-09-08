import { useState} from "react";
import { 
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
    } from "../../utils/firebase/firebase.utils";
import './sign-up-form.styles.scss';
import Button from '../button/button.component';
import FormInput from "../form-input/form-input.component";

 
const defaultFormFeilds={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}   

 const SignUpForm = () => {
    const [formFeilds,setFormFeilds] = useState(defaultFormFeilds) ;    
    const {displayName,email,password,confirmPassword}= formFeilds ;    
    

const resetFormFeilds =()=>{
    setFormFeilds(defaultFormFeilds)
}                                              

    const handleSubmit = async(event)=>{            
        event.preventDefault();
        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }                                           
        try{                                        
             const {user} = await createAuthUserWithEmailAndPassword(
                email,
                 password
                 ); 


             await createUserDocumentFromAuth(user,{displayName}) // setting email,password and additional displayName too
             resetFormFeilds(); 
             
        }catch(error){
                if(error.code==="auth/email-already-in-use"){
                    alert('cannot create user, email already in use'); 
                }else{                       
                console.log("user creation encountered an error",error);
        } 
    }
    }
    const handleChange = (event)=>{                                     
                const {name, value} = event.target;                     
                setFormFeilds({...formFeilds, [name]:value})            // update apptopriate feilds only
        }                                                               
    return(
        <div className="sign-up-container">
                                                                    
            <h2>Dont have an account ?</h2>
            <span>Sign up with your email id and password</span> 

                                                                      
            <form onSubmit={handleSubmit}>                                           
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
            </form>
        </div>
    )
    }
    export default SignUpForm;