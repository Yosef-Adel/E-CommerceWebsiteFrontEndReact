import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Layout from '../Components/Layout';
import Product from '../Components/Product';
import {useHistory} from 'react-router-dom'
import classes from './Home.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img from '../imgs/test.jpg'
import img2 from '../imgs/tess.jpg'
const Home = () => {
  let history = useHistory();
  const [products, setProducts] =useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/product").then((res)=>{
     
      console.log(res.data)
      setProducts(res.data);
    })
  },[])
  return (
  <div  className={classes.container}>
      <Layout/>
      <div className={classes.title}>
          <h1 className={classes.name}>Manuka Honey</h1>
      </div>
      <div className={classes.description}>
        <h6>A rare and special honey extensively researched 
        </h6>
        <h6> and recognised for its remarkable natural qualities.</h6>
      </div>
      <div className={classes.productHeader}>
          <h2>OUR PRODUCTS</h2>
      </div>
      <div className={classes.productContainer}>
        {
          products.map(p=> <Product key={p.id} product = {p}/>)
        }
          
      </div>
      <div className={classes.option}>
          <button onClick={()=> history.push("/productlist")} >SHOW ALL</button>
      </div>
      <div className={classes.title}>
          <h1 >Manuka Honey</h1>
      </div>
      <div className={classes.description2}>
        <h6>
          Our range includes Manuka honey, Propolis and Royal Jelly.
        </h6>

      </div>
      <div className= {classes.imgContainer4}>
        <div className= {classes.imgContainer2}>
            <img src={img} alt=""/>
            <img src={img} alt=""/>
        </div>
        <div className= {classes.imgContainer2}>
        <img src={img} alt=""/>
        <img src={img} alt=""/>
        </div>
      </div>

      <Container >
  <Row  className= {classes.info}>
    <Col md={7} sm={12}><img src={img2} alt=""/></Col>
    <Col md={5} sm={12}>
    <div  className= {classes.infoOptions}>
            <h2>
            What is Manuka Honey ?
            </h2>
            <p>Discover more about Manuka Honey</p>
            <button>Learn More</button>
        </div>
    </Col>
  </Row>
 
</Container>


  </div>
  );
};

export default Home;
