import React, {Component} from 'react';
import Figure from 'react-bootstrap/Figure';
import './newspage-styles.css'

class NewsFrame extends Component{

    render(){
        return (
            <div>
                <Figure >
                    <Figure.Image 
                        className = "NewsFrame-frame"
                        onMouseOver={this.handleOnMouseOver}
                        src={this.props.imgSrc}
                        alt={this.props.newsTitle}
                        width={450}
                        height = {800}                   
                        fluid
                        
                    />
                    <Figure.Caption className= "NewsFrame-frame-caption">{this.props.newsTitle}</Figure.Caption>
                </Figure>

                <Figure >
                    <Figure.Image 
                        className = "NewsFrame-frame"
                        onMouseOver={this.handleOnMouseOver}
                        src={this.props.imgSrc}
                        alt={this.props.newsTitle}
                        width={450}
                        height = {800}                  
                        fluid
                    />
                    <Figure.Caption className= "NewsFrame-frame-caption">{this.props.newsTitle}</Figure.Caption>
                </Figure>

                <Figure >
                    <Figure.Image 
                        className = "NewsFrame-frame"
                        onMouseOver={this.handleOnMouseOver}
                        src={this.props.imgSrc}
                        alt={this.props.newsTitle}
                        width={450}
                        height = {800}                 
                        fluid
                    />
                    <Figure.Caption className= "NewsFrame-frame-caption">{this.props.newsTitle}</Figure.Caption>
                </Figure>

                <Figure >
                    <Figure.Image 
                        className = "NewsFrame-frame"
                        onMouseOver={this.handleOnMouseOver}
                        src={this.props.imgSrc}
                        alt={this.props.newsTitle}
                        width={450}
                        height = {800}                   
                        fluid
                    />
                    <Figure.Caption className= "NewsFrame-frame-caption">{this.props.newsTitle}</Figure.Caption>
                </Figure>
            </div>
            
        );
    }

}

export default NewsFrame;
