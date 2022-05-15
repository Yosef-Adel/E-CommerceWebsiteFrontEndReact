import React from 'react'
import logo from '../imgs/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import classes from './Fotter.module.css'
const Fotter = () => {
  return (
    <div className={classes.Fotter}>
        <div className={classes.contact}>
        <h5>BE IN TOUCH WITH US:</h5>
        <div>
            <a href='https://www.facebook.com/Manuka-Health-Egypt-242089731085023/'> <FacebookIcon/></a>
            <a href='https://www.instagram.com/manukahealth.egypt/'> <InstagramIcon/></a>
        </div>
        </div>
        <div className={classes.data}>
            <h5>CONTACT US</h5>
            <p>PHONE: 01050002532</p>
            <p>E-MAIL: manukahealthegypt@gmail.com</p>
        </div>
 

    </div>
  )
}

export default Fotter