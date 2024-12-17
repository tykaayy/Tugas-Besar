import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/Group 8834.png";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
  sidebar: {
    width: "220px",
    backgroundColor: "#fff",
    padding: "20px",
    flexShrink: 0,
    borderRight: "1px solid #ddd",
  },
  profileSection: { textAlign: "center", marginBottom: "20px" },
  profileImage: { width: "80px", borderRadius: "50%", marginBottom: "10px" },
  navLink: {
    display: "block",
    padding: "10px 0",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "none",
  },
  activeLink: { fontWeight: "bold", color: "#000" },
  mainContent: {
    flexGrow: 1,
    padding: "30px",
    backgroundColor: "#f8fdf4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fcfcfc",
    padding: "20px 30px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
  },
  label: { marginBottom: "5px", fontWeight: "bold", display: "block" },
  button: {
    marginTop: "10px",
    backgroundColor: "#2f8d46",
    color: "#fff",
    padding: "10px",
    width: "100px",
    borderRadius: "5px",
    textAlign: "center",
    border: "none",
    cursor: "pointer",
  },
  footer: {
    backgroundColor: "#2E7D32",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    position: "relative",
    bottom: 0,
    width: "100%",
  },
  footerLink: {
    color: "#fff",
    margin: "0 10px",
    textDecoration: "none",
  },
  header: {
    backgroundColor: "#2E7D32",
    padding: "10px",
    textAlign: "center",
  },
};

const TransactionPage = () => {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.profileSection}>
          <img src={profile} alt="profile" style={styles.profileImage} />
          <h3>Tyka Nurul Indi</h3>
          <Link to="/profile" style={{ textDecoration: "none", color: "#2f8d46" }}>
            Lihat profil
          </Link>
        </div>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/Dashboard" style={styles.navLink}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/Setoran" style={styles.navLink}>
                Setoran
              </Link>
            </li>
            <li>
              <Link to="/Transaksi" style={{ ...styles.navLink, ...styles.activeLink }}>
                Transaksi
              </Link>
            </li>
            <li>
              <Link to="/RiwayatTransaksi" style={styles.navLink}>
                Riwayat Transaksi
              </Link>
            </li>
            <li>
              <Link to="/Tabungan" style={styles.navLink}>
                Tabungan
              </Link>
            </li>
            <li>
              <Link to="/Berteman" style={styles.navLink}>
                Teman
              </Link>
            </li>
            <li>
              <Link to="/Postingan" style={styles.navLink}>
                Postingan
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.card}>
          <h2 style={{ textAlign: "center", color: "#2f8d46" }}>Detail Transaksi</h2>
          <p style={styles.label}>
            <strong>Nama:</strong> Tyka Nurul Indi
          </p>
          <p style={styles.label}>
            <strong>Lokasi:</strong> Lokasi 1 (Jl Gunung Muria No. 07 desa Jatirejo)
          </p>
          <p style={styles.label}>
            <strong>Jenis Sampah:</strong> Sampah Kardus
          </p>
          <p style={styles.label}>
            <strong>Berat Sampah:</strong> 10 Kg
          </p>
          <p style={styles.label}>
            <strong>Status:</strong>{" "}
            <button style={styles.button}>Proses</button>
          </p>
        </div>
      </main>

    </div>
  );
};

export default TransactionPage;
