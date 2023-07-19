import './directory-item.styles.scss';

const CategoryItem =  ({category})=>{
    const { imageUrl, title } = category;
    return(
        <div className='directory-body-container'>
          <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className='category-body-container'>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
            </div>

    )
}
export default CategoryItem;