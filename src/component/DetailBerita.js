import { Fragment, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./DetailBerita.css";

const DetailBerita = () => {
  const [DetailBerita, setDetailBerita] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("http://adminmesuji.embuncode.com/api/news/" + id)
      .then(function (response) {
        // handle success
        setDetailBerita(response.data.data);
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
    <div className="main-container">
		{
			(DetailBerita != null) ? 
			<Row className="container text-center ">
				<Col xs={12}>
					<img className="gambar-detail-Artikel radius-10 mb-4" src={DetailBerita.image_file_data} />
				</Col>
				<Col xs={12} className="text-left pb-5">
					<h2 className="title-detail-Artikel mb-4 border-bottom pb-4">{DetailBerita.title}</h2>
					<p dangerouslySetInnerHTML={{ __html: DetailBerita.content }}></p>
				</Col>
			</Row> : ''
		}
    </div>
  );
};

export default DetailBerita;