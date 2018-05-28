import { trackersReducer } from './trackers'
const initialState =  {
  trackers: []
}

export default function reducer(state = initialState, action) {
  return {
    trackers: trackersReducer(state, action)
  }
}