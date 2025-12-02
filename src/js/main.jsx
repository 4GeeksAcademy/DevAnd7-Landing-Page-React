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
          title="Chocolatería San Ginés"
          text="Un clásico de Madrid: abierta desde 1894, es famosa por su chocolate con churros."
          img="https://chocolateriasangines.com/wp-content/uploads/2014/06/DSC3480_II.jpg"
          button="Enlace directo"
          link="https://chocolateriasangines.com/" />
        <Card
          title="The Fix Madrid"
          text="Una de las cafeterías modernas más destacadas de Madrid, especializada en café de especialidad."
          img="https://images.squarespace-cdn.com/content/v1/5eb940f410abba405f6ce980/1651596504952-91VRUW0LDQVO5VFFP9CE/THEFIX_MERCHAN_2022_ESTATICO_1.jpg?format=1500w"
          button="Enlace directo"
          link="https://www.thefixmadrid.com/" />
        <Card
          title="Hola Coffee"
          text="Referencia del café de especialidad en Madrid: aparece en rankings nacionales e internacionales como una de las mejores cafeterías de la ciudad."
          img="https://hola.coffee/cdn/shop/files/Carrousel-2.jpg?v=1750921312"
          button="Enlace directo"
          link="https://hola.coffee/" />
        <Card
          title="Pans Granier"
          text="Granier nació en 2010 en Vilanova i la Geltrú (Barcelona) de la mano de Juan Pedro Conde, quien quería recuperar el sabor tradicional del pan artesanal y combinarlo con el ambiente de una cafetería."
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8c/1f/45/entrance.jpg?w=1400&h=-1&s=1"
          button="Enlace directo"
          link="https://pansgranier.com/" />
      </div>
    </div>
  </React.StrictMode>,
)
