import { takeEvery } from 'redux-saga/effects'
import { addChannel } from './sockets'

const handleNewTracker = function* handleNewTracker(params) {
  yield takeEvery('ADD_TRACKER', (action) => {
    addChannel(params.socket, params.store, action.name);
  })
}

export default handleNewTracker;