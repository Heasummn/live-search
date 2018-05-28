import PropTypes from 'prop-types';
import React from 'react'

import styles from './styles/TrackerList.css'
import TrackerItem from './TrackerItem'
import AddTracker from '../containers/AddTracker'

const TrackerList = (props) => (
  <ul className={styles.List}>
    {props.trackers.map((tracker, i) => {
      return <TrackerItem key={i} name={tracker.name} posts={tracker.posts} page={tracker.page} changePage={props.changePage} />
    })}
  <AddTracker />    
  </ul>
)

TrackerList.propTypes = {
  trackers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    page: PropTypes.number,
    posts: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.string,
    }))
  }))
}

export default TrackerList;