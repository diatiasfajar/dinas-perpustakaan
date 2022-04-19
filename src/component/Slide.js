import React from "react";
import { Fragment } from "react";
import "./Slide.css";
import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {
  return (
    <Fragment> 
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://scontent.fplm4-1.fna.fbcdn.net/v/t39.30808-6/243385589_228387939322763_4495161278653392197_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Eh1YtimpXs8AX-0OD0K&_nc_ht=scontent.fplm4-1.fna&oh=00_AT8aYWcW_F5NHV61LEumDxCkyEHVE7W5yzDO_MuzJB8xJw&oe=6249B9C9"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://1.bp.blogspot.com/-48aobji9bYg/X2cGmtiiY0I/AAAAAAAAFTY/tMquFDFxJ4EQKkoo4doEe---WZn56ZW7wCLcBGAsYHQ/s1040/0df5afca-72b1-4108-a9b4-39bb79827692.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://lh3.googleusercontent.com/p/AF1QipPMFhJnktzmWXBvoU9ngQsKSybpVVx5lD8XBBhD=s1600-w400"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </Fragment>
  );
};

  export default Slide;