import { useContext } from "react";
import { CategoriesContext } from "../../Components/context/categories.context";
import CategoryPreview from "../../Components/category-preview/category-preview.jsx";

const CategoriesPreview = () =>{
//lives at shop component
const {categoriesMap} = useContext(CategoriesContext);

    return(
        <>
            {Object.keys(categoriesMap).map((title)=>{
                const products = categoriesMap[title];
                console.log("products:",products)
                return <CategoryPreview key={title} title={title} products={products} />
            })}
        </>
    )}

export default CategoriesPreview;