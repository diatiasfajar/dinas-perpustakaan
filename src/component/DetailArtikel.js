import { Fragment, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./DetailArtikel.css";

const DetailArtikel = () => {
  const [DetailArtikel, setDetailArtikel] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("http://adminmesuji.embuncode.com/api/article/" + id)
      .then(function (response) {
        // handle success
        setDetailArtikel(response.data.data);
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
    <div className="container">
		{
			(DetailArtikel != null) ? 
			<Row className="container">
				<Col xs={12}>
					<img className="gambar-detail-Artikel" src={DetailArtikel.image_file_data} />
				</Col>
				<Col xs={12} className="text-left">
					<h4 className="title-detail-Artikel">{DetailArtikel.title}</h4>
					<p dangerouslySetInnerHTML={{ __html: DetailArtikel.content }}></p>
				</Col>
			</Row> : ''
		}
    </div>
  );
};

export default DetailArtikel;