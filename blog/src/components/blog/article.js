import React from 'react'
import './style.scss'

const Article = ({article, time}) => {
  return (
    <div className='blog-wrapper'>
      <div className='blog-image'>
        {time}
        <img src={article.thumbnail} alt='blog article thumbnail' />
      </div>
      <a href={article.link} target='_#' className='blog-title'>{article.title}</a>
      <a href={article.link} target='_#' className='blog-link'>Continue reading...</a>
    </div>
  )
}

export default Article
