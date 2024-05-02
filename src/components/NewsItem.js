import React, { Component } from 'react'
import './NewsItem.css';

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props;

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 1); 
        const isoDateYesterday = currentDate.toISOString().split('T')[0];
        const dateOnly = date.split('T')[0];


        const isNewArticle = isoDateYesterday === dateOnly;



        return (
            <div className='my-3'>
                <div className="card" style={{ color: this.props.mode === 'light' ? 'black' : 'white', backgroundColor: this.props.mode === 'dark' ? 'black' : 'white' }}>
                    {isNewArticle && (
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "100%" }}>
                            New
                            <span className="visually-hidden"></span>
                        </span>
                    )}
                    <img src={!imageUrl ? "Altt.png" : imageUrl} className="card-img-top" alt="img"  height={"200vh"} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text des">{!description ? "This News Has No Description To Show Here. Click on 'Read More' for details." : description}</p>
                        <p className="card-text"><small className="">By {!author ? "Unknown" : author}</small> <br />
                        <small className=""> On {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className={`btn read btn-sm`} style={{ color: this.props.mode === 'light' ? 'black' : 'white' }} target='_blank' rel="noopener noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        );
    }


}


export default NewsItem
