import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Mahasiswa {
  id: number;
  nama: string;
  nim: string;
  jurusan: string;
  tanggal_lahir: string;
}

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
    tambahMahasiswa: (_state, _action: PayloadAction<Omit<Mahasiswa, 'id'>>) => {},
    updateMahasiswa: (_state, _action: PayloadAction<{ id: number; data: Omit<Mahasiswa, 'id'> }>) => {},
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
