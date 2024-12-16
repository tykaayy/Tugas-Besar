import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import profilePicture from "../assets/Group 8834.png";

const Setoran = () => {
  // State untuk form
  const [jenisSampah, setJenisSampah] = useState("");
  const [beratSampah, setBeratSampah] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [tanggalSetoran, setTanggalSetoran] = useState("");

  // State untuk fetch data API
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil data dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/Setoran");
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fungsi untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ jenisSampah, beratSampah, lokasi, tanggalSetoran });
  };

  const styles = {
    container: { display: "flex", flexDirection: "column", minHeight: "100vh" },
    header: { backgroundColor: "#2f8d46", color: "white", padding: "10px", textAlign: "center", fontWeight: "bold" },
    sidebar: { width: "250px", padding: "20px", backgroundColor: "#fff" },
    profileImg: { width: "80px", borderRadius: "50%", margin: "0 auto 10px" },
    mainContent: { flex: 1, padding: "20px", backgroundColor: "#f8fdf4", borderRadius: "8px" },
    formGroup: { marginBottom: "15px" },
    input: { width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" },
    button: { backgroundColor: "#2f8d46", color: "white", padding: "10px", borderRadius: "4px", border: "none" },
    footer: { backgroundColor: "#2f8d46", color: "white", textAlign: "center", padding: "10px" },
    footerLink: { textDecoration: "none", color: "white", margin: "0 10px" },
    link: { textDecoration: "none", color: "#2f8d46", fontWeight: "bold" },
    activeLink: { color: "#2f8d46", fontWeight: "bold", textDecoration: "underline" },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>GoSampah</header>
      <div style={{ display: "flex", flex: 1 }}>
        <aside style={styles.sidebar}>
          <img src={profilePicture} alt="Profile" style={styles.profileImg} />
          <p style={{ textAlign: "center", fontWeight: "bold" }}>Tyka Nurul Indi</p>
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

        <main style={styles.mainContent}>
          <h2 style={{ color: "#2f8d46" }}>Form Setoran Sampah</h2>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {!loading && !error && (
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label>Jenis Sampah</label>
                <select style={styles.input} value={jenisSampah} onChange={(e) => setJenisSampah(e.target.value)}>
                  <option value="">Pilih Jenis Sampah</option>
                  <option value="Plastik">Plastik</option>
                  <option value="Kertas">Kertas</option>
                  <option value="Logam">Logam</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label>Berat Sampah (Kg)</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  style={styles.input}
                  value={beratSampah}
                  onChange={(e) => setBeratSampah(e.target.value)}
                />
              </div>
              <div style={styles.formGroup}>
                <label>Lokasi</label>
                <select style={styles.input} value={lokasi} onChange={(e) => setLokasi(e.target.value)}>
                  <option value="">Pilih Lokasi</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Jakarta">Jakarta</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label>Tanggal Setoran</label>
                <input
                  type="date"
                  style={styles.input}
                  value={tanggalSetoran}
                  onChange={(e) => setTanggalSetoran(e.target.value)}
                />
              </div>
              <button type="submit" style={styles.button}>Setor</button>
            </form>
          )}
        </main>
      </div>
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

export default Setoran;
