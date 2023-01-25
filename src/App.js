import Home from "./routes/home/home.component";
import {Routes, Route} from 'react-router-dom'

const App=()=>{
  return(
    <Routes>

      { <Route path='/Home' element={<Home/>}/> 
      /*if the path string matches the URL, element passed. */}
    
    </Routes>
    
)};
export default App;