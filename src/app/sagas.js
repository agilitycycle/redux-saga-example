import {all} from 'redux-saga/effects';
import {
  signIn,
  signOut,
  getSubjects,
  updateEdit,
  updateMessage,
  updateControl,
  updateActive
} from './sagas/';

// watch all
export default function* rootSaga () {
  yield all([
    signIn(),
    signOut(),
    getSubjects(),
    updateEdit(),
    updateMessage(),
    updateControl(),
    updateActive()
  ])
}