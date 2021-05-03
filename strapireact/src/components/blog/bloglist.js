import React from 'react';
import fetch from 'isomorphic-fetch';
import BlogListItem from '../blog/bloglistitem';
class BlogList extends React.Component{
  constructor(){
    super()
    this.state={
      blogs: []
    }
  }
  componentWillMount(){
    fetch('http://localhost:1337/blogs').then((response)=> {
      if(response.status >= 400){
        throw new Error("Bad Response From Server");
      }
      return response.json();
    }).then((blogs)=>{
      this.setState({blogs: blogs})
    })
  }
  render(){
    return(
      <div>
        <div className="container">
              <div className="row">
        {
          this.state.blogs.map(({id, blogtitle, blogcontent, featuredimage, categories})=>(
            
                <BlogListItem key ={id} blogid={id} blogtitle={blogtitle} blogcontent={blogcontent} featuredimage={featuredimage} categories={categories} />

          ))
          
        }
            </div>
        </div>
      </div>
    )
  }
}

export default BlogList;