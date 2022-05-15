import React from 'react'
import ProductListItems from '../Components/ProductListItems'
import classes from './ProductList.module.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
const ProductList = () => {
  const [products, setProducts] =useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/product").then((res)=>{
      setProducts(res.data);
    })
  },[])
  return (
    <div className={classes.container}>
        
        <div className={classes.title}>
            <h1>SHOP ALL</h1>
        </div>

        <div className={classes.products} >
            {
              products.map(p=>  <ProductListItems key={p.id} product = {p}/>)
            }


        </div>
       
        
    </div>
  )
}

export default ProductList