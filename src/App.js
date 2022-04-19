
import './App.css';
import Header from "./component/Header";
import { Routes, Route, Link } from "react-router-dom";

import Berita from "./component/Berita";
import Artikel from "./component/Artikel";
import Galeri from "./component/Galeri";
import Footer from "./component/Footer";
import {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './component/Dashboard';
import HalamanStatis from './component/HalamanStatis';
import DetailArtikel from './component/DetailArtikel';
import ListArtikel from './component/ListArtikel';

function App() {
  return (
    <Fragment>
      <div className='bg-1'>
      <Header />
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="berita" element={<Berita />} />
        <Route path="/artikel" element={<ListArtikel />} />
        <Route path="static/:id" element={<HalamanStatis />} />
        <Route path="/artikel_detail/:id" element={<DetailArtikel />} />
      </Routes>

      <Footer />
      </div>
    </Fragment>
  );
};

export default App;
