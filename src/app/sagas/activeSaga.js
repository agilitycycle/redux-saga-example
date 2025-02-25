import {takeEvery} from 'redux-saga/effects'
import {updateActive as updateActiveSaga} from '../slices/activeSlice';

function* updateActive () {
  yield takeEvery(updateActiveSaga.type, () => {
    // nothing to do
  })
}

export default updateActive;