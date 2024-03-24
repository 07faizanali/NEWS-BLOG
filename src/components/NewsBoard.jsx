import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {

  

  const [articles, setArticles] = useState([]);
    
    useEffect(()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=e12bf53ca5dc42939f30b38a2a8e69c9`;
      fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
    },[category])
  
  return (
    <div>
      <h2 className='text-center mt-2'>Latest <span className='badge bg-dark'>News</span></h2>
      {articles.map((news, index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

export default NewsBoard