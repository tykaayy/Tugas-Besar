import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/Rectangle 4228.png"; // Ganti path gambar sesuai folder Anda
import logo from "../assets/LOGO.png"; // Tambahkan gambar logo GoSampah

const Login = () => {
  const navigate = useNavigate(); // Hook untuk navigasi
  const [login, setLogin] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/User")
    .then((response) => response.json()) // Tambahkan 'response' sebelum '.json()'
    .then((data) => {
      setLogin(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Ambil data dari form input
    const username = e.target.username.value;
    const password = e.target.password.value;
    const nama = e.target.nama.value;
    const role = e.target.role.value;

    try {
      // Kirim permintaan login ke server menggunakan fetch (ganti URL sesuai dengan API Anda)
      const response = await fetch("URL_API_LOGIN", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          nama,
          role,
        }),
      });

      // Memeriksa status response dari server
      if (response.ok) {
        const data = await response.json(); // Mendapatkan data dari server

        // Jika login berhasil
        localStorage.setItem("isLoggedIn", true); // Simpan status login di localStorage
        localStorage.setItem("userRole", data.role); // Simpan peran user (opsional)
        alert("Login berhasil!");
        navigate("/dashboard"); // Arahkan ke halaman Dashboard
      } else {
        // Tangani error jika login gagal
        alert("Username atau password salah! Silakan coba lagi.");
      }
    } catch (error) {
      // Tangani error
      console.error("Login gagal:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div style={styles.container}>
      {/* Bagian Kiri: Gambar */}
      <div style={styles.imageSection}>
        <img src={loginImage} alt="Welcome Illustration" style={styles.image} />
        <h2 style={styles.welcomeText}>WELCOME GoSampah!</h2>
      </div>

      {/* Bagian Kanan: Form Login */}
      <div style={styles.formSection}>
        {/* Logo */}
        <img src={logo} alt="LOGO" style={styles.logo} />
        <h1 style={styles.title}>GoSampah</h1>
        <p style={styles.subtitle}>
          <strong>Baru!</strong> Nikmati kemudahan sistem autentikasi tunggal untuk
          mengakses semua layanan dengan satu akun.
        </p>

        {/* Form */}
        <form style={styles.form} onSubmit={handleLogin}>
          <label style={styles.label}>Username</label>
          <input type="text" name="username" placeholder="Username" style={styles.input} required />

          <label style={styles.label}>Password</label>
          <input type="password" name="password" placeholder="Password" style={styles.input} required />

          <label style={styles.label}>Nama</label>
          <input type="text" name="nama" placeholder="Nama" style={styles.input} required />

          <label style={styles.label}>Role</label>
          <select name="role" style={styles.input} required>
            <option value="">Pilih Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          {/* Checkbox */}
          <div style={styles.checkboxSection}>
            <input type="checkbox" id="check" required />
            <label htmlFor="check" style={styles.checkboxLabel}>Saya menyetujui syarat dan ketentuan</label>
          </div>

          {/* Tombol Submit */}
          <button type="submit" style={styles.button}>Masuk</button>
        </form>

        {/* Link untuk registrasi */}
        <p style={styles.registerLink}>
          Belum memiliki akun? <a href="/Pelanggan" style={styles.link}>Klik di sini</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffffff",
    color: "#333",
    flexWrap: "wrap",
  },
  imageSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "40%",
    marginBottom: "20px",
  },
  welcomeText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "-20px",
  },
  formSection: {
    flex: 1,
    padding: "20px 40px",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "visible",
  },
  logo: {
    width: "100px",
    height: "auto",
    objectFit: "contain",
    alignSelf: "center",
    marginBottom: "10px",
  },
  title: {
    fontSize: "2rem",
    color: "#2E7D32",
    textAlign: "center",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "0.9rem",
    color: "#555",
    textAlign: "center",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "100%",
    boxSizing: "border-box",
  },
  checkboxSection: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  checkboxLabel: {
    marginLeft: "5px",
    fontSize: "0.9rem",
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    color: "white",
    backgroundColor: "#2E7D32",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  registerLink: {
    fontSize: "0.9rem",
    color: "#555",
    textAlign: "center",
    marginTop: "20px",
  },
  link: {
    color: "#2E7D32",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Login;