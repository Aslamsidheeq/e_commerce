import './directory.styles.scss'
import DirectoryItem from'../directory-item/directory-item'

const Directory=({categories})=>{
    //lives at Home component 

    return(
        <div className="directory-container">
        {categories.map((category)=>(
          <DirectoryItem category={category} key={category.id}/>
        ))}
        </div>
    );
    };

    export default Directory;