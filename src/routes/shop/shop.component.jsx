import { Route , Routes } from "react-router-dom";
import './shop.styles.scss'; 
import CategoriesPreview from "../categories-preview/categories-preview.component.jsx";
import Category from "../category/category.component";

const Shop = () =>{

    return(
    <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category" element={<Category/>}/>
    </Routes>

        // <div className="products-container">
        //     {products.map((product)=>(
        //         <ProductCard key={product.id} product={product}/>
        //     ))}
        // </div>
    )
}

export default Shop;