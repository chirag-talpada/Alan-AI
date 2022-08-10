import React from 'react'

import NewsCard from '../NewsCard/NewsCard';

const NewsCards = ({articles}) => {
  return (
    <div className='newscard-grid'>
        {articles.map((article,i)=>(<NewsCard article={article} i={i}/>))}
    </div>
  )
}

export default NewsCards