import React, { Component } from 'react';
import Figure from 'react-bootstrap/Figure';
class HeroFrame extends Component{
    constructor(props){
        super(props);
        this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    }


    handleOnMouseOver(e){
        //e.preventDefault();
        console.log('Mouse over!');
    }

    render(){
        return(
            <Figure>
                <Figure.Image 
                    onMouseOver={this.handleOnMouseOver}
                    src={this.props.imgSrc}
                    alt={this.props.heroName}
                    width={100}
                    height = {100}
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