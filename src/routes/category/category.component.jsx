import { useContext, useState , useEffect ,Fragment } from 'react';
import { useParams } from 'react-router-dom';
import './category.styles';
import ProductCard from '../../Components/product-card/product-card.component'
import { CategoriesContext } from '../../Components/context/categories.context';
import { CategoryContainer,CategoryTitle } from './category.styles';

const Category = () =>{

    const { category } = useParams();
    const {categoriesMap} = useContext(CategoriesContext) || {};
    const [products,setProducts] = useState([categoriesMap[category]]);  

    useEffect(()=>{
        setProducts(categoriesMap[category]);
        },[category,categoriesMap]);

        if (Object.keys(categoriesMap).length === 0) {
            return <div>SUMMER SALE IS LIVE...</div>;
          }
          
return(
    <Fragment>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <CategoryContainer>
            {products &&
            products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
  </Fragment>
    )

}

export default Category;