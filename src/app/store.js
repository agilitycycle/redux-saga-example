import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import authReducer from './slices/authSlice';
import activeReducer from './slices/activeSlice';
import controlReducer from './slices/controlSlice';
import subjectReducer from './slices/subjectSlice';
import messageReducer from './slices/messageSlice';
import editReducer from './slices/editSlice';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    active: activeReducer,
    edit: editReducer,
    subject: subjectReducer,
    control: controlReducer,
    message: messageReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);