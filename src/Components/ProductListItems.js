import React from 'react'
import classes from './ProductListItems.module.css'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
const ProductListItems = ({product}) => {
  let history = useHistory();
  const dispatch = useDispatch()
const addHandeler=() => {
dispatch({type: "add", count: 1, id: product.id , title: product.entitle, price:product.price , image: product.image})
}
  return (
    <div className={classes.Item}>
        <div className={classes.imgConainer} onClick={()=> history.push(`productdetails/${product.id}`)}>
            <img src={product.image} alt= "dd"/>
        </div>
        <div className={classes.discripion}>
            <h6> {product.entitle}</h6>
            <p>{`${product.endescriptiontitle} ${product.endescription}` }</p>
        </div>
        <div className={classes.price}>
            <h5>{product.price} AED</h5>
            <button onClick={addHandeler}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductListItems