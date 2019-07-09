import React, { Component } from 'react';
import Figure from 'react-bootstrap/Figure';

class HeroFrame extends Component{

    render(){


        return(
            <Figure>
            <Figure.Image 
                width={75}
                height = {75}
                alt={this.props.heroName}
                src={this.props.imgSrc}
            />
            <Figure.Caption>
                {this.props.heroName}
            </Figure.Caption>
            </Figure>
        )
        
    }

}

export default HeroFrame;