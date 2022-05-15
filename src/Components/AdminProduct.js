import React from 'react'
import classes from './Product.module.css'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
const AdminProduct = ({product}) => {
    let history = useHistory();
    const deleteHandeler = () =>{
        axios.post("http://localhost:3000/product/delete", {id: product.id}).then((res)=>{
            if(res.data === "done"){
                window.location.reload();
            }else{
                console.log(res);
            }
        })
    }
  return (
    <div className={classes.product}>
      <div className={classes.img} onClick={()=> history.push(`productdetails/${product.id}`)}>
        <img src={product.image} alt=""/>
      </div>
      <div className={classes.details}>
        <p>{product.entitle}</p>
      </div>
      <div className={classes.price}>
            <h6>{product.price} $ </h6>
      </div>
      <div className={classes.option}>
            <button onClick={deleteHandeler}>Delete</button>
      </div>
  </div>
  )
}

export default AdminProduct