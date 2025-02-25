import {takeEvery} from 'redux-saga/effects'
import {updateEdit as updateEditSaga} from '../slices/editSlice';

function* updateEdit () {
  yield takeEvery(updateEditSaga.type, () => {
    // nothing to do
  })
}

export default updateEdit;