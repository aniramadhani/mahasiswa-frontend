import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { Mahasiswa } from '../api/mahasiswa';
import { updateMahasiswa as updateMahasiswaAction } from '../redux/mahasiswa/mahasiswaSlice';

interface MahasiswaEditFormProps {
  mahasiswa: Mahasiswa;
  onUpdated: () => void;
  onCancel: () => void;
}

const MahasiswaEditForm: React.FC<MahasiswaEditFormProps> = ({ mahasiswa, onUpdated, onCancel }) => {
  const dispatch = useDispatch();

  const [nama, setNama] = useState(mahasiswa.nama);
  const [nim, setNim] = useState(mahasiswa.nim);
  const [jurusan, setJurusan] = useState(mahasiswa.jurusan);
  const [tanggalLahir, setTanggalLahir] = useState(mahasiswa.tanggal_lahir);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      updateMahasiswaAction({
        id: mahasiswa.id,
        data: {
          nama,
          nim,
          jurusan,
          tanggal_lahir: tanggalLahir,
        },
      })
    );

    onUpdated(); // bisa kasih loading atau callback setelah update selesai
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
