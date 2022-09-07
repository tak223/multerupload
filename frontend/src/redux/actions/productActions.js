import { GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_SUCCESS, LOAD_PRODUCTS } from "../actiontypes/Productactiontypes"
import  axios  from "axios";

export const getallproducts = () =>async(dispatch)=> { 
    dispatch({type : LOAD_PRODUCTS})
     try {   
    
        const response = await axios.get("http://localhost:7000/product/") 
        //console.log(response.data)   
    
        dispatch({type : GET_ALL_PRODUCTS_SUCCESS, payload:response.data.allproducts}) 
       
    } catch (error) {
        dispatch({type : GET_ALL_PRODUCTS_FAIL,payload:error})
     }
 }