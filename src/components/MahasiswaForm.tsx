import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tambahMahasiswa } from '../redux/mahasiswa/mahasiswaSlice';

const MahasiswaForm: React.FC = () => {
  const dispatch = useDispatch();
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dispatch ke Redux Saga
    dispatch(
      tambahMahasiswa({
        nama,
        nim,
        jurusan,
        tanggal_lahir: tanggalLahir,
      })
    );

    // Reset form
    setNama('');
    setNim('');
    setJurusan('');
    setTanggalLahir('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>➕ Tambah Mahasiswa</h2>
      <input
        type="text"
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="NIM"
        value={nim}
        onChange={(e) => setNim(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Jurusan"
        value={jurusan}
        onChange={(e) => setJurusan(e.target.value)}
        required
      />
      <input
        type="date"
        value={tanggalLahir}
        onChange={(e) => setTanggalLahir(e.target.value)}
        required
      />
      <button type="submit" className="btn add">Tambah</button>
    </form>
  );
};

export default MahasiswaForm;
