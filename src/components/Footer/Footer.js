import React, { Component } from 'react';

class Footer extends Component{

    
    render(){
        
        return (
            
            <footer>

                <a href = "https://www.facebook.com/Auto-Chess-411330109632159/">
                    <img className="footerBtn"
                        src= "./static/img/contact/facebook-logo.svg"
                        height = "60"
                        width = "50"
                        alt= "Facebook"
                    ></img>
                </a>

                <a href = "https://twitter.com/AutoChess2019?lang=es">
                    <img className="footerBtn"
                        src= "./static/img/contact/twitter-logo.svg"
                        height = "60"
                        width = "50"
                        alt= "Twitter"
                    ></img>
                </a>

                <a href = "https://www.zizouqi.com/en.html">
                    <img className="footerBtn"
                        src= "./static/img/contact/autochess-logo.png"
                        height = "60"
                        width = "100"
                        alt= "Autochess"
                ></img>
                </a>

                <h3>Unofficial Site </h3>
            </footer>

            
        
        );
    }
}

export default Footer;