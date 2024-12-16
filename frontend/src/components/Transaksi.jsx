import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  nav: {
    listStyleType: 'none',
    padding: 0,
  },
  activeLink: {
    fontSize: '18px',
    color: '#333',
    textDecoration: 'none',
    marginBottom: '15px',
    display: 'block',
  },
  footer: {
    backgroundColor: '#28A745',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '20px',
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '16px',
  },
};

const TransactionPage = () => {
  return (
    <div>
      {/* Inline CSS */}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: Georgia, 'Times New Roman', Times, serif;
            background-color: #ffffff;
            color: #333;
          }
          .header {
            background-color: #28A745;
            color: #ffffff;
            text-align: center;
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
          }
          .container {
            display: flex;
            min-height: calc(100vh - 200px);
          }
          .sidebar {
            background-color: #ffffff;
            width: 300px;
            padding: 30px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
            height: 100%;
            border-radius: 10px;
          }
          .sidebar .profile {
            text-align: center;
            margin-bottom: 40px;
          }
          .sidebar .profile img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin-bottom: 15px;
          }
          .sidebar .profile p {
            font-weight: bold;
            color: #28A745;
          }
          .main {
            flex: 1;
            padding: 40px;
          }
          .main .section-header {
            background-color: #28A745;
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            font-size: 1.5em;
            font-weight: bold;
          }
          .transaction-details {
            background-color: #28A745;
            border-radius: 10px;
            padding: 30px;
            margin-top: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            color: #ffffff;
          }
          .transaction-details p {
            font-size: 18px;
            margin: 15px 0;
          }
          .transaction-details p span {
            font-weight: bold;
          }
          .transaction-details .status-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #ffffff;
            color: #000000;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
          }
        `}
      </style>

      {/* Header */}
      <header className="header">GoSampah</header>

      {/* Container */}
      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="profile">
            <img src="Ellipse 16.png" alt="Profile" />
            <p>Tyka Nurul Indi</p>
            <a href="#">Ubah profil</a>
          </div>
          <nav>
            <ul style={styles.nav}>
              <li><Link to="/dashboard" style={styles.activeLink}>Dashboard</Link></li>
              <li><Link to="/setoran" style={styles.activeLink}>Setoran</Link></li>
              <li><Link to="/transaksi" style={styles.activeLink}>Transaksi</Link></li>
              <li><Link to="/riwayat-transaksi" style={styles.activeLink}>Riwayat Transaksi</Link></li>
              <li><Link to="/tabungan" style={styles.activeLink}>Tabungan</Link></li>
              <li><Link to="/teman" style={styles.activeLink}>Teman</Link></li>
              <li><Link to="/postingan" style={styles.activeLink}>Postingan</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main">
          <div className="section-header">Transaksi</div>
          <div className="transaction-details">
            <p><span>Nama:</span> Tyka Nurul Indi</p>
            <p><span>Lokasi:</span> Lokasi 1 (Jl Gunung Muria No. 07 desa Jatirejo)</p>
            <p><span>Jenis Sampah:</span> Sampah Kardus</p>
            <p><span>Berat Sampah:</span> 10 Kg</p>
            <p>
              <span>Status:</span> 
              <button className="status-button">Proses</button>
            </p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <nav>
          <Link to="/" style={styles.footerLink}>Home</Link>
          <Link to="/profil" style={styles.footerLink}>Profil</Link>
          <Link to="/alur" style={styles.footerLink}>Alur</Link>
          <Link to="/hubungi" style={styles.footerLink}>Hubungi Kami</Link>
        </nav>
        <p>&copy; 2024 GoSampah. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default TransactionPage;
