import './directory.styles.scss'
import CategoryItem from'../directory-item/directory-item'

const Directory=({categories})=>{
    return(
        <div className="directory-container">
        {categories.map((category)=>(
          <CategoryItem category={category} key={category.id}/>
        ))}
        </div>
    );
    };

    export default Directory;