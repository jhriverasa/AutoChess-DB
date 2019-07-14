import React, { Component } from 'react';

class Footer extends Component{

    
    render(){
        
        return (
            
            <footer>
                <br></br>
                <img 
                    src= "./static/img/contact/facebook-logo.svg"
                    height = "60"
                    width = "50"
                    alt= "Facebook"
                ></img>
                <img 
                    src= "./static/img/contact/twitter-logo.svg"
                    height = "60"
                    width = "50"
                    alt= "Twitter"
                ></img>
                <img 
                    src= "./static/img/contact/autochess-logo.png"
                    height = "60"
                    width = "100"
                    alt= "Autochess"
                ></img>
                
            </footer>

            
        
        );
    }
}

export default Footer;