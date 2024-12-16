import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/Group 8834.png"; 

// Halaman Dashboard
const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch data pengguna
  useEffect(() => {
    fetch("http://127.0.0.1:8000/User")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>GoSampah</h1>
      </header>

      {/* Kontainer Utama */}
      <div style={styles.contentWrapper}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.profileSection}>
            <img src="profile" alt="profile" style={styles.profile}/>
            <h3 style={styles.userName}>{userData.name || "Tyka Nurul Indi"}</h3>
            <Link to="/profile" style={styles.profileLink}>
              Ubah profil
            </Link>
          </div>
          <nav style={styles.nav}>
            <ul>
              <li>
                <Link to="/dashboard" style={styles.activeLink}>
                  Dasbord
                </Link>
              </li>
              <li>
                <Link to="/Setoran" style={styles.activeLink}>Setoran</Link>
              </li>
              <li>
                <Link to="/Transaksi" style={styles.activeLink}>Transaksi</Link>
              </li>
              <li>
                <Link to="/RiwayatTransaksi" style={styles.activeLink}>Riwayat Transaksi</Link>
              </li>
              <li>
                <Link to="/Tabungan" style={styles.activeLink}>Tabungan</Link>
              </li>
              <li>
                <Link to="/Bereman" style={styles.activeLink}>Teman</Link>
              </li>
              <li>
                <Link to="/Postingan" style={styles.activeLink}>Postingan</Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={styles.mainContent}>
          <h2 style={styles.sectionTitle}>Dasbord</h2>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Tentang Aplikasi</h3>
            <p style={styles.cardText}>
              GoSampah adalah platform inovatif yang dirancang untuk mempermudah
              pengelolaan sampah secara berkelanjutan sekaligus memberikan manfaat
              finansial. Bergabunglah dengan kami untuk mendukung lingkungan yang lebih hijau!
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

// Gaya CSS-in-JS
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#2E7D32",
    padding: "10px 20px",
    color: "#fff",
    textAlign: "center",
  },
  logo: {
    margin: 0,
    fontSize: "1.8em",
    fontWeight: "bold",
  },
  contentWrapper: {
    display: "flex",
    flex: 1,
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#ffffff",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
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
  userName: {
    margin: "5px 0",
    fontWeight: "bold",
  },
  profileLink: {
    color: "#2E7D32",
    textDecoration: "none",
    fontSize: "0.9em",
  },
  nav: {
    listStyle: "none",
    padding: 0,
    textAlign: "left",
  },
  link: {
    display: "block",
    padding: "10px 0",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  },
  activeLink: {
    color: "#2E7D32",
    textDecoration: "underline",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    fontSize: "1.5em",
    marginBottom: "15px",
  },
  card: {
    backgroundColor: "#2E7D32",
    color: "#fff",
    padding: "20px",
    borderRadius: "8px",
  },
  cardTitle: {
    margin: "0 0 10px 0",
  },
  cardText: {
    margin: 0,
    fontSize: "1em",
    lineHeight: "1.5",
  },
  footer: {
    backgroundColor: "#2E7D32",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  },
  footerLink: {
    margin: "0 10px",
    color: "#fff",
    textDecoration: "none",
  },
  loading: {
    textAlign: "center",
    marginTop: "20%",
    fontSize: "1.5em",
    color: "#2E7D32",
  },
};

export default Dashboard;
