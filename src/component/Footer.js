import { Card, Col, Row, Tabs, Tab, Button } from "react-bootstrap";
  import { Fragment, useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  
  
  const Footer = () => {
  const { id } = useParams();
  const [DataFooter, setDataFooter] = useState ([]);
  useEffect(() => {
    getData()
  },[]);
  
  function getData() {
    const axios = require('axios');
  
  // Make a request for a user with a given ID
  axios.get('http://adminmesuji.embuncode.com/api/instansi/detail/2')
  .then(function (Footer) {
    // handle success
    console.log(Footer);
    setDataFooter(Footer.data.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }
  
  return (
      <Fragment>
         { (DataFooter != null) ?
          <div className="footer">
          <Row className="bg-bawah">
            <Col className="container-text-footer" xs={12}>
              <Row>
                <Col xs={4}>
                <h3 className="footer-contain-text">KONTAK</h3>
                </Col>
                <Col xs={4} className="footer-contain footer-margin-left">
                  <h3 className="footer-contain-text">TENTANG</h3>
                  <ul className="footer-list-margin">
                    <li>
                      <a className="footer-href-text" href="">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="footer-href-text" href="">
                        Kepala Dinas
                      </a>
                    </li>
                    <li>
                      <a className="footer-href-text" href="">
                        Dokumen
                      </a>
                    </li>
                    <li>
                      <a className="footer-href-text" href="">
                        Wakil Kepala Dinas
                      </a>
                    </li>
                  </ul>
                </Col>
  
                <Col xs={4} className="footer-contain">
                  <h3 className="footer-contain-text">LOKASI</h3>
                  <iframe
                    className="maps"
                    src={DataFooter.google_map}
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </Col>
              </Row>
            </Col>
            <Col
              className="https://www.google.com/maps/place/Politeknik+Negeri+Lampung/@-5.3583787,105.2329506,15z/data=!4m12!1m6!3m5!1s0x0:0xe69b7788ca97353a!2sPoliteknik+Negeri+Lampung!8m2!3d-5.3583787!4d105.2329506!3m4!1s0x0:0xe69b7788ca97353a!8m2!3d-5.3583787!4d105.2329506"
              xs={12}
            >
              <Row>
                <Col xs={11} className="footer-contain text-cc">
                  2022 Copyright Dinas Perpustakaan dan Kearsipan Lampung Timur
                </Col>
               
              </Row>
            </Col>
          </Row>
        </div>
          : 
          '' }
      </Fragment> 
    
  )
  };
export default Footer;