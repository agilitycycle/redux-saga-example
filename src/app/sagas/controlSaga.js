import {takeEvery} from 'redux-saga/effects'
import {updateControl as updateControlSaga} from '../slices/controlSlice';

function* updateControl () {
  yield takeEvery(updateControlSaga.type, () => {
    // nothing to do
  })
}

export default updateControl;