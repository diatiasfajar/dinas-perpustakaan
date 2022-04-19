import React, { Fragment, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";

export const DetailDokumen = (params) => {

    const [DataDokumen, setDataDokumen] = useState([]); 
    const { slug } = useParams();
    useEffect(() => {
        getData();  
    }, []);

    function getData() {
        const axios = require("axios");

        axios.get("http://adminmesuji.embuncode.com/api/dokumen/" + slug)
        .then(function (response) {
            setDataDokumen(response.data.data);
        })
        .catch(function (error) {
        })
        .then(function () {
        });
    }

    return (
        <div className='main-container'>
            <Row>
                <Col xs={12} className="text-center mb-5">
                    <h1>Detail Dokumen</h1>
                </Col>
            </Row>
            
            {
                DataDokumen && DataDokumen.map((item, index) => {
                    return (
                        <Fragment>
                            <p className='mb-0 pb-0'>{item.nama_dokumen}</p>
                            <span className='text-lights mb-4'>{item.description_dokumen}</span>
                            <iframe className='iframe-pdf mt-2' src={`data:application/pdf;base64,${item.dokumen_file_data}`} title="title">
                                Presss me: <a href={`data:application/pdf;base64,${item.dokumen_file_data}`}>Download PDF</a>
                            </iframe>
                        </Fragment>
                    )
                })
            }
        </div>
        
    )
};

export default DetailDokumen;