import Home from "./routes/home/home.component";
import {Routes, Route} from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { GlobalStyle } from "./global.styles";
import Footer from "./Components/footer/footer.component"

const App=()=>{
  return(
    <>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Navigation/>}>
          <Route  index element={<Home/>}/>
          <Route path='Shop/*' element={<Shop/>}/>
          <Route path='auth' element={<Authentication/>}/>
          <Route path='checkout' element={<Checkout/>}/>
      </Route>
      {/*if the path string matches the URL, element passed. */}
    </Routes>
    <Footer/>
    </>
)};
export default App;