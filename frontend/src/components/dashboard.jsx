import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/Group 8834.png";

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/dashboard")
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

  return (
    <div style={styles.container}>

      {/* Main Content */}
      <div style={styles.contentWrapper}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.profileSection}>
            <img src={profile} alt="profile" style={styles.profileImage} />
            <h3 style={styles.userName}>{userData.name || "Tyka Nurul Indi"}</h3>
            <Link to="/profile" style={styles.profileLink}>
              Lihat profil
            </Link>
          </div>
          <nav>
            <ul style={styles.navList}>
              <li>
                <Link to="/dashboard" style={{ ...styles.navLink, textDecoration: "underline" }}>Dasboard</Link>
              </li>
              <li><Link to="/Setoran" style={styles.navLink}>Setoran</Link></li>
              <li><Link to="/Transaksi" style={styles.navLink}>Transaksi</Link></li>
              <li><Link to="/RiwayatTransaksi" style={styles.navLink}>Riwayat Transaksi</Link></li>
              <li><Link to="/Tabungan" style={styles.navLink}>Tabungan</Link></li>
              <li><Link to="/Teman" style={styles.navLink}>Teman</Link></li>
              <li><Link to="/Postingan" style={styles.navLink}>Postingan</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={styles.mainContent}>
          <h2 style={styles.sectionTitle}>Dasbord</h2>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Tentang Aplikasi</h3>
            <p style={styles.cardText}>GoSampah adalah platform inovatif yang dirancang untuk mempermudah pengelolaan sampah secara berkelanjutan sekaligus memberikan manfaat finansial. Dengan GoSampah, Anda dapat mendaur ulang sampah dengan mudah dan tanpa kerepotan. Kami menyediakan fasilitas yang memungkinkan Anda untuk melakukan transaksi sampah dengan cepat, serta memberikan insentif berupa uang tunai sebagai penghargaan atas kontribusi Anda.</p>
            <p>Kami percaya bahwa menjaga lingkungan harus menjadi hal yang sederhana dan menguntungkan bagi semua orang. Melalui GoSampah, Anda tidak hanya membantu mengurangi limbah yang mencemari bumi, tetapi juga mendapatkan keuntungan dari setiap langkah kecil yang Anda lakukan untuk mendukung kelestarian lingkungan.</p>
            <p>Bergabunglah dengan komunitas GoSampah sekarang dan mari bersama-sama menjadikan dunia lebih bersih, lebih hijau, dan lebih berkelanjutan. </p>
          </div>
        </main>
      </div>

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
        <p>&copy; 2024 GoSampah. All Rights Reserved</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  header: {
    backgroundColor: "#2E7D32",
    padding: "10px",
    textAlign: "center",
  },
  logo: {
    color: "#fff",
    fontSize: "1.8em",
  },
  contentWrapper: {
    display: "flex",
  },
  sidebar: {
    width: "250px",
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
  userName: {
    fontWeight: "bold",
  },
  profileLink: {
    color: "#2E7D32",
    textDecoration: "none",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
  },
  navLink: {
    display: "block",
    padding: "10px 0",
    color: "#333",
    textDecoration: "none",
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f4f4f4",
  },
  sectionTitle: {
    fontSize: "1.5em",
    marginBottom: "10px",
  },
  card: {
    backgroundColor: "#2E7D32",
    color: "#fff",
    padding: "20px",
    borderRadius: "8px",
  },
  footer: {
    backgroundColor: "#2E7D32",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  },
  footerLink: {
    color: "#fff",
    margin: "0 10px",
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
