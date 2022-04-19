import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import "./HalamanStatis.css";
import { useParams } from "react-router-dom";

const HalamanStatis = () => {
  let params = useParams();
  
  const [DataHalamanStatis, setDataHalamanStatis] = useState([]); 

  useEffect(() => {
    getData();
  }, [params]);

  function getData() {
    setDataHalamanStatis(null);
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios.get("http://adminmesuji.embuncode.com/api/static-page/" + params.id)
      .then(function (HalamanStatis) {
        // handle success
        console.log(HalamanStatis);
        setDataHalamanStatis(HalamanStatis.data.data);
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
    <Row>{(DataHalamanStatis != null) ? 
    <h1 className="mt-5 mb-5 bg-black text-white">{DataHalamanStatis.content}</h1> 
    : ''}</Row>
  );
};
export default HalamanStatis;
