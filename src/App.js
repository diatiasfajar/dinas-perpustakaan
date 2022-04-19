
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
import DetailBerita from './component/DetailBerita';
import ListArtikel from './component/ListArtikel';
import ListBerita from './component/ListBerita';
import ImageGallery from './component/ImageGallery';
import VideoGallery from './component/VideoGallery';
import { ListDokumen } from './component/ListDokumen';
import DetailDokumen from './component/DetailDokumen';

function App() {
  return (
    <Fragment>
      <div className='bg-1'>
      <Header />
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/berita" element={<ListBerita />} />
        <Route path="/artikel" element={<ListArtikel />} />
        <Route path="static/:id" element={<HalamanStatis />} />
        <Route path="/artikel_detail/:id" element={<DetailArtikel />} />
        <Route path="/berita_detail/:id" element={<DetailBerita />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/dokumen" element={<ListDokumen />} />
        <Route path="/dokumen_detail/:slug" element={<DetailDokumen />} />
      </Routes>

      
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
