import React from 'react'
import classes from './CartItem.module.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CartItem = (props) => {
let history = useHistory();
const dispatch= useDispatch();
  return (
    <div className= {classes.itemContainer}>
        <div className= {classes.imgContainer} onClick={()=> {history.location.pathname !== `/productdetails/${props.product.id}` && history.push(`productdetails/${props.product.id}`)  ; window.location.reload();}  }>
            <img src={props.product.image} alt = ""/>
        </div>
        <div className= {classes.title} >
            <p>{props.product.title}</p>
            <p><span>{props.product.count}</span> <span><CloseIcon  sx={{ fontSize: 15 }}/></span> <span>{props.product.price}</span></p>
        </div>
        <div className= {classes.control}>
            <button onClick={()=> dispatch({type: "remove", id: props.product.id})}><DeleteOutlineIcon/></button>
        </div>
    </div>
  )
}

export default CartItem