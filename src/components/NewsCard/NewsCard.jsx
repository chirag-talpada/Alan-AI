import React from 'react';

import defaultImg from '../../assets/default.jpg';

const NewsCard = ({article:{ description,publishedAt,source,title,url,urlToImage },i}) => {
  
    const redirectPage=(link)=>{
        window.open(link,"_blank");
    }
  
    return (
    <div className="card" onClick={()=>redirectPage(url)}>
            <div className="glass"></div>
            <div className="card-img">
                <img src={urlToImage||defaultImg} alt="newsimg" />
            </div>
            <div className="card-line card-header">
                <div className="card-date">{(new Date(publishedAt)).toDateString()}</div>
                <div className="card-source">{source.name}</div>
            </div>
            <div className="box">
                <div className="card-headline">
                    {title}
                </div>
                <div className="card-description">
                    {description}
                </div>
            </div>
            <div className="card-line card-footer">
                <div className="card-link">LEARN MORE</div>
                <div className="card-number">{i+1}</div>
            </div>
    </div>
  )
}

export default NewsCard