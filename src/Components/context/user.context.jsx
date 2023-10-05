import { createContext , useState, useEffect} from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener} from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:() => null,
});

    //App is the children
    //provides states to its children ,ie wraped component in provider.
export const UserProvider=({children}) =>{
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
        })
        return unsubscribe //clean up when unmounts
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}