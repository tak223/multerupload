import React from 'react'
import { useSelector } from 'react-redux'
import Products  from './Products'

const ProductList = () => {
    const products = useSelector(state=>state.productReducer.products)
    // console.log('ho') 
    console.log(products)
    return (
      <div >
        <div>hi</div>
    {products?.map(el=> <Products el={el} key={el._id} />)} 
    <Products/>

      </div> 
    )
}

export default ProductList