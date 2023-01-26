import Home from "./routes/home/home.component";
import {Routes, Route, Outlet} from 'react-router-dom'

const Navigation=()=>{
  return(
    <div>
      <div><h2>Navigation Bar</h2></div>
      <Outlet/>
    </div>
  )
}

const App=()=>{
  const Credits=()=>{
    return(
      <h1>shop</h1>
    )
  }
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
          <Route  index element={<Home/>}/>
          <Route path='Credits' element={<Credits/>}/>
      </Route>
      {/*if the path string matches the URL, element passed. */}
     
    </Routes>
    
)};
export default App;