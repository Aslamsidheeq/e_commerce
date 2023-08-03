import './category-preview.styles.jsx';
import ProductCard from '../product-card/product-card.component.jsx'; 
import { CatPreviewContainer, Preview, Title } from './category-preview.styles.jsx';

const CategoryPreview= ({ title, products }) => {
    //lives at categories-preview component
    
    return(
        <CatPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
        <Preview>
            {
                products.filter((_,index) => index < 4)
                        .map((product)=> 
                        <ProductCard key={product.id} product={product}/>
                        )
            }

        </Preview>
        </CatPreviewContainer>
    )
}

export default CategoryPreview;