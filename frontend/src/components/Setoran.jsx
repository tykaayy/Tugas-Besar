import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/Group 8834.png";

const Setoran = () => {
  const [jenisSampah, setJenisSampah] = useState("");
  const [beratSampah, setBeratSampah] = useState(10);
  const [lokasi, setLokasi] = useState("");
  const [tanggalSetoran, setTanggalSetoran] = useState("");
  const [estimasiHarga, setEstimasiHarga] = useState(5500);

  const calculateHarga = (berat) => setEstimasiHarga(berat * 550);

  const handleBeratChange = (value) => {
    const newBerat = Math.min(100, Math.max(1, beratSampah + value));
    setBeratSampah(newBerat);
    calculateHarga(newBerat);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ jenisSampah, beratSampah, lokasi, tanggalSetoran, estimasiHarga });
  };

  const styles = {
    container: {
      display: "flex", // Ini memastikan sidebar dan content sejajar horizontal
      flexDirection: "row", // Tampilkan anak-anak secara horizontal
      backgroundColor: "#fff",
      minHeight: "100vh", // Tinggi layar penuh
    },
    sidebar: {
      width: "220px",
      backgroundColor: "#fff",
      padding: "20px",
      flexShrink: 0, // Sidebar tidak mengecil
      borderRight: "1px solid #ddd", // Tambahkan garis pembatas
    },
    mainContent: {
      flexGrow: 1, // Isi sisa ruang
      padding: "30px",
      backgroundColor: "#f8fdf4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    contentWrapper: {
      display: "flex",
      flex : 1,
    },
    formRow: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
    },
    formLabel: {
      flexBasis: "150px", // Lebar label tetap
      fontWeight: "bold",
    },
    formInput: {
      flexGrow: 1, // Input memanjang sesuai sisa ruang
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "4px",
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
    card: {
      backgroundColor: "#fcfcfc",
      padding: "20px 30px",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "500px",
    },
    label: { marginBottom: "5px", fontWeight: "bold", display: "block" },
    input: {
      padding: "8px",
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      width: "100%",
    },
    incrementButton: {
      width: "30px",
      height: "30px",
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      cursor: "pointer",
      textAlign: "center",
    },
    button: {
      display: "block",
      margin: "20px auto 0",
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
              <Link to="/dashboard" style={styles.navLink}>
                Dasborard
              </Link>
            </li>
            <li>
              <Link to="/Setoran" style={{ ...styles.navLink, ...styles.activeLink }}>
                Setoran
              </Link>
            </li>
            <li>
              <Link to="/Transaksi" style={styles.navLink}>
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
              <Link to="/Teman" style={styles.navLink}>
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
          <h2 style={{ textAlign: "center", color: "#2f8d46" }}>Setoran</h2>
          <form onSubmit={handleSubmit}>
            <label style={styles.label}>Jenis Sampah</label>
            <select
              style={styles.input}
              value={jenisSampah}
              onChange={(e) => setJenisSampah(e.target.value)}
            >
              <option value="">Pilih Jenis Sampah</option>
              <option value="Plastik">Plastik</option>
              <option value="Kertas">Kertas</option>
              <option value="Logam">Logam</option>
              <option value="Kaca">Kaca</option>
            </select>

            <label style={styles.label}>Berat Sampah (Kg)</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                type="button"
                style={styles.incrementButton}
                onClick={() => handleBeratChange(-1)}
              >
                -
              </button>
              <input
                style={{ ...styles.input, textAlign: "center", margin: "0 10px", width: "60px" }}
                readOnly
                value={beratSampah}
              />
              <button
                type="button"
                style={styles.incrementButton}
                onClick={() => handleBeratChange(1)}
              >
                +
              </button>
            </div>

            <label style={styles.label}>Lokasi</label>
            <select
              style={styles.input}
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
            >
              <option value="">Pilih Lokasi</option>
              <option value="RT.1">RT.1</option>
              <option value="RT.2">RT.2</option>
              <option value="RT.3">RT.3</option>
              <option value="RT.4">RT.4</option>
              <option value="RT.5">RT.5</option>
              <option value="RT.6">RT.6</option>
              <option value="RT.7">RT.7</option>
              <option value="RT.8">RT.8</option>
            </select>

            <label style={styles.label}>Tanggal Setoran</label>
            <input
              type="date"
              style={styles.input}
              value={tanggalSetoran}
              onChange={(e) => setTanggalSetoran(e.target.value)}
            />

            <label style={styles.label}>Estimasi Harga</label>
            <input
              style={{ ...styles.input, backgroundColor: "#eee" }}
              readOnly
              value={`Rp${estimasiHarga.toLocaleString()}`}
            />

            <button type="submit" style={styles.button}>
              Setor
            </button>
          </form>
        </div>
      </main>

    

    </div>
  );
};

export default Setoran;
