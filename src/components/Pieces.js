import React, {Component} from 'react';
import HeroFrame from "./HeroFrame";
import * as utils from "../utility/utils.js";

class Pieces extends Component {
    

    render(){
        var dataPieces = require('../data/pieces.json')
        console.log(dataPieces);
        return (
            <div>
                {   
                    dataPieces.pieces.map((piece)=>{
                        return <HeroFrame 
                                    key={piece.data.name}
                                    heroName= {piece.data.Name} 
                                    imgSrc= {utils.getImgSrcFrame(piece.data.Name)}
                                />
                    })
                        
                }
            </div>
        )
    }

}


export default Pieces;