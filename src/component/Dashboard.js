
import '../App.css';
import Header from "./Header";
import Routes from "react-router-dom";
import Slide from "./Slide";
import Berita from "./Berita";
import Artikel from "./Artikel";
import Galeri from "./Galeri";
import Footer from "./Footer";
import {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tentang from './Tentang';

function Dashboard() {
  return (
    <Fragment>
      <Slide />
      <Tentang />
      <Berita />
      <Artikel />
      <Galeri />
    </Fragment>
  );
};

export default Dashboard;
