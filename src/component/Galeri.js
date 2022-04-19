import Slider from "react-slick/lib/slider";
import "./Galeri.css";
import React, { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Galeri = () => {
  const [Datagaleri, setDatagaleri] = useState();
  const axios = require("axios");
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/image-galeri?instansi_id=12")
      .then(function (response) {
        // handle success
        console.log(response);
        setDatagaleri(response.data.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <Fragment>
      <div className="name-galeri-foto">
        <Container>
          <div className="bg-galeri-foto">
            <div className="text-galeri-foto">
              <h1>
                <strong>galeri Foto</strong>
              </h1>
            </div>

            <Slider {...settings}>
              {Datagaleri &&
                Datagaleri.map((item, index) => {
                  return item.image_galeri_item.map((itm, index) => {
                    return (
                      <Fragment ke y={index}>
                        <div className="width-full1">
                          <img src={itm.image_file_data} />
                        </div>
                      </Fragment>
                    );
                  });
                })}
            </Slider>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};
export default Galeri;