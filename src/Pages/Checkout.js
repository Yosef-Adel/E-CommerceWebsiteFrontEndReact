import React from 'react'
import {Formik,Form, Field, ErrorMessage } from 'formik'
import { useSelector} from 'react-redux'
import * as Yup from 'yup'
import axios from 'axios'
import {  useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'
import classes from './Checkout.module.css'
const Checkout = () => {
    const history = useHistory();
    const dispatch = useDispatch();
  const Data=  useSelector(state => state);
    const initialValues = {
        username: "",
        adress : "",
        phone: ""
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema= Yup.object().shape({
        username: Yup.string().required("Write Your name") ,
        adress: Yup.string().min(3).required("Write Your address."),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Write Your Phone number")
        
    })
    const onSubmit = (data)=>{
        axios.post("http://localhost:3000/user",data).then((res)=>{
            const id =res.data;
            Data.map(p => {
                axios.post("http://localhost:3000/order",{UserId: id ,ProductId: p.id, count: p.count }).then((res)=>{
                    if(res.data !== "done"){
                        alert("something went wrong")
                    }
                })
            })
            dispatch({type: "delete"});
            history.push("/")
        })
    }

  return (
    <div className={classes.container}>
        <Formik initialValues={initialValues}  validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className={classes.form}>
                <label>Your Name</label>
                <ErrorMessage name='username' component="span"/>
                <Field className={classes.input}  name="username" autoComplete= "off"/>

                <label>Your address</label>
                <ErrorMessage name='adress' component="span"/>
                <Field  className={classes.input} name="adress" autoComplete= "off"/>
                
                <label>Your phone number</label>
                <ErrorMessage name='phone' component="span"/>
                <Field className={classes.input} name="phone" autoComplete= "off"/>
                
             <Button type='submit'> Checkout</Button>

            </Form>
        </Formik>
    </div>
  )
}

export default Checkout