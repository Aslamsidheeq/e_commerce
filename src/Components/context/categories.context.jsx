import { createContext, useState , useEffect} from "react";
import { getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils.js";
// import SHOP_DATA from "../../routes/shop/shop-data.js";

export const CategoriesContext = createContext({
    categoriesMap:{},
});

export const CategoriesProvider  = ({children}) =>{
    const [categoriesMap,setCategoriesMap] = useState({})
    useEffect(()=>{
        const getCategoriesMap = async () =>{
        const categoryMap = await getCategoriesAndDocuments()
        setCategoriesMap(categoryMap)
        }
        getCategoriesMap();

    },[])

    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // })

    const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
)
}