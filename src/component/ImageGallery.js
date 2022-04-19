import React, { Fragment, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';

export const ImageGallery = (params) => {

    const [DataGallery, setDataGallery] = useState([]); 

    useEffect(() => {
        getData();
    }, [params]);

    function getData() {
        setDataGallery(null);
        const axios = require("axios");

        axios.get("http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=2")
        .then(function (response) {
            setDataGallery(response.data.data.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
    }

    return (
        <div className='main-container'>
            <Row className='text-center'>
                <Col xs={12}>
                    <h1>Gallery</h1>
                </Col>
                <Col xs={12}>
                    <Row className='mt-5 border-top pt-5'>
                        {
                            DataGallery && DataGallery.map((item, index) => {
                                return (
                                    <Fragment>
                                        {
                                            item.image_gallery_item && item.image_gallery_item.map((item_image, index_image) => {
                                                return (
                                                    <Col xs={3} className="mb-5">
                                                        <img className='gallery-image' src={item_image.image_file_data} alt=""/>
                                                        <h6 className='mt-3'>{item_image.description}</h6>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Fragment>
                                    
                                )
                            })
                        }
                    </Row>
                </Col>
                
            </Row>
        </div>
    )
};

export default ImageGallery;