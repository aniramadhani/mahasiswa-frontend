import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Mahasiswa } from '../../api/mahasiswa';

interface MahasiswaState {
  data: Mahasiswa[];
  loading: boolean;
  error: string | null;
}

const initialState: MahasiswaState = {
  data: [],
  loading: false,
  error: null,
};

const mahasiswaSlice = createSlice({
  name: 'mahasiswa',
  initialState,
  reducers: {
    // Ambil data
    fetchMahasiswa: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMahasiswaSuccess: (state, action: PayloadAction<Mahasiswa[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchMahasiswaFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Tambah data (di-handle oleh saga)
    tambahMahasiswa: (_state, _action: PayloadAction<Omit<Mahasiswa, 'id'>>) => {},

    // Update data (untuk saga)
    updateMahasiswa: (
      _state,
      _action: PayloadAction<{ id: number; data: Omit<Mahasiswa, 'id'> }>
    ) => {},

    // Delete data (untuk saga)
    deleteMahasiswa: (_state, _action: PayloadAction<number>) => {},
  },
});

export const {
  fetchMahasiswa,
  fetchMahasiswaSuccess,
  fetchMahasiswaFailure,
  tambahMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} = mahasiswaSlice.actions;

export default mahasiswaSlice.reducer;
