import React, { Fragment, useEffect, useState    } from 'react'
import { Alert, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ListDokumen = (params) => {

    const [DataDokumen, setDataDokumen] = useState([]); 

    useEffect(() => {
        getData();  
    }, []);

    function getData() {
        const axios = require("axios");

        axios.get("http://adminmesuji.embuncode.com/api/dokumen?instansi_id=13&per_page=3")
        .then(function (response) {
            setDataDokumen(response.data.data.data);
        })
        .catch(function (error) {
        })
        .then(function () {
        });
    }

    return (
        <div className="main-container">
            <Row>
                <Col xs={12} className="text-center mb-5"><h1>Dokumen</h1></Col>
                <Col xs={12}>

                    {
                        DataDokumen && DataDokumen.map((item, index) => {
                            return (
                                <Fragment>
                                    <Link to={'/dokumen_detail/' + item.slug}>
                                        <Alert variant="dark">
                                            <Alert.Heading className="">{item.name}</Alert.Heading>
                                            <p className='text-lights mb-0 text-decoration-none'>
                                                {item.description}
                                            </p>
                                        </Alert>
                                    </Link>
                                </Fragment>
                                
                            )
                        })
                    }
                </Col>
            </Row>
        </div>
    )
};