import React from 'react';
import '../index.css';

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date } = props;
        return (
            <div className="my-3">
                <div className="card" style={{height: '550px'}}>
                     <img style={{height: '250px', objectFit: 'cover'}}  src={!imageUrl? "https://avatars.mds.yandex.net/i?id=f43ae07250cb87e1e1a6bdd936eed6360c9db3c5-10558413-images-thumbs&n=13" : imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem