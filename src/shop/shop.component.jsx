import { useContext } from "react";
import { categoriesContext } from "../Components/context/categories.context";
import CategoryPreview from "../Components/category-preview/category-preview.jsx"
import './shop.styles.scss'

const Shop = () =>{

    const {categoriesMap} = useContext(categoriesContext);

    return(
        <div className="shop-container">
            {Object.keys(categoriesMap).map((title)=>{
                const products = categoriesMap[title];
                console.log("products:",products)
                return <CategoryPreview key={title} title={title} products={products} />
            }
                
                
            )}
        </div>








        // <div className="products-container">
        //     {products.map((product)=>(
        //         <ProductCard key={product.id} product={product}/>
        //     ))}
        // </div>
    )
}

export default Shop;