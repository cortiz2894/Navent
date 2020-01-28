import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from'@fortawesome/free-solid-svg-icons';
import HotelImg from '../../assets/img/hotel_1.jpg';
import HotelImg2 from '../../assets/img/hotel_2.jpg';


class SliderComponent extends React.Component {
    constructor(props) {
      super(props);   
    }

    componentDidMount() {}
  
    HandleValidateTerms() {
    }

    onSlideChange(index){
        console.log(`changed to slide ${index}`)  
    }

	ArrowComponent({onClick, direction}){
		return (
			<div
				style={{
          padding: '1em',
          cursor: 'pointer',
          marginTop: -20
				}}
				onClick={onClick}
			>
        {direction == 'left' ? (
          <FontAwesomeIcon className="arrow-slider" icon={faChevronLeft}></FontAwesomeIcon>
        ):(
          <FontAwesomeIcon className="arrow-slider" icon={faChevronRight}></FontAwesomeIcon>
        )}
				
			</div>
		);
  };

  
  
    render() {
      return (
        <Slider 
            activeIndex={2}  
            hasArrows
            ArrowComponent={this.ArrowComponent}
            onSlideChange={this.onSlideChange}
            >
            <img src={HotelImg} alt="asdas" />
            <img src={HotelImg2} alt="asdas" />
        </Slider>
      );
    }
 
  }

  
  export default SliderComponent;
