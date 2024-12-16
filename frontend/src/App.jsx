import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage'; 
import User from './components/User'; 
import Pelanggan from './components/Pelanggan';
import Dashboard from './components/dashboard';
import Setoran from './components/Setoran';
import Transaksi from './components/Transaksi';
import RiwayatTransaksi from './components/RiwayatTransaksi';
import Tabungan from './components/Tabungan';
import Berteman from './components/Berteman';
import Postingan from './components/Postingan';
import PelangganList from './components/PelangganList';

fetch('http://127.0.0.1:8000')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => console.log(data)) 
  .catch(error => console.error("Error fetching data:", error)); 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/User" element={<User />} /> 
        <Route path="/Pelanggan" element={<Pelanggan />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/Setoran" element={<Setoran />} />
        <Route path="/Transaksi" element={<Transaksi/>} />  
        <Route path="/RiwayatTransaksi" element={<RiwayatTransaksi />} />
        <Route path="/Tabungan" element={<Tabungan />} />  
        <Route path="/Berteman" element={<Berteman />} /> 
        <Route path="/Postingan" element={<Postingan />} />
        <Route path="/PelangganList" element={<PelangganList />} />  
      </Routes>
    </Router>
  );
};

export default App;

