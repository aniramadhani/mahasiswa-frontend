import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchMahasiswa,
  fetchMahasiswaSuccess,
  fetchMahasiswaFailure,
  tambahMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} from './mahasiswaSlice';

import * as api from '../../api/mahasiswa';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Mahasiswa } from '../../api/mahasiswa';

function* handleFetchMahasiswa() {
  try {
    const data: Mahasiswa[] = yield call(api.getMahasiswa);
    yield put(fetchMahasiswaSuccess(data));
  } catch (err: any) {
    yield put(fetchMahasiswaFailure(err.message));
  }
}

function* handleTambahMahasiswa(action: PayloadAction<Omit<Mahasiswa, 'id'>>) {
  try {
    yield call(api.createMahasiswa, action.payload);
    yield put(fetchMahasiswa());
  } catch (err) {
    console.error('Gagal menambahkan mahasiswa', err);
  }
}

function* handleUpdateMahasiswa(action: PayloadAction<{ id: number; data: Omit<Mahasiswa, 'id'> }>) {
  try {
    yield call(api.updateMahasiswa, action.payload.id, action.payload.data);
    yield put(fetchMahasiswa());
  } catch (err) {
    console.error('Gagal mengupdate mahasiswa', err);
  }
}

function* handleDeleteMahasiswa(action: PayloadAction<number>) {
  try {
    yield call(api.deleteMahasiswa, action.payload);
    yield put(fetchMahasiswa());
  } catch (err) {
    console.error('Gagal menghapus mahasiswa', err);
  }
}

export default function* mahasiswaSaga() {
  yield takeEvery(fetchMahasiswa.type, handleFetchMahasiswa);
  yield takeEvery(tambahMahasiswa.type, handleTambahMahasiswa);
  yield takeEvery(updateMahasiswa.type, handleUpdateMahasiswa);
  yield takeEvery(deleteMahasiswa.type, handleDeleteMahasiswa);
}
