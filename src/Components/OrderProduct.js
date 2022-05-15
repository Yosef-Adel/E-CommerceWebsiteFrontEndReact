import React from 'react'
import classes from './Product.module.css'
const OrderProduct = ({product, count}) => {
  return (
    <div className={classes.product}>
      <div className={classes.img} >
        <img src={product.image} alt=""/>
      </div>
      <div className={classes.details}>
        <p>{product.entitle}</p>
      </div>
      <div className={classes.price}>
            <h6> {product.price} LE </h6>
            <h6> Count :  {count}  </h6>
      </div>
    
  </div>
  )
}

export default OrderProduct