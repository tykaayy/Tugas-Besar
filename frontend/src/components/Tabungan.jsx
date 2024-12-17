import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/Group 8834.png';

const Tabungan = () => {
  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8fdf4",
    },
    sidebar: {
      width: "220px",
      backgroundColor: "#fff",
      padding: "20px",
      borderRight: "1px solid #ddd",
    },
    profileSection: {
      textAlign: "center",
      marginBottom: "20px",
    },
    profileImage: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      marginBottom: "10px",
    },
    profileLink: {
      textDecoration: "none",
      color: "#2f8d46",
      fontSize: "14px",
      fontWeight: "bold",
    },
    navLink: {
      display: "block",
      color: "#333",
      textDecoration: "none",
      padding: "10px 0",
      fontWeight: "bold",
      transition: "0.2s",
    },
    activeLink: {
      color: "#2f8d46",
    },
    navLinkHover: {
      color: "#2f8d46",
    },
    mainContent: {
      flexGrow: 1,
      padding: "30px",
    },
    sectionHeader: {
      textAlign: "center",
      fontSize: "24px",
      color: "#2f8d46",
      marginBottom: "20px",
    },
    tableContainer: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      padding: "10px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      padding: "10px",
      textAlign: "center",
      backgroundColor: "#2f8d46",
      color: "white",
    },
    td: {
      padding: "10px",
      textAlign: "center",
      borderBottom: "1px solid #ddd",
    },
    rowEven: {
      backgroundColor: "#f8fdf4",
    },
    rowHover: {
      backgroundColor: "#e0f0d9",
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.profileSection}>
          <img src={profile} alt="Profile" style={styles.profileImage} />
          <h3>Tyka Nurul Indi</h3>
          <Link to="/profile" style={styles.profileLink}>Lihat profil</Link>
        </div>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/dashboard" style={styles.navLink}>Dasboard</Link>
            </li>
            <li>
              <Link to="/Setoran" style={styles.navLink}>
                Setoran
              </Link>
            </li>
            <li>
              <Link to="/Transaksi" style={styles.navLink}>Transaksi</Link>
            </li>
            <li>
              <Link to="/RiwayatTransaksi" style={styles.navLink}>Riwayat Transaksi</Link>
            </li>
            <li>
              <Link to="/Tabungan" style={{ ...styles.navLink, ...styles.activeLink }}>Tabungan</Link>
            </li>
            <li>
              <Link to="/Teman" style={styles.navLink}>Teman</Link>
            </li>
            <li>
              <Link to="/Postingan" style={styles.navLink}>Postingan</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <h2 style={styles.sectionHeader}>Tabungan</h2>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Tanggal</th>
                <th style={styles.th}>Nama</th>
                <th style={styles.th}>Debit</th>
                <th style={styles.th}>Kredit</th>
                <th style={styles.th}>Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr style={styles.rowEven}>
                <td style={styles.td}>29/11/2024</td>
                <td style={styles.td}>Tyka Nurul Indi</td>
                <td style={styles.td}>5.500</td>
                <td style={styles.td}>-</td>
                <td style={styles.td}>5.500</td>
              </tr>
              <tr>
                <td style={styles.td}>30/11/2024</td>
                <td style={styles.td}>Tyka Nurul Indi</td>
                <td style={styles.td}>-</td>
                <td style={styles.td}>2.000</td>
                <td style={styles.td}>3.500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Tabungan;
