import { createContext, useState , useEffect} from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";


export const categoriesContext = createContext({
    categoriesMap:{},
});

export const CategoriesProvider  = ({children}) =>{
    const [categoriesMap,setCategoriesMap] = useState({})
        console.log("CategoriesMap:",categoriesMap)
    useEffect(()=>{
        const getCategoriesMap = async () =>{
        const categoryMap = await getCategoriesAndDocuments()
        setCategoriesMap(categoryMap)
        }
        getCategoriesMap();

    },[])
    const value = {categoriesMap};
    return(
        <categoriesContext.Provider value={value}>{children}</categoriesContext.Provider>
)
}