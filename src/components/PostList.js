import React from 'react'
import PropTypes from 'prop-types'

import PostItem from './PostItem'

const PostList = (props) => {
  return (
    <div>
      <ul>
        {props.posts.map((post, i) => {
          return <PostItem key={post.id} author={post.author} title={post.title} url={post.url}/>
        })}
      </ul>
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
  }))
}

export default PostList;