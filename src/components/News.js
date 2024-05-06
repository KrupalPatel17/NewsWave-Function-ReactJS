import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import './News.css';
// import Spinner from './Spinner';
import Loaders from './Loaders';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loding, setLoding] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)



    const capitalizedLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoding(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoding(false)
        props.setProgress(100);

    }

    useEffect(() => {
        document.title = `${capitalizedLetter(props.category)} - NewsWave`;
        updateNews();
    }, [])


    const handlePreviousClick = async () => {
        setPage(page - 1)
        updateNews();
    }

    const handleNextClick = async () => {
        setPage(page + 1)
        updateNews();
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a5a2acbbf45647a3a75d2dc1051a4fdd&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };


    return (
        <>
            <h1 className="text-center mt-5 pt-5" style={{ color: props.mode === 'light' ? 'black' : 'white', fontFamily: "serif" }}><i><b>News Wave - Top {capitalizedLetter(props.category)} Headlines</b></i></h1>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loaders />}
            >

                <div className="container">

                    <div className="row">

                        {loding && <Loaders />}

                        {articles.map((element) => {
                            return <div className="col-md-4 " key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} mode={props.mode} />
                            </div>
                        })}
                    </div>
                </div>

            </InfiniteScroll>

        </>

    )

}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',

};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}


export default News
