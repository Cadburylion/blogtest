import React from 'react'
import './style.scss'

const BlogField = (props) => {
  return (
    <div className='blog-field'>
      {props.children}
    </div>
  )
}

export default BlogField
