import { createContext , useState} from "react";
// import { useSearchParams } from "react-router-dom";

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:() => null,
});

export const UserProvider=({children}) =>{
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}