export function getImgSrcFrame(pieceName){
    var imgSrc = "./static/img/heroframes/heroes-"+ replaceAll(pieceName," ","").toLowerCase() + "-medium-frame.jpg";
    //console.log(imgSrc);
    return imgSrc;
} 

export function replaceAll(str, search, replacement){
    var target = str;
    return target.split(search).join(replacement);
}
