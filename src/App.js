import Home from "./routes/home/home.component";
import {Routes, Route} from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";


const App=()=>{
  const Shop=()=>{
    return(
      <h1>shop</h1>
    )
  }
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
          <Route  index element={<Home/>}/>
          <Route path='Shop' element={<Shop/>}/>
          <Route path='auth' element={<Authentication/>}/>

      </Route>
      {/*if the path string matches the URL, element passed. */}
     
    </Routes>
    
)};
export default App;