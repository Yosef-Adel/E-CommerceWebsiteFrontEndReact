import React from 'react'
import OrderProduct from './OrderProduct';
import classes from './Order.module.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
const Order = ({order, ID}) => {
  console.log(ID)
    const [total, setTotal] = useState(0);
    useEffect(()=>{

        let t ;
        order.map(o =>{
           t=+  o.order.count * o.product.price;
           
        })
        setTotal(t)
    },[])

const deleteHandeler = ()=>{
axios.delete(`http://localhost:3000/order/${ID}`,  ).then((res)=>{
  if(res.data === "done"){
    window.location.reload();
  }else{
    console.log(res)
  }
})
}
return (
<div className= {classes.order}>
  <div className={classes.data}>
    <h5>Name:  {order[0].user.username}</h5>
    <h5> Adress: {order[0].user.adress}</h5>
    <h5>Phone Number:  {order[0].user.phone}</h5>

  </div>
  <div className={classes.pro}>
        {
            order.map((o,i) => <OrderProduct product = {o.product} count = {o.order.count} key= {i}/>)
        }
  </div>
  <div>
      <h3>Total Price : {total}</h3>
  </div>
    <div>
        <button onClick={deleteHandeler} ><h3>Delete</h3></button>
    </div>
</div>
)
}

export default Order