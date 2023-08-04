import {BaseButton ,GoogleSignInBtn, InvertedBtn} from './button.styles'


export const BUTTON_TYPE_CLASSES = {
    base : 'base',
    google:'google-sign-in',
    inverted:'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ( 
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInBtn,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedBtn,

    }[buttonType] //buttonType value is passed to function
) 

export const Button = ({children,buttonType,...otherProps}) =>{
    const CustomButton = getButton(buttonType);
    return(
        <CustomButton {...otherProps}>
                {children}
        </CustomButton>
    )
}

export default Button ;

