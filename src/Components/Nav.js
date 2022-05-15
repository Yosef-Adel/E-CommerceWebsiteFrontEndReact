import React from 'react';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector} from 'react-redux'
import logo from '../imgs/logo.png'
import Offcanvas from 'react-bootstrap/Offcanvas'
import classes from './Nav.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CartItem from './CartItem';
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'

const NavBar = () => {
  const history = useHistory();
  const Data=  useSelector(state => state);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [totalAmount,setTotalAmount] = useState(0)
  const [count, setCount] = useState(0);
useEffect(()=>{
  if(Data){
  let totalPrice = 0;
  let c = 0;
  Data.map((p) => {
    c += p.count;  
    totalPrice += p.price * p.count
  })
  setTotalAmount(totalPrice)
    setCount(c);
  }
},[Data])

  return (

   <div className={classes.nav}>
       <div className={classes.cart}>
            <button onClick={() => setShow(true)}> <MenuIcon/> </button>
        <Offcanvas show={show} onHide={()=>setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Close</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ul className={classes.links}>
                <li onClick={()=>setShow(false)}><NavLink to="/">HOME</NavLink></li>
                <li  onClick={()=>setShow(false)}>  <NavLink to="/productlist">SHOP</NavLink></li>
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
       </div>

       <div className={classes.logo}>
            <img src={logo} alt="d"/>
       </div>

        <div className={classes.Items}>
        
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/productlist">SHOP</NavLink>
          
        </div>

       <div className={classes.bur}>
       <Offcanvas show={show2} onHide={() => setShow2(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={classes.cartIcon}>
                <LocalMallIcon sx={{ fontSize: 50 }}/>
          </div>

          <div>
            { Data &&
              Data.map(p=> <CartItem key={p.id} product = {p} />)
            }
          </div>
         { Data.length > 0 &&
       <  div>
            <div>
          <h5>Total Amount : {totalAmount}</h5>
          </div>
         <div className={classes.btn}> 
          <Button onClick={() => {history.push('/checkout'); setShow2(false)}}>PROCEED TO CHECKOUT</Button>
          </div>
       </div>
        }
        </Offcanvas.Body>
      </Offcanvas><button onClick={ () => setShow2(true)}> <ShoppingCartIcon/> {count}</button>
       

      
       </div>
   </div>
 
  );
};

export default NavBar;
