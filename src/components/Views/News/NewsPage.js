import React, {Component} from 'react';
import NewsFrame from './NewsFrame'
import './newspage-styles.css'

class NewsPage extends Component{
    render(){
        return (
            <div>
                <h1>News</h1>
                <NewsFrame
                    newsTitle= "Testing" 
                    imgSrc=  "./static/img/news-img/1.jpg"
                />
            </div>
        )
    }
}

export default NewsPage;