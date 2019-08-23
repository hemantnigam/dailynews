// eslint-disable-next-line

import React from 'react';
import './ContentComponent.css';

class ContentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }
    componentDidMount() {
        let { selectedMenu, apiKey } = this.props;
        const URI = `https://newsapi.org/v2/${selectedMenu}?country=us&apiKey=${apiKey}`
        fetch(URI)
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
                    articles: result.articles
                })
            })
    }
    render() {
        const articles = this.state.articles;
        const artileList = articles.map((article, index) => {
            return (
                <li key={index}>
                    <div className="image">
                        <img src={article.urlToImage} alt=""/>
                    </div>
                    <div className="description">
                        <div className="articleTitle">{article.title}</div>
                        <div className="content">{article.content || article.description}</div>
                        <a className="url" target="_blank" rel="noopener noreferrer" href={article.url}>Read More</a>
                    </div>
                </li>
            )
        })
        return (
            <div className="container">
                <ul>{artileList}</ul>
            </div>
        )
    }
}

export default ContentComponent;