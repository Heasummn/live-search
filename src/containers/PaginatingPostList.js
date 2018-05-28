import {connect} from 'react-redux'

import PostList from '../components/PostList'


const getVisiblePosts = (posts, page) => {
  const postsPerPage = 5;
  return posts.filter( (post, index) => {
    return (index >= page * postsPerPage) && (index < (page + 1) * postsPerPage);
  })
}


const mapStateToProps = (state, ownProps) => {
  return {
    posts: getVisiblePosts(ownProps.posts, ownProps.page)
  }
}

const PaginatingList = connect(mapStateToProps)(PostList);
export default PaginatingList;