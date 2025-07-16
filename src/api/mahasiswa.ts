import axios from 'axios';

// DEFINISI TYPE
export interface Mahasiswa {
  id: number;
  nama: string;
  nim: string;
  jurusan: string;
  tanggal_lahir: string;
}

// BASE URL API Laravel kamu
const API_URL = 'http://localhost:8000/api';

// Ambil semua mahasiswa
export const getMahasiswa = async (): Promise<Mahasiswa[]> => {
  const response = await axios.get(`${API_URL}/mahasiswa`);
  return response.data;
};

// Tambah mahasiswa
export const createMahasiswa = async (data: Omit<Mahasiswa, 'id'>): Promise<Mahasiswa> => {
  const response = await axios.post(`${API_URL}/mahasiswa`, data);
  return response.data;
};

// Update mahasiswa
export const updateMahasiswa = async (id: number, data: Omit<Mahasiswa, 'id'>): Promise<Mahasiswa> => {
  const response = await axios.put(`${API_URL}/mahasiswa/${id}`, data);
  return response.data;
};

// Hapus mahasiswa
export const deleteMahasiswa = async (id: number): Promise<{ message: string }> => {
  const response = await axios.delete(`${API_URL}/mahasiswa/${id}`);
  return response.data;
};
