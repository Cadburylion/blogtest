import React from 'react'
import './style.scss'

const BlogField = (props) => {
  return (
    <div className='blog-field'>
      <h1 className='blog-title'>
        {props.title}
      </h1>
      <div className='blog-content'>
        {props.children}
      </div>
    </div>
  )
}

export default BlogField
