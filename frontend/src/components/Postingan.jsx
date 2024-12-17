import React from "react";
import { Link } from "react-router-dom"; // Gunakan jika navigasi antar halaman
import profile from '../assets/Group 8834.png';

const PostinganPage = () => {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "Arial, sans-serif",
      color: "#333",
      backgroundColor: "#ffffff",
    },
    header: {
      backgroundColor: "#238B45",
      color: "white",
      textAlign: "center",
      padding: "20px",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    container: {
      display: "flex",
      marginTop: 0,
    },
    sidebar: {
      backgroundColor: "white",
      width: "250px",
      padding: "20px",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      height: "calc(100vh - 50px)",
      overflowY: "auto",
    },
    profile: {
      textAlign: "center",
      marginBottom: "30px",
    },
    profileImage: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      marginBottom: "10px",
    },
    menu: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    menuItem: {
      margin: "15px 0",
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontSize: "1em",
      fontWeight: "bold",
      transition: "color 0.3s", // Menambahkan transisi untuk hover
    },
    linkHover: {
      color: "#238B45",
    },
    main: {
      flex: 1,
      padding: "20px",
      backgroundColor: "#f5f5f5",
    },
    sectionHeader: {
      backgroundColor: "#238B45",
      color: "white",
      padding: "15px",
      borderRadius: "8px",
      textAlign: "center",
      fontSize: "1.2em",
      fontWeight: "bold",
    },
    contentArea: {
      marginTop: "10px",
      backgroundColor: "#238B45",
      borderRadius: "20px",
      height: "400px",
      position: "relative",
    },
    addButton: {
      backgroundColor: "white",
      color: "#238B45",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "24px",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      position: "absolute",
      bottom: "20px",
      right: "20px",
      textDecoration: "none",
      cursor: "pointer",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.2s", // Menambahkan transisi untuk hover
    },
    addButtonHover: {
      transform: "scale(1.1)",
    },
    footer: {
      backgroundColor: "#238B45",
      color: "white",
      textAlign: "center",
      padding: "20px",
      marginTop: "20px",
    },
    footerLink: {
      textDecoration: "none",
      color: "white",
      margin: "0 20px",
      fontSize: "16px",
    },
    footerLinkHover: {
      color: "#000",
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.body}>

      {/* Container */}
      <div style={styles.container}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.profile}>
            <img
              src={profile}
              alt="Profile Picture"
              style={styles.profile}
            />
            <p>Tyka Nurul Indi</p>
            <a href="#" style={styles.link}>
              Lihat profil
            </a>
          </div>
          <nav>
            <ul style={styles.menu}>
              <li style={styles.menuItem}>
                <Link to="/Dashboard" style={styles.link}>
                  Dasbord
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/Setoran" style={styles.link}>
                  Setoran
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/Transaksi" style={styles.link}>
                  Transaksi
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/RiwayatTransaksi" style={styles.link}>
                  Riwayat Transaksi
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/Tabungan" style={styles.link}>
                  Tabungan
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/Berteman" style={styles.link}>
                  Teman
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/Postingan" style={styles.link}>
                  Postingan
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={styles.main}>
          <div style={styles.sectionHeader}>Postingan</div>
          <div style={styles.contentArea}>
            <div style={styles.addButton}>
              <Link to="/next-postingan" style={styles.link}>
                <span>+</span>
              </Link>
            </div>
          </div>
        </main>
      </div>

    </div>
  );
};

export default PostinganPage;
