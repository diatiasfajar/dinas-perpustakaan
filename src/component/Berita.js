import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import "./Berita.css";

const Berita = () => {
  const [DataBerita, setDataBerita] = useState([]); 

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios.get("http://adminmesuji.embuncode.com/api/news?instansi_id=2")
      .then(function (Berita) {
        // handle success
        console.log(Berita);
        setDataBerita(Berita.data.data.data);
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
    <Row><h1>Berita</h1>

      { DataBerita && DataBerita.map((item,index)=> {
        return (
          <Col className="bg-Berita" xs={3}>
           <Card>
                  <Card.Img
                    variant="top"
                    src={item.image_file_data} />
                  <Card.Body>
                    <Card.Title> <h4> <strong>{item.title}</strong></h4>
                    </Card.Title>
                  </Card.Body>
                  <Card.Text>
                    {item.intro}
                  </Card.Text>
                  <Card.Text>
                    <a href="">
                      <Button variant="warning"> Read More </Button>{" "}
                    </a>
                  </Card.Text>
                </Card>
                </Col>
        );
      })}
                </Row>
  );
};
export default Berita;
