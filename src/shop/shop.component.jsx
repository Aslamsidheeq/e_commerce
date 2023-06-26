import { Fragment, useContext } from "react";
import { categoriesContext } from "../Components/context/categories.context";
import ProductCard from "../Components/product-card/product-card.component";
import './shop.styles.scss'

const Shop = () =>{

    const {categoriesMap} = useContext(categoriesContext);

    return(
        <Fragment>
            {Object.keys(categoriesMap).map((title)=>
                <>
                <h2>{title}</h2>
                <div className="products-container">
                {categoriesMap[title].map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
                </div>
                </>
                
            )}
        </Fragment>








        // <div className="products-container">
        //     {products.map((product)=>(
        //         <ProductCard key={product.id} product={product}/>
        //     ))}
        // </div>
    )
}

export default Shop;