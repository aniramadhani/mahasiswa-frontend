import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import mahasiswaReducer from './mahasiswa/mahasiswaSlice';
import mahasiswaSaga from './mahasiswa/mahasiswaSaga';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([mahasiswaSaga()]);
}

export const store = configureStore({
  reducer: {
    mahasiswa: mahasiswaReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
