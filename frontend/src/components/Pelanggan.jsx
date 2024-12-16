import React, { useState } from "react";
import logo from "../assets/LOGO.png"; 

const Registrasi = () => {
  // State untuk mengontrol visibility password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    ewallet: "",
    alamat: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // State untuk status loading dan error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle visibility password
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi simple sebelum mengirim ke server
    if (formData.password !== formData.confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    // Set loading state
    setLoading(true);
    setError("");

    try {
      // Kirim data ke server menggunakan fetch
      const response = await fetch("/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: formData.nama,
          email: formData.email,
          ewallet: formData.ewallet,
          alamat: formData.alamat,
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      // Cek status respons
      if (response.ok) {
        alert("Registrasi berhasil! Silakan login.");
        setFormData({
          nama: "",
          email: "",
          ewallet: "",
          alamat: "",
          username: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setError(data.message || "Registrasi gagal! Periksa kembali data Anda.");
      }
    } catch (error) {
      console.error("Error saat registrasi:", error);
      setError("Terjadi kesalahan, coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Logo */}
      <img src={logo} alt="LOGO" style={styles.logo} />

      {/* Form */}
      <form style={styles.form} onSubmit={handleSubmit}>
        {/* Nama */}
        <label style={styles.label}>Nama</label>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          placeholder="Masukkan Nama"
          style={styles.input}
        />

        {/* Email */}
        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Masukkan Email"
          style={styles.input}
        />

        {/* No E-wallet */}
        <label style={styles.label}>No E-wallet</label>
        <input
          type="text"
          name="ewallet"
          value={formData.ewallet}
          onChange={handleChange}
          placeholder="Masukkan No E-wallet"
          style={styles.input}
        />

        {/* Alamat */}
        <label style={styles.label}>Alamat</label>
        <textarea
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          placeholder="Masukkan Alamat"
          style={styles.textarea}
        />

        {/* Username */}
        <label style={styles.label}>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Masukkan Username"
          style={styles.input}
        />

        {/* Password */}
        <label style={styles.label}>Password</label>
        <div style={styles.inputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Masukkan Password"
            style={styles.input}
          />
          <span style={styles.icon} onClick={togglePasswordVisibility}>
            {showPassword ? "👁️‍🗨️" : "👁️"}
          </span>
        </div>

        {/* Konfirmasi Password */}
        <label style={styles.label}>Konfirmasi Password</label>
        <div style={styles.inputContainer}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Konfirmasi Password"
            style={styles.input}
          />
          <span style={styles.icon} onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? "👁️‍🗨️" : "👁️"}
          </span>
        </div>

        {/* Tombol Daftar */}
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Loading..." : "Daftar"}
        </button>
      </form>

      {/* Pesan Error */}
      {error && <p style={styles.errorText}>{error}</p>}

      {/* Sudah memiliki akun */}
      <p style={styles.footerText}>
        Sudah memiliki Akun? <a href="/login" style={styles.link}>Login</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    padding: "20px",
  },
  logo: {
    width: "100px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "500px",
  },
  label: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  input: {
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: {
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    outline: "none",
    resize: "none",
    height: "100px",
    width: "100%",
    boxSizing: "border-box",
  },
  inputContainer: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#888",
    fontSize: "1.2rem",
  },
  button: {
    padding: "12px",
    backgroundColor: "#2E7D32",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    textAlign: "center",
  },
  footerText: {
    marginTop: "20px",
    fontSize: "1rem",
    color: "#555",
  },
  link: {
    color: "#1E88E5",
    textDecoration: "none",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: "1rem",
    textAlign: "center",
  },
};

export default Registrasi;
