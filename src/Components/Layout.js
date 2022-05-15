import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../imgs/1.jpg'
import img2 from '../imgs/2.jpg'
const Layout = () => {
  return (
  <div>
<Carousel fade  controls={false} interval={5000} indicators= {false}>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
        />
        
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
        />
    </Carousel.Item>
  
</Carousel>

  </div>
  );
};

export default Layout;
