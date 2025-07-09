import React, { useEffect, useState } from 'react';
import { getMahasiswa, deleteMahasiswa } from '../api/mahasiswa';
import type { Mahasiswa } from '../api/mahasiswa';
import MahasiswaForm from './MahasiswaForm';
import MahasiswaEditForm from './MahasiswaEditForm';

const MahasiswaList: React.FC = () => {
  const [mahasiswa, setMahasiswa] = useState<Mahasiswa[]>([]);

  const loadData = () => {
    getMahasiswa().then(setMahasiswa).catch(console.error);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm('Yakin ingin menghapus data ini?')) {
      await deleteMahasiswa(id);
      loadData();
    }
  };

  return (
    <>
      <MahasiswaForm onCreated={loadData} />
      <div className="list">
        {mahasiswa.length === 0 ? (
          <p className="empty">Belum ada mahasiswa.</p>
        ) : (
          mahasiswa.map((mhs) => (
            <div key={mhs.id} className="card">
              <div>
                <h3>{mhs.nama}</h3>
                <p><strong>NIM:</strong> {mhs.nim}</p>
                <p><strong>Jurusan:</strong> {mhs.jurusan}</p>
                <p><strong>Lahir:</strong> {mhs.tanggal_lahir}</p>
              </div>
              <button className="btn delete" onClick={() => handleDelete(mhs.id)}>Hapus</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default MahasiswaList;
