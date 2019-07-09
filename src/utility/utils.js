export function getImgSrcFrame(pieceName){
    //fix routes
    var imgSrc = "./static/img/heroframes/heroes-"+ pieceName.replace(" ","").toLowerCase() + "-medium-frame.jpg";
    console.log(imgSrc);
    return imgSrc;
} 