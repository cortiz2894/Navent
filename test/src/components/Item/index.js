import React from 'react';
import './style.css';
import Slider from '../Slider'
import Modal from '../Modal'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


class ItemApartment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputPrice: '1.400.000',
        hideLabel: false,
        like: false,
      };
    }

    componentDidMount() {
        if(localStorage.getItem('price')){
            this.setState({
                inputPrice: localStorage.getItem('price')
            });
        }
        if(localStorage.getItem('like')){
            this.setState({
                like: localStorage.getItem('like')
            });
        }
    }

    showInput = () => {
        this.setState({
            hideLabel : true
        })
    }
    addLike = () => {
        if(this.state.like){
            this.setState({
                like : false
            });
            localStorage.setItem('like', 'false')
        }else{
            this.setState({
                like : true
            });
            localStorage.setItem('like', 'true')
        }
    } 
    changePrice = (e) =>{
        console.log(e.target.value)
        this.setState({
            inputPrice: e.target.value
        })
    }
    handleKeyDown = (e) => {
        if (e.key === 'Enter' && this.state.hideLabel == true) {
            this.setState({
                inputPrice: e.target.value,
                hideLabel: false
            })
            localStorage.setItem('price', this.state.inputPrice);
        }
    }
    
  
    showModal = () => {
        this.setState({
            openModal: true
        });
    }

    render() {
      return (
        <Card >
        <CardContent className="item-list">
          <div className="container-img-carousel">
            <div
            className={`heart-liked  ${this.state.like}`} 
            onClick={this.addLike}

            >
                <FontAwesomeIcon icon={faHeart} ></FontAwesomeIcon>
            </div>
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
                {!this.state.hideLabel ?(
                    <Typography className="price" 
                    onClick={this.showInput}>
                        U$S {this.state.inputPrice}
                    </Typography>
                ):(
                    <Input 
                    placeholder="Ingrese un precio" 
                    value={this.state.inputPrice} 
                    onChange={this.changePrice}
                    onKeyDown={this.handleKeyDown}
                    type="number"
                    >
                    </Input>
                )}
                
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
              <Button size="small" onClick={this.showModal}>CONTACTAR</Button>
            </CardActions>
          </div>
        </CardContent>
        {this.state.openModal ?(
            <Modal></Modal>
        ):null}
      </Card>
      );
    }
 
  }

  
  export default ItemApartment;
