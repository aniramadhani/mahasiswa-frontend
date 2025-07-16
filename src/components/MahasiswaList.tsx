import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  fetchMahasiswa,
  deleteMahasiswa as deleteMahasiswaAction,
} from '../redux/mahasiswa/mahasiswaSlice';
import type { Mahasiswa } from '../api/mahasiswa';
import MahasiswaForm from './MahasiswaForm';
import MahasiswaEditForm from './MahasiswaEditForm';

const MahasiswaList: React.FC = () => {
  const dispatch = useDispatch();
  const mahasiswa = useSelector((state: RootState) => state.mahasiswa.data);
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchMahasiswa());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    if (confirm('Yakin ingin menghapus data ini?')) {
      dispatch(deleteMahasiswaAction(id));
    }
  };

  const handleEditFinish = () => {
    setEditId(null);
  };

  return (
    <>
      <MahasiswaForm />

      <div className="list">
        {mahasiswa.length === 0 ? (
          <p className="empty">Belum ada mahasiswa.</p>
        ) : (
          mahasiswa.map((mhs) => (
            <div key={mhs.id} className="card">
              <div style={{ flex: 1 }}>
                {editId === mhs.id ? (
                  <MahasiswaEditForm
                    mahasiswa={mhs}
                    onUpdated={handleEditFinish}
                    onCancel={() => setEditId(null)}
                  />
                ) : (
                  <>
                    <h3>{mhs.nama}</h3>
                    <p><strong>NIM:</strong> {mhs.nim}</p>
                    <p><strong>Jurusan:</strong> {mhs.jurusan}</p>
                    <p><strong>Lahir:</strong> {mhs.tanggal_lahir}</p>
                  </>
                )}
              </div>
              {editId !== mhs.id && (
                <div>
                  <button
                    className="btn delete"
                    onClick={() => handleDelete(mhs.id)}
                    style={{ marginRight: '0.5rem' }}
                  >
                    Hapus
                  </button>
                  <button
                    className="btn add"
                    onClick={() => setEditId(mhs.id)}
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default MahasiswaList;
