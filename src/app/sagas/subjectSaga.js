import {takeEvery, put} from 'redux-saga/effects'
import {
  getSubjects as getSubjectsSaga,
  subjectsLoaded
} from '../slices/subjectSlice';

function* loaded () {
  yield put(subjectsLoaded())
}

function* getSubjects () {
  yield takeEvery(getSubjectsSaga.type, loaded)
}

export default getSubjects;