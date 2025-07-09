import axios from 'axios';

// DEFINISI TYPE
export interface Mahasiswa {
  id: number;
  nama: string;
  nim: string;
  jurusan: string;
  tanggal_lahir: string; // HARUS ADA karena di backend required
}

// URL API Laravel kamu
const API_URL = 'http://localhost:8000/api';

// GET /api/mahasiswa
export const getMahasiswa = async (): Promise<Mahasiswa[]> => {
  const response = await axios.get(`${API_URL}/mahasiswa`);
  return response.data;
};

// POST /api/mahasiswa
export const createMahasiswa = async (data: Omit<Mahasiswa, 'id'>) => {
  const response = await axios.post(`${API_URL}/mahasiswa`, data);
  return response.data;
};

// PUT /api/mahasiswa/{id}
export const updateMahasiswa = async (id: number, data: Omit<Mahasiswa, 'id'>) => {
  const response = await axios.put(`${API_URL}/mahasiswa/${id}`, data);
  return response.data;
};

// DELETE /api/mahasiswa/{id}
export const deleteMahasiswa = async (id: number) => {
  const response = await axios.delete(`${API_URL}/mahasiswa/${id}`);
  return response.data;
};
