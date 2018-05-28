
// Loops over trackers and reduces appropriate one
export function trackersReducer(state, action) {
  if(action.type === 'ADD_TRACKER') {
    return [
        ...state.trackers,
        {
          name: action.name,
          page: 0,
          posts: []
        }
      ]
  } else { 
    return state.trackers.map( (tracker) => {
      if(tracker.name === action.name) {
        return trackerReducer(tracker, action);
      } else {
        return tracker;
      }
    })
  }
}

// reduces a singular tracker
function trackerReducer(state = {}, action) {
  switch(action.type) {
  case 'ADD_POST':
    return {
      ...state,
      posts: [
        ...state.posts,
        action.post
      ]
    }
  case 'CHANGE_PAGE':
    if(action.page < 0)
      action.page = 0;
    if(action.page * 5 >= state.posts.length)
      action.page = state.page;
    return {
        ...state,
        page: action.page
    }
  default:
    return state;
  }
}