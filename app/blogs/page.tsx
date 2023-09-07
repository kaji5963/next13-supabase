import React from 'react'
import RouterBtn from '../components/router-btn'

const BlogPage = () => {
  return (
    <div className="m-10 text-center">
      <span className="text-lg">Click a title on the left to view detail</span>
      <div className="my-4 flex justify-center">
        <RouterBtn />
      </div>
    </div>
  )
}

export default BlogPage
