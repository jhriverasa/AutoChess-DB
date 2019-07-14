import React, { Component } from 'react';
import Figure from 'react-bootstrap/Figure';
class HeroFrame extends Component{

    render(){


        return(
            <Figure>
                <Figure.Image 
                    src={this.props.imgSrc}
                    alt={this.props.heroName}
                    width={75}
                    height = {75}
                    className = "HeroFrame-frame"
                    rounded
                    fluid
                />
                <Figure.Caption className= "HeroFrame-frame-caption">{this.props.heroName}</Figure.Caption>
              </Figure>
           
        )
        
    }

}

export default HeroFrame;