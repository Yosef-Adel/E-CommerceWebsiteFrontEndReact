import React from 'react'
import classes from "./ProductDetails.module.css"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'

const ProductDetails = () => {
    const dispatch = useDispatch()
const addHandeler=() => {
dispatch({type: "add", count: count, id: product.id , title: product.entitle, price:product.price , image: product.image})
}
    const {id} =useParams();
    const [count,setCount]= useState(1)
    const [product,setProduct]=useState()
   useEffect(()=>{
    
    axios.get(`http://localhost:3000/product/byId/${id}`).then((res)=>{
        setProduct(res.data)
        console.log(res.data);
      })
   },[id])
   
  return (<div>
      {
      product && 
      <div className= { classes.container}>
      <div className={classes.imgContainer}>
          <img src={product.image} alt="dd"/>
      </div>
      <div className={classes.info}>
          <h3>{product.entitle}</h3>
             <h3> {product.price} LE </h3>
          <div className= {classes.opt}>
              <div className={classes.control}>
              <span onClick={()=> setCount(count+1)}>+</span>
              <span>{count}</span>
              <span onClick={()=> count>1 && setCount(count-1) }>-</span>
              </div>
              <div className={classes.btn}>
                  <button onClick={addHandeler}>ADD TO CART</button>
              </div>
          </div>
          <div className={classes.description}>
          <h6>DESCRIPTION</h6>
          <h5>{product.endescriptiontitle}</h5>
          <p>{product.endescription}</p>
              <p><span>INGREDIENTS:</span>  {product.eningredients}</p>
          </div> 
          
      </div>
  </div>
  }
  </div>

  )
}

export default ProductDetails