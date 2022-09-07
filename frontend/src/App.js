import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./components/home/Home";
import Navbar from './components/navbar/Navbar';
import ProductList from "./components/products/ProductList";
import { getallproducts } from "./redux/actions/productActions";
import { DoctorList } from './components/doctors/DoctorList';
import { useSelector } from 'react-redux'


function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
 dispatch(getallproducts())
  },[]);

  //console.log(products)
  
  return (
    <div className="App">
   <Navbar/>
    <Routes>
      <Route  path = '/Products' element={<ProductList  />}  />
      <Route   path = '/Home' element={<Home/>}  />
      <Route  path = '/DoctorList' element={<DoctorList/>}  />
    </Routes>
    </div>
  );
}

export default App;
