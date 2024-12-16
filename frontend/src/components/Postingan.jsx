import React from "react";
import { Link } from "react-router-dom"; // Gunakan jika navigasi antar halaman

const PostinganPage = () => {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "Arial, sans-serif",
      color: "#333",
      backgroundColor: "#ffff",
    },
    header: {
      backgroundColor: "#238B45",
      color: "white",
      textAlign: "center",
      padding: "10px 20px",
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
      transition: "transform 0.2s",
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
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>GoSampah</h1>
      </header>

      {/* Container */}
      <div style={styles.container}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.profile}>
            <img
              src="Ellipse 16.png"
              alt="Profile Picture"
              style={styles.profileImage}
            />
            <p>Tyka Nurul Indi</p>
            <a href="#" style={styles.link}>
              Ubah profil
            </a>
          </div>
          <nav>
            <ul style={styles.menu}>
              <li style={styles.menuItem}>
                <Link to="/dashboard" style={styles.link}>
                  Dasbord
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/setoran" style={styles.link}>
                  Setoran
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/transaksi" style={styles.link}>
                  Transaksi
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/riwayattransaksi" style={styles.link}>
                  Riwayat Transaksi
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/tabungan" style={styles.link}>
                  Tabungan
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/bereman" style={styles.link}>
                  Teman
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/postingan" style={styles.link}>
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
        <p>&copy; 2024 GoSampah. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default PostinganPage;
