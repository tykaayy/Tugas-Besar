
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom
import logo from '../assets/LOGO.png';
import profilePicture from '../assets/Group 8834.png';

function Tabungan() {
  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>GoSampah</h1>
      </header>

      {/* Content Wrapper */}
      <div style={styles.contentContainer}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.profileSection}>
            <img
              src={profilePicture}
              alt="Profile"
              style={styles.profilePicture} // Diperbaiki dari styles.profileImage
            />
            <h3 style={styles.profileName}>Tyka Nurul Indi</h3>
            <p style={styles.profileAction}>Ubah profil</p>
          </div>
          <nav style={styles.nav}>
            <ul style={styles.navMenu}>
              <li style={styles.navItem}>
                <Link to="/dashboard" style={styles.activeLink}>
                  Dasbord
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/Setoran" style={styles.activeLink}>
                  Setoran
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/Transaksi" style={styles.activeLink}>
                  Transaksi
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/RiwayatTransaksi" style={styles.activeLink}>
                  Riwayat Transaksi
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/Tabungan" style={styles.activeLink}>
                  Tabungan
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/Bereman" style={styles.activeLink}>
                  Teman
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/Postingan" style={styles.activeLink}>
                  Postingan
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={styles.mainContent}>
          {/* Tabungan Header */}
          <div style={styles.tabunganHeader}>
            <h2 style={styles.sectionTitle}>Tabungan</h2>
          </div>

          {/* Table */}
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableHeader}>
                  <th>Tanggal</th>
                  <th>Nama</th>
                  <th>Debit</th>
                  <th>Kredit</th>
                  <th>Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr style={styles.tableRow}>
                  <td>29/11/2024</td>
                  <td>Tyka Nurul Indi</td>
                  <td>5.500</td>
                  <td>-</td>
                  <td>5.500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <nav>
          <Link to="/" style={styles.footerLink}>
            Home
          </Link>
          <Link to="/profil" style={styles.footerLink}>
            Profil
          </Link>
          <Link to="/alur" style={styles.footerLink}>
            Alur
          </Link>
          <Link to="/hubungi" style={styles.footerLink}>
            Hubungi Kami
          </Link>
        </nav>
        <p style={styles.footerText}>&copy; 2024 GoSampah. All Rights Reserved</p>
      </footer>
    </div>
  );
}

const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    color: '#000',
  },
  header: {
    backgroundColor: '#238B45',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  headerTitle: {
    margin: 0,
    fontSize: '28px',
    fontWeight: 'bold',
  },
  contentContainer: {
    display: 'flex',
  },
  sidebar: {
    width: '25%',
    padding: '20px',
    backgroundColor: '#fff',
    borderRight: '1px solid #ddd',
    minHeight: '500px',
  },
  profileSection: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  profileImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  profileName: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  profileAction: {
    color: '#777',
    cursor: 'pointer',
    fontSize: '14px',
  },
  navMenu: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    marginBottom: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  mainContent: {
    flexGrow: 1,
    padding: '20px',
    backgroundColor: '#E9F5E9',
  },
  tabunganHeader: {
    backgroundColor: '#238B45',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '5px',
  },
  sectionTitle: {
    margin: 0,
    fontSize: '20px',
  },
  tableContainer: {
    marginTop: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'center',
  },
  tableHeader: {
    backgroundColor: '#238B45',
    color: '#fff',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  footer: {
    backgroundColor: '#238B45',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    marginTop: '20px',
  },
  footerLogo: {
    width: '50px',
    marginBottom: '10px',
  },
  footerMenu: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    padding: 0,
    marginBottom: '10px',
  },
  footerLink: {
    margin: '0 15px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  footerText: {
    margin: 0,
    fontSize: '14px',
  },
};

export default Tabungan;