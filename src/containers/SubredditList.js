import {connect} from 'react-redux'

import TrackerList from '../components/TrackerList'
import { changePage } from '../actions/index'

const mapStateToProps = state => {
  return {
    trackers: state.trackers
  };
}

const mapDispatchtoProps = dispatch => { 
  return {
    changePage: (name, page) => {dispatch(changePage(name, page))}
  }
}

const SubredditList = connect(mapStateToProps, mapDispatchtoProps)(TrackerList);
export default SubredditList;