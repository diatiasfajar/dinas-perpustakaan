import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Fragment, useEffect} from "react";
import "./ListArtikel.css";
import { getDefaultNormalizer } from "@testing-library/react";
import { Link } from "react-router-dom";
const ListArtikel = () => {
  const [DataArtikel, setDataArtikel] = useState([]); 

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios.get("http://adminmesuji.embuncode.com/api/article?instansi_id=2")
      .then(function (response) {
        // handle success
        console.log(response);
        setDataArtikel(response.data.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  function handleTextLength(value, valueLength) {
      if (value.length > valueLength) {
          return value.substring(0, valueLength) + ' ...';
      } else {
        return value;
      }
  }

  return (
    <div className="main-container">
      <Row>
        <h1>Artikel</h1>
        { DataArtikel && DataArtikel.map((item,index)=> {
          return (
            <Col className="bg-artikel mb-5" xs={3}>
				<Card>
					<Card.Img variant="top" src={item.image_file_data} />
					<div className="card-body height-fix-list">
						<Card.Title> <h4> <strong>{handleTextLength(item.title, 80)}</strong></h4></Card.Title>
						<p dangerouslySetInnerHTML={{__html: handleTextLength(item.content, 150)}}></p>
						<Link to={'/artikel_detail/' + item.id}><Button variant="warning"> Selanjutnya </Button></Link>{" "}
					</div>
				</Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default ListArtikel;
