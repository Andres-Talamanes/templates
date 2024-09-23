import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase/firebase.js';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        navigate('/login');
      })
      .catch((error) => {
        console.error("Error al cerrar sesión: ", error);
      });
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </aside>
      <main className="dashboard-content">
        <h1>Bienvenido al Dashboard</h1>
      </main>
    </div>
  );
};

export default Dashboard;
