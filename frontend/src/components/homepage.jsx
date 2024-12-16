import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import heroImage from '../assets/Group 8748.png';
import mapImage from '../assets/Group 8747.png';
import icon1 from '../assets/Group 8828 (1).png';
import icon2 from '../assets/Group 8829.png';
import icon3 from '../assets/Group 8830.png';
import icon4 from '../assets/Group 8831.png';
import icon5 from '../assets/Group 8832.png';
import icon6 from '../assets/Group 8833.png';

const Homepage = () => {
  const [homepage, setHomepage] = useState([]); // State untuk menyimpan data homepage
  const [loading, setLoading] = useState(true); // State loading

  useEffect(() => {
    fetch("http://127.0.0.1:8000/homepage")
      .then((response) => response.json())
      .then((data) => {
        setHomepage(data); // Simpan data ke state
        setLoading(false); // Loading selesai
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading){
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.logoContainer}>
            <img src={logo} alt="Logo GoSampah" style={styles.logo} />
          </div>
          <nav>
            <ul style={styles.navList}>
              <li><Link to="/" style={styles.navLink}>Home</Link></li>
              <li><Link to="/profil" style={styles.navLink}>Profil</Link></li>
              <li><Link to="/alur" style={styles.navLink}>Alur</Link></li>
              <li><Link to="/hubungi-kami" style={styles.navLink}>Hubungi Kami</Link></li>
              <li><Link to="/dashboard" style={{ ...styles.navLink, color: 'white' }}>Dashboard</Link></li>
            </ul>
          </nav>
          </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1>Selamat Datang di</h1>
          <h1>GoSampah</h1>
          <p>Kelola Sampah dengan Bijak, Raih Peluang Cuan!</p>
          
          <Link to="/User" style={{ ...styles.heroButton, display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>Masuk</Link>
          
        </div>
        <div style={styles.heroImageContainer}>
          <img src={heroImage} alt="Ilustrasi pengelolaan sampah" style={styles.heroImage} />
        </div>
      </section>
      {/* About Section */}
      <section style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>Tentang Aplikasi</h2>
        <p>GoSampah adalah platform inovatif yang dirancang untuk mempermudah pengelolaan sampah secara berkelanjutan sekaligus memberikan manfaat finansial. Dengan GoSampah, Anda dapat mendaur ulang sampah dengan mudah dan tanpa kerepotan. Kami menyediakan fasilitas yang memungkinkan Anda untuk melakukan transaksi sampah dengan cepat, serta memberikan insentif berupa uang tunai sebagai penghargaan atas kontribusi Anda.</p>
        <p>Kami percaya bahwa menjaga lingkungan harus menjadi hal yang sederhana dan menguntungkan bagi semua orang. Melalui GoSampah, Anda tidak hanya membantu mengurangi limbah yang mencemari bumi, tetapi juga mendapatkan keuntungan dari setiap langkah kecil yang Anda lakukan untuk mendukung kelestarian lingkungan.</p>
      </section>
      {/* How It Works Section */}
      <section style={styles.howItWorksSection}>
        <h2 style={styles.sectionTitle}>Bagaimana Kami Bekerja?</h2>
        <div style={styles.stepsContainer}>
          <div style={styles.step} onClick={() => alert('Anda mengklik step: Pilih Jenis Pengguna')}>
            <img src={icon1} alt="Ikon 1" style={styles.stepImage} />
            <p>Pilih Jenis Pengguna</p>
          </div>
          <div style={styles.step} onClick={() => alert('Anda mengklik step: Registrasi')}>
            <img src={icon2} alt="Ikon 2" style={styles.stepImage} />
            <p>Registrasi</p>
          </div>
          <div style={styles.step} onClick={() => alert('Anda mengklik step: Setor Sampah')}>
            <img src={icon3} alt="Ikon 3" style={styles.stepImage} />
            <p>Setor Sampah</p>
          </div>
          <div style={styles.step}onClick={() => alert('Anda mengklik step: Pantau Transaksi')}>
            <img src={icon4} alt="Ikon 4" style={styles.stepImage} />
            <p>Pantau Transaksi</p>
          </div>
          <div style={styles.step} onClick={() => alert('Anda mengklik step: Tabungan')}>
            <img src={icon5} alt="Ikon 5" style={styles.stepImage} />
            <p>Tabungan</p>
          </div>
          <div style={styles.step} onClick={() => alert('Anda mengklik step: Interaksi Sosial')}>
            <img src={icon6} alt="Ikon 6" style={styles.stepImage} />
            <p>Interaksi Sosial</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Hubungi Kami</h2>
        <p><strong>Gunung Halu, Bandung, Jawa Barat, Indonesia</strong></p>
        <p><strong>Telepon:</strong> (123) 456-78-90</p>
        <p><strong>Email:</strong> gosampah@gmail.com</p>
        <img src={mapImage} alt="mapImage" style={styles.mapImage} />
      </section>
      {/* Footer */}
     <footer style={styles.footer}>
        <img src={logo} alt="GoSampah Logo" style={styles.footerLogo} />
        <ul style={styles.footerMenu}>
          <li><Link to="/" style={styles.footerLink}>Home</Link></li>
          <li><Link to="/profil" style={styles.footerLink}>Profil</Link></li>
          <li><Link to="/alur" style={styles.footerLink}>Alur</Link></li>
          <li><Link to="/hubungi-kami" style={styles.footerLink}>Hubungi Kami</Link></li>
        </ul>
        <p>© 2024 GoSampah. All Rights Reserved</p>
      </footer>
    </div>
  );
}
  
  const styles = {
    header: {
      backgroundColor: '#238B45',
      color: 'white',
      padding: '15px 20px',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      width: '50px',
    },
    navList: {
      listStyle: 'none',
      display: 'flex',
      gap: '20px',
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    hero: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '50px 20px',
      backgroundColor: '#238B45',
      color: 'white',
    },
    heroText: {
      maxWidth: '600px',
    },
    heroButton: {
      backgroundColor: 'white',
      color: '#238B45',
      padding: '10px 20px',
      fontWeight: 'bold',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
    heroImage: {
      maxWidth: '100%',
      height: 'auto',
    },
    aboutSection: {
      padding: '40px 20px',
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: '36px',
      color: '#238B45',
      marginBottom: '20px',
    },
    howItWorksSection: {
      padding: '40px 20px',
      backgroundColor: 'white',
      textAlign: 'center',
    },
    stepsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '20px',
    },
    step: {
      textAlign: 'center',
      cursor: 'pointer',
    },
    stepImage: {
      width: '60px',
      height: '60px',
      marginBottom: '10px',
    },
    contactSection: {
      padding: '40px 20px',
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
    },
    footer: {
      backgroundColor: '#238B45',
      color: 'white',
      textAlign: 'center',
      padding: '10px 20px',
    },
    footerLogo: {
      display: 'block',
      margin: '0 auto 10px',
      width: '70px',
    },
    footerMenu: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    footerLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  export default Homepage;