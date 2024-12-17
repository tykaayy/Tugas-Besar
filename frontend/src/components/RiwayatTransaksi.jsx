import React from "react";
import { Link } from "react-router-dom"; // Gunakan jika navigasi antar halaman
import profile from '../assets/Group 8834.png'; // Gambar profil kamu

const RiwayatTransaksi = () => {
    const styles = {
        profileSection: {
            textAlign: "center",
            marginBottom: "20px",
        },
        profile: {
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            marginBottom: "10px",
        },
        link: {
            textDecoration: "none",
            color: "#2f8d46",
        },
        navLink: {
            fontSize: "18px",
            color: "#333",
            padding: "10px 0",
            display: "block",
            marginBottom: "10px",
        },
        activeLink: {
            backgroundColor: "#2f8d46",
            color: "#fff",
            borderRadius: "5px",
        }
    };

    return (
        <div>
            {/* Container */}
            <div className="container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <div style={styles.profileSection}>
                        <img src={profile} alt="profile" style={styles.profile} />
                        <h3>Tyka Nurul Indi</h3>
                        <Link to="/profile" style={styles.link}>
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
                <main className="main">
                    <div className="section-header">Riwayat Transaksi</div>
                    <div className="table-container">
                        <p>Menampilkan <select><option>1</option></select> kolom</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Tanggal</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Tyka Nurul Indi</td>
                                    <td>29/11/2024</td>
                                    <td>Penyetoran</td>
                                    <td>Rp 5,500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>

            <style jsx>{`
                /* General Styles */
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    background-color: #ffffff;
                    color: #333;
                }

                a {
                    text-decoration: none;
                    color: inherit;
                }

                .container {
                    display: flex;
                    flex-wrap: nowrap;
                    min-height: calc(100vh - 100px);
                }

                /* Sidebar */
                .sidebar {
                    background-color: #ffffff;
                    width: 300px;
                    padding: 20px;
                    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
                }

                .sidebar .profile {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .sidebar .profile img {
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    margin-bottom: 10px;
                }

                .sidebar .profile p {
                    font-weight: bold;
                    color: #28A745;
                }

                .sidebar .profile a {
                    font-size: 14px;
                    color: #28A745;
                }

                .sidebar .menu {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .sidebar .menu li {
                    margin: 15px 0;
                }

                .sidebar .menu li a {
                    font-size: 18px;
                    color: #333;
                }

                .sidebar .menu li a:hover {
                    color: #28A745;
                    text-decoration: underline;
                }

                /* Main Content */
                .main {
                    flex: 1;
                    padding: 40px;
                    background-color: #f8f8f8;
                }

                .main .section-header {
                    background-color: #28A745;
                    color: white;
                    padding: 15px;
                    border-radius: 8px;
                    text-align: center;
                    font-size: 1.5em;
                    font-weight: bold;
                }

                .table-container {
                    background-color: #ffffff;
                    border-radius: 8px;
                    margin-top: 20px;
                    padding: 20px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                }

                table th,
                table td {
                    padding: 10px;
                    border-bottom: 1px solid #ddd;
                }

                table th {
                    background-color: #28A745;
                    color: white;
                }

                .status-button {
                    display: inline-block;
                    padding: 5px 10px;
                    background-color: #28A745;
                    color: #ffffff;
                    border: none;
                    border-radius: 5px;
                    font-size: 14px;
                    cursor: default;
                }
            `}</style>
        </div>
    );
};

export default RiwayatTransaksi;
