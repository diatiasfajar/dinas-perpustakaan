import Slider from "react-slick/lib/slider";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const VideoGallery = () => {
  const [Datagaleri, setDatagaleri] = useState();
  const axios = require("axios");
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=2")
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
            <Row className='text-center'>
                <Col xs={12} className="mb-5 border-bottom pb-3 pt-5">
                    <h1>Video Gallery</h1>
                </Col>
                {
                    Datagaleri && Datagaleri.map((item, index) => {
                        return (
                            <Fragment>
                                {
                                    item.image_gallery_item && item.image_gallery_item.map((video_item, video_index) => {
                                        return (
                                            <Col xs={3} className="mb-4">
                                                <iframe id='player' type='text/html' src={`https://www.youtube.com/embed/${video_item.video_url}?`} className='player-wrapper' style={{ width: "100%", height: "100%" }} frameBorder='0'></iframe>
                                            </Col>
                                        )
                                    })
                                }
                            </Fragment>
                        )
                    })
                }
            </Row>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};
export default VideoGallery;