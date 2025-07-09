import React, { useState } from 'react';
import { updateMahasiswa } from '../api/mahasiswa';
import type { Mahasiswa } from '../api/mahasiswa';

interface MahasiswaEditFormProps {
  mahasiswa: Mahasiswa;
  onUpdated: () => void;
  onCancel: () => void;
}

const MahasiswaEditForm: React.FC<MahasiswaEditFormProps> = ({ mahasiswa, onUpdated, onCancel }) => {
  const [nama, setNama] = useState(mahasiswa.nama);
  const [nim, setNim] = useState(mahasiswa.nim);
  const [jurusan, setJurusan] = useState(mahasiswa.jurusan);
  const [tanggalLahir, setTanggalLahir] = useState(mahasiswa.tanggal_lahir);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateMahasiswa(mahasiswa.id, {
        nama,
        nim,
        jurusan,
        tanggal_lahir: tanggalLahir,
      });
      onUpdated();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <h3>Edit Mahasiswa</h3>
      <div>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          value={jurusan}
          onChange={(e) => setJurusan(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Tanggal Lahir:</label>
        <input
          type="date"
          value={tanggalLahir}
          onChange={(e) => setTanggalLahir(e.target.value)}
          required
        />
      </div>
      <button type="submit">Simpan Perubahan</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: '1rem' }}>
        Batal
      </button>
    </form>
  );
};

export default MahasiswaEditForm;
