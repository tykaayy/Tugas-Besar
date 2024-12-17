import { useEffect, useState } from "react";


const Pelanggan = () => {
  const [pelanggan, setPelanggan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mengambil data dari API Django menggunakan fetch
    fetch("http://127.0.0.1:8000/pelanggan/")
      .then((response) => response.json())
      .then((data) => {
        setPelanggan(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Data Pelanggan</h1>
      <div style={styles.tableContainer}>
        <table className="table table-bordered table-striped" style={styles.table}>
          <thead style={styles.header}>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>No E-Wallet</th>
              <th>Jenis Ewallet</th>

            </tr>
          </thead>
          <tbody>
            {pelanggan.map((item) => (
              <tr key={item.id}>
                <td>{item.nama}</td>
                <td>{item.email}</td>
                <td>{item.alamat}</td>
                <td>{item.no_ewallet}</td>
                <td>{item.jenis_ewallet}</td>

                <td>
                  <button style={styles.editButton}>Edit</button>
                  <button style={styles.deleteButton}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  container: {
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#f8f9fa", // Warna background abu-abu muda
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    color: "#3CB371", // Hijau seperti di desain Anda
    marginBottom: "20px",
    fontWeight: "bold",
  },
  tableContainer: {
    overflowX: "auto", // Membuat tabel responsif
  },
  table: {
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#3CB371", // Hijau header tabel
    color: "#ffffff",
  },
  editButton: {
    backgroundColor: "#ffc107",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    marginRight: "5px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Pelanggan;
