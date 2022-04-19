import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Fragment } from "react";
import "./Tentang.css";

const Tentang = () => {
  return (
    <Fragment>
      <div className="bg-tentang">
        <h3>TENTANG</h3>
      </div>
      <br></br>

      <div className="nama-tentang">
        <div className="text-tentang">
          <p>
            {" "}
            Dinas Kearsipan dan Perpustakaan merupakan unsur pelaksana urusan
            pemerintahan bidang kearsipan dan perpustkaan yang dipimpin oleh
            Kepala Dinas, berkedudukan dibawah dan bertanggung jawab kepada
            bupati melalui Sekretaris Daerah.
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default Tentang;
