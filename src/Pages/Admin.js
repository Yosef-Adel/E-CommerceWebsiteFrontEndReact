import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import {Form, Field, ErrorMessage } from 'formik'
import classes from './Admin.module.css'
import * as Yup from 'yup'
import Button from 'react-bootstrap/Button'
import AdminProduct from '../Components/AdminProduct'
import Order from '../Components/Order'
const Admin = () => {
    const [ fieldValue,setFieldValue]= useState([])
    const [err,setErr] = useState("");
    const [insert, setInsert] = useState(false)
    const [show,setShow] = useState(false)
    const [showo,setShowo] = useState(false)

    const [products, setProducts] =useState([]);
    const [ordered,serOrdered] = useState([])
    useEffect(()=>{
      axios.get("http://localhost:3000/product").then((res)=>{
        setProducts(res.data);
      })

      axios.get("http://localhost:3000/order").then((res)=>{
    
          var sortedOrders= res.data.reduce((obj,value)=>{
              let key = value.order.UserId;
              if (obj[key]!= null){
                  obj[key].push(value);
              }else{
                  obj[key] =[];
                  obj[key].push(value);
              }
              return obj;
          },{});
          serOrdered(sortedOrders)
      })
    },[show]);
    const initialValues =  {
        entitle: "",
        endescriptiontitle: "",
        endescription : "",
        eningredients: "",
        price: 0,
        
    }
    const validationSchema= Yup.object().shape({
        entitle: Yup.string().required("You have to write a title"),
        endescriptiontitle: Yup.string().required("You have to write a disc..") ,
        endescription: Yup.string().required("You have to write a disc..") ,
        eningredients: Yup.string().required("You have to write a disc..") ,
        price: Yup.number().required("You have to write a disc..") ,
        
    })

    const onSubmit =(data)=>{
        if(fieldValue.length === 0){
            setErr("insert photo")
        }else{
            
            const formData = new FormData();
            formData.append("file", fieldValue)
            formData.append("upload_preset", "u6zqpeir")
            axios.post("https://api.cloudinary.com/v1_1/YourDomain/image/upload", formData).then((res)=>{
                let Data = data;
                Data.image = res.data.url
                
                axios.post("http://localhost:3000/product", Data).then((res)=>{
                    if(res.data === "done"){
                        window.location.reload();
                    }else{
                        console.log(res);
                    }
                })
            })
        }
       
    }


  return (
  <div className={classes.all} >
      <Button className= {classes.btn} onClick={() => setInsert(!insert)}> <h4>Add product</h4></Button>
      { 
      insert && 
      <div className={classes.container}>
      <Formik initialValues={initialValues}  validationSchema={validationSchema} onSubmit={onSubmit}  >
          <Form className= {classes.formCon} >
              <label>Title</label>
              <ErrorMessage name='entitle' component="span"/>
              <Field  as= "textarea" className={classes.paragraph}  name="entitle" placeholder= "" autoComplete= "off"/>

              <label>discription Title</label>
              <ErrorMessage name='endescriptiontitle' component="span"/>
              <Field as= "textarea"  className={classes.paragraph}  name="endescriptiontitle" placeholder= "" autoComplete= "off"/>

              <label>discription </label>
              <ErrorMessage name='endescription' component="span"/>
              <Field as= "textarea" className={classes.paragraph}   name="endescription" placeholder= "" autoComplete= "off"/>

              <label> ingredients</label>
              <ErrorMessage name='eningredients' component="span"/>
              <Field as= "textarea" className={classes.paragraph}   name="eningredients" placeholder= "" autoComplete= "off"/>

              <label> price</label>
              <ErrorMessage name='price' component="span"/>
              <Field  className={classes.title}  name="price" placeholder= "" autoComplete= "off"/>

              <label> image</label>
              {err&& <span>{err}</span>}
              <input id="file" name="imge" type="file" onChange={(event) => {
              setFieldValue(event.currentTarget.files[0]);
              }} />
             <Button type='submit'> <h4>Submit</h4></Button>
              
          </Form>
      </Formik>

  </div>
}
<Button className= {classes.btn} onClick={() => setShow(!show)}><h4>Show ALL Product</h4></Button>
{
    show && 
    <div className= { classes.products}>
{ products.map(p => <AdminProduct product={p}  key={p.id}/> )}
    </div>
}

<Button className= {classes.btn} onClick={() => setShowo(!showo)}><h4>Show ALL Orders</h4></Button>

{showo&&  ordered &&


Object.keys(ordered).map((key,i)=> (
    <Order key ={i} order={ordered[key]} ID= {key}/>
))

}
  </div>
  )
}

export default Admin