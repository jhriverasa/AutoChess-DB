import React, {Component} from 'react';
import PieceFrame from "./PieceFrame";
import * as utils from "../../../utility/utils.js";

import './pieces-styles.css';

class Pieces extends Component {
    

    render(){
        var dataPieces = require('../../../data/pieces.json')
        console.log(dataPieces);
        return (
            <div>
                {   
                    dataPieces.pieces.map((piece)=>{
                        return <PieceFrame 
                                    key={piece.data.Id}
                                    PieceName= {piece.data.Name} 
                                    imgSrc= {utils.getImgSrcFrame(piece.data.Name)}
                                />
                    })
                        
                }
            </div>
        )
    }

}


export default Pieces;