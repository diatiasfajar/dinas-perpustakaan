import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Fragment, useEffect} from "react";
import "./Artikel.css";
import { getDefaultNormalizer } from "@testing-library/react";

const Artikel = () => {
  const [DataArtikel, setDataArtikel] = useState([]); 

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios.get("http://adminmesuji.embuncode.com/api/article?instansi_id=2")
      .then(function (Artikel) {
        // handle success
        console.log(Artikel);
        setDataArtikel(Artikel.data.data.data);
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
    <Row>
      <h1>Artikel</h1>
      { DataArtikel && DataArtikel.map((item,index)=> {
        return (
          <Col className="bg-artikel" xs={3}>
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
export default Artikel;
