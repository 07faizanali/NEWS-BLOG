import React from 'react'
import image from '../assest/news.jpg'

const NewsItem = ({title, description, src, url}) => {
  return (

<div className="row d-flex justify-content-center mt-4" >
  <div className="col-md-8 col-lg-6  ">
    <div className="card">
      <div className="card-body ">
      <div className="d-flex justify-content-center">
      <img src={src?src:image} style={{height:"200px",width:"100%", objectFit:"cover"}} className="card-img-top mb-3" alt="..."/>
        </div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-justify">{description}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  </div>
  )
}

export default NewsItem