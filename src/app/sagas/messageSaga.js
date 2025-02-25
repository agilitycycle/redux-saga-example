import {takeEvery, put} from 'redux-saga/effects'
import {
  signIn as signInSaga,
  signOut as signOutSaga
} from '../slices/authSlice';
import {updateEdit as updateEditSaga} from '../slices/editSlice';
import {updateControl as updateControlSaga} from '../slices/controlSlice';
import {updateActive as updateActiveSaga} from '../slices/activeSlice';
import {
  getSubjects as getSubjectsSaga,
  subjectsLoaded as subjectsLoadedSaga
} from '../slices/subjectSlice';
import {updateMessage as updateMessageSaga} from '../slices/messageSlice';

function* message (newMessageLog) {
  yield put(updateMessageSaga(newMessageLog));
}

function* updateMessage () {
  yield takeEvery(signInSaga.type, () => message('User signed in'));
  yield takeEvery(signOutSaga.type, () => message('User signed out'));
  yield takeEvery(updateEditSaga.type, () => message('Update edit settings'));
  yield takeEvery(updateActiveSaga.type, () => message('Update active'));
  yield takeEvery(getSubjectsSaga.type, () => message('Get subjects'));
  yield takeEvery(subjectsLoadedSaga.type, () => message('Subjects loaded'));
  yield takeEvery(updateControlSaga.type, () => message('Update controls'));
}

export default updateMessage;