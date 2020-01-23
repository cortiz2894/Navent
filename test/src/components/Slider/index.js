import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';

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

    //https://reactjsexample.com/a-slider-which-uses-react-spring-under-the-hood/

	ArrowComponent({onClick, direction}){
		return (
			<div
				style={{
					border: '1px solid black',
					padding: '1em',
					backgroundColor: 'red'
				}}
				onClick={onClick}
			>
				{direction}
			</div>
		);
	};
  
    render() {
      return (
        <Slider 
            activeIndex={1}  
            hasBullets 
            BulletComponent={this.BulletComponent}
            ArrowComponent={this.ArrowComponent}
            onSlideChange={this.onSlideChange}
            >
                <div>child 1</div>
                <div>child 2</div>
                <div>child 3</div>
        </Slider>
      );
    }
  }
  
  export default SliderComponent;
