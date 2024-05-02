import React, { Component } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import './News.css';

// import Spinner from './Spinner';
import { Loaders } from './Loaders';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 15,
        category: 'general',

    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalizedLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loding: false,
            page: 1
        }
        document.title= `${this.capitalizedLetter(this.props.category)} - NewsWave`;
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a5a2acbbf45647a3a75d2dc1051a4fdd&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loding: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loding: false })
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a5a2acbbf45647a3a75d2dc1051a4fdd&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loding: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,
        //     loding: false })

        this.updateNews();
    }

    handlePreviousClick = async () => {

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a5a2acbbf45647a3a75d2dc1051a4fdd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loding: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();

        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loding: false
        // })

        this.setState({page: this.state.page - 1});
        this.updateNews();
    }

    handleNextClick = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a5a2acbbf45647a3a75d2dc1051a4fdd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loding: true });
        //     let data = await fetch(url);
        //     let parsedData = await data.json();

        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //          loding: false
        //     })
        // }

        this.setState({page: this.state.page + 1});
        this.updateNews();
    }

    render() {
        return (
            <div className='container my-5 pt-5'>
                <h1 className="text-center" style={{ color: this.props.mode === 'light' ? 'black' : 'white', fontFamily: "serif" }}><i><b>News Wave - Top {this.capitalizedLetter(this.props.category)} Headlines</b></i></h1>
                <div className="row">
                    {!this.state.loding && this.state.articles.map((element) => {
                        return <div className="col-md-4 " key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}mode={this.props.mode} />
                        </div>
                    })}
                </div>
                    {this.state.loding && <Loaders/>}
                <div className="container d-flex justify-content-between">
                    
                    <button disabled={this.state.page <= 1} type="button" className={`btn  btnx btn-${this.props.mode === 'light' ? 'secondary' : 'dark'}`} onClick={this.handlePreviousClick}> &#8592; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className={`btn  btnx btn-${this.props.mode === 'light' ? 'secondary' : 'dark'}`} onClick={this.handleNextClick}>Next &rarr;</button>

                </div>

            </div>

        )
    }
}

export default News
