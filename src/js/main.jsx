import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <div className='container'>
      <Jumbotron />
      <div className="container d-flex justify-content-between">
        <Card
          title="Youtube"
          button="Enlace directo"
          link="https://www.youtube.com/" />
        <Card
          title="TikTok"
          button="Enlace directo"
          link="https://www.tiktok.com/" />
        <Card
          title="Instagram"
          button="Enlace directo"
          link="https://www.instagram.com/" />
        <Card
          title="X"
          button="Enlace directo"
          link="https://x.com/" />
      </div>
    </div>
  </React.StrictMode>,
)
