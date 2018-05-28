import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import PaginatingPostList from '../containers/PaginatingPostList'
import styles from './styles/TrackerItem.css'

export default class TrackerItem extends PureComponent {
  render() {
    const {name, posts, page, changePage} = this.props;

    let element = (<div>
      <h1 className={styles.Title} >{name}</h1>
    </div>)

    return (
      <li className={styles.Item}>
          {element}
          <PaginatingPostList page={page} name={name} posts={posts}/>
          <div className={styles.Footer}>
            <button className={styles.Button} onClick={() => {changePage(name, page-1)}}>Last Page</button>
            <button className={styles.Button} onClick={() => changePage(name, page+1)}>Next Page</button>
          </div>
      </li>
    );
  }
}

TrackerItem.propTypes = {
  name: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
  }))
}