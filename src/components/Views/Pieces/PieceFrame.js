import React, { Component } from 'react';
import Figure from 'react-bootstrap/Figure';
class PieceFrame extends Component{
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
                    alt={this.props.PieceName}
                    width={100}
                    height = {100}
                    className = "PieceFrame-frame"
                    rounded
                    fluid
                />
                <Figure.Caption className= "PieceFrame-frame-caption">{this.props.PieceName}</Figure.Caption>
              </Figure>
           
        )
        
    }

}

export default PieceFrame;