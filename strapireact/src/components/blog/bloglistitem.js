import React from 'react';
import {Link} from 'react-router-dom';

const BlogListItem = ({ blogid, blogtitle, blogcontent, featuredimage, categories})=>{
  const category = categories.map((category)=>{
    return category.categoryname
  })
  return(
<div className="col-3">
  <div className="card border-secondary mb-3">
    <div className="card-header">{category}</div>
    <div className="card-body">
      <img width="100%" src={`http://localhost:1337${featuredimage.formats.medium.url}`} />
      <h4 className="card-title my-2">{blogtitle}</h4>
    </div>
    <Link to={`/single/${blogid}`} className="btn btn-primary btn-lg">more</Link>
  </div>
</div>
  )
}

export default BlogListItem;