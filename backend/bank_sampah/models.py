from django.db import models

class User(models.Model):
    
    id_user = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    nama_user = models.CharField(max_length=50)
    nama_role = models.CharField(max_length=50, choices=[('Admin', 'Admin'), ('Pelanggan', 'Pelanggan')])

    def __str__(self):
        return self.nama_user


class Pelanggan(models.Model):
    STATUS_CHOICES = [
        ('Dana', 'Dana'),
        ('Gopay', 'Gopay'),
        ('Shopeepay', 'Shopeepay'),
    ]
    id_pelanggan = models.AutoField(primary_key=True)
    id_user = models.ForeignKey(User, on_delete=models.CASCADE, db_column='id_user')
    nama_pelanggan = models.CharField(max_length=20)
    email = models.CharField(max_length=25)
    alamat = models.TextField()
    no_ewallet = models.CharField(max_length=20)
    jenis_ewallet = models.CharField(max_length=10, choices=STATUS_CHOICES)

    def __str__(self):
        return self.nama_pelanggan



class Lokasi(models.Model):
    STATUS_CHOICES = [
        ('RT.1', 'RT.1'),
        ('RT.2', 'RT.2'),
    ]
    
    id_lokasi = models.AutoField(primary_key=True)
    nama_lokasi = models.CharField(max_length=30, choices= STATUS_CHOICES)

    def __str__(self):
        return self.nama_lokasi


class JenisSampah(models.Model):
    STATUS_CHOICES = [
        ('Kertas', 'Kertas'),
        ('Plastik', 'Plastik'),
        ('Logam', 'Logam'),
        ('Kaca', 'Kaca'),
    ]
    id_jenis = models.AutoField(primary_key=True)
    nama_jenis = models.CharField(max_length=25, choices= STATUS_CHOICES)
    harga_sampah = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nama_jenis


class Transaksi(models.Model):
    id_transaksi = models.AutoField(primary_key=True)
    id_pelanggan = models.ForeignKey(Pelanggan, on_delete=models.CASCADE)
    id_lokasi = models.ForeignKey(Lokasi, on_delete=models.CASCADE)

    def __str__(self):
        return f"Transaksi {self.id_transaksi}"


class Tabungan(models.Model):
    id_tabungan = models.AutoField(primary_key=True)
    id_pelanggan = models.ForeignKey(Pelanggan, on_delete=models.CASCADE)
    saldo = models.DecimalField(max_digits=15, decimal_places=2)
    tanggal_update_saldo_terakhir = models.DateField()

    def __str__(self):
        return f"Tabungan {self.id_tabungan}"


class Setoran(models.Model):
    id_setoran = models.AutoField(primary_key=True)
    id_tabungan = models.ForeignKey(Tabungan, on_delete=models.CASCADE)
    id_jenis = models.ForeignKey(JenisSampah, on_delete=models.CASCADE)
    id_transaksi = models.ForeignKey(Transaksi, on_delete=models.CASCADE)
    tanggal_setoran = models.DateField()
    berat_sampah = models.IntegerField()
    
    def __str__(self):
        return f"Setoran {self.id_setoran}"


class PenarikanTabungan(models.Model):
    id_penarikan = models.AutoField(primary_key=True)
    id_tabungan = models.ForeignKey(Tabungan, on_delete=models.CASCADE)
    tanggal_penarikan = models.DateField()
    mutasi = models.DecimalField(max_digits=15, decimal_places=2)

    def __str__(self):
        return f"Penarikan {self.id_penarikan}"



class Postingan(models.Model):
    id_postingan = models.AutoField(primary_key=True)
    id_pelanggan = models.ForeignKey(Pelanggan, on_delete=models.CASCADE)
    tanggal_postingan = models.DateField()
    teks = models.CharField(max_length=100)

    def __str__(self):
        return f"Postingan {self.id_postingan}"


class Berteman(models.Model):
    id_berteman = models.AutoField(primary_key=True)
    id_pelanggan = models.ForeignKey(Pelanggan, related_name='teman', on_delete=models.CASCADE)
    id_pelanggan1 = models.ForeignKey(Pelanggan, related_name='teman_1', on_delete=models.CASCADE)
    id_pelanggan2 = models.ForeignKey(Pelanggan, related_name='teman_2', on_delete=models.CASCADE)

    def __str__(self):
        return f"Berteman {self.id_berteman}"
