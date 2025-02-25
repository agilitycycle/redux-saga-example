import {takeEvery} from 'redux-saga/effects'
import {
  signIn as signInSaga,
  signOut as signOutSaga
} from '../slices/authSlice';

function* signIn () {
  yield takeEvery(signInSaga.type, () => {
    // nothing to do
  })
}

function* signOut () {
  yield takeEvery(signOutSaga.type, () => {
    // nothing to do
  })
}

export {
  signIn,
  signOut
};