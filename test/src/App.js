import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

      <header className="App-header">
        
      </header>
      <div className="general-container">
          <Card >
            <CardContent className="item-list">
              <div className="container-img-carousel">
                  <FontAwesomeIcon className="heart-liked" icon={faHeart}></FontAwesomeIcon>
                <Slider></Slider>
              </div>
              <div className="container-info">
                <Typography className="title-item">Si vas a utilizar un pasaje de Lorem Ipsum, necesitás esta izar un pasaje de Lorem Ipsum, necesitás esta</Typography>
                <div className="ubication-title">
                  <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                  <p>Juan Francisco Seguí 3900, Palermo Chico, Palermo</p>
                </div>
                <Typography className="description">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de
texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el
año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
                </Typography>
                <div className="price-info">
                  <Typography className="price">U$S 1.400.000</Typography>
                  <Typography className="sub-price">$/m23.680</Typography>
                </div>
                <CardActions className="footer-item">
                  <div className="amenities-content">
                    <ul>
                      <li>380 m2</li>
                      <li>3 Dormitorios</li>
                      <li>2 Baños</li>
                      <li>2 Cocheras</li>
                    </ul>
                  </div>
                  <Button size="small">CONTACTAR</Button>
                </CardActions>
              </div>
              
            </CardContent>
          </Card>
      </div>
    </div>
  );
}

export default App;
