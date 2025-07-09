import React, { useState } from 'react';
import { createMahasiswa } from '../api/mahasiswa';

const MahasiswaForm: React.FC<{ onCreated: () => void }> = ({ onCreated }) => {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createMahasiswa({ nama, nim, jurusan, tanggal_lahir: tanggalLahir });
    setNama('');
    setNim('');
    setJurusan('');
    setTanggalLahir('');
    onCreated();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>➕ Tambah Mahasiswa</h2>
      <input type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} required />
      <input type="text" placeholder="NIM" value={nim} onChange={(e) => setNim(e.target.value)} required />
      <input type="text" placeholder="Jurusan" value={jurusan} onChange={(e) => setJurusan(e.target.value)} required />
      <input type="date" value={tanggalLahir} onChange={(e) => setTanggalLahir(e.target.value)} required />
      <button type="submit" className="btn add">Tambah</button>
    </form>
  );
};

export default MahasiswaForm;
