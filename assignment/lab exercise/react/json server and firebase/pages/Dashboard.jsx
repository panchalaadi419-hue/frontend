import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();
  const usersCollection = collection(db, 'users');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getDocs(usersCollection);
    setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateDoc(doc(db, 'users', editId), { name });
      setEditId(null);
    } else {
      await addDoc(usersCollection, { name });
    }
    setName('');
    fetchUsers();
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEditId(user.id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'users', id));
    fetchUsers();
  };

  const logout = async () => {
    await auth.signOut();
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome, {auth.currentUser?.email || 'User'}</h2>
      <button onClick={logout}>Logout</button>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="User name"
        />
        <button type="submit">{editId ? 'Update' : 'Add'} User</button>
      </form>

      <ul>
        {users.map((user) =>
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
