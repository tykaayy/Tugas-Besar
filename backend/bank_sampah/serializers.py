from rest_framework import serializers
from .models import User, Pelanggan, Lokasi, JenisSampah, Transaksi, Tabungan, Setoran, PenarikanTabungan, Postingan, Berteman

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id_user', 'username', 'password', 'nama_user', 'nama_role']

class PelangganSerializer(serializers.ModelSerializer):
    id_user = UserSerializer(read_only=True)

    class Meta:
        model = Pelanggan
        fields = ['id_pelanggan', 'id_user', 'nama_pelanggan', 'email', 'alamat', 'no_ewallet', 'jenis_ewallet']

class LokasiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lokasi
        fields = ['id_lokasi', 'nama_lokasi']

class JenisSampahSerializer(serializers.ModelSerializer):
    class Meta:
        model = JenisSampah
        fields = ['id_jenis', 'nama_jenis', 'harga_sampah']

class TransaksiSerializer(serializers.ModelSerializer):
    id_pelanggan = PelangganSerializer(read_only=True)
    id_lokasi = LokasiSerializer(read_only=True)

    class Meta:
        model = Transaksi
        fields = ['id_transaksi', 'id_pelanggan', 'id_lokasi']

class TabunganSerializer(serializers.ModelSerializer):
    id_pelanggan = PelangganSerializer(read_only=True)

    class Meta:
        model = Tabungan
        fields = ['id_tabungan', 'id_pelanggan', 'saldo', 'tanggal_update_saldo_terakhir']

class SetoranSerializer(serializers.ModelSerializer):
    id_tabungan = TabunganSerializer(read_only=True)
    id_jenis = JenisSampahSerializer(read_only=True)
    id_transaksi = TransaksiSerializer(read_only=True)

    class Meta:
        model = Setoran
        fields = ['id_setoran', 'id_tabungan', 'id_jenis', 'id_transaksi', 'tanggal_setoran', 'berat_sampah']

class PenarikanTabunganSerializer(serializers.ModelSerializer):
    id_tabungan = TabunganSerializer(read_only=True)

    class Meta:
        model = PenarikanTabungan
        fields = ['id_penarikan', 'id_tabungan', 'tanggal_penarikan', 'mutasi']

class PostinganSerializer(serializers.ModelSerializer):
    id_pelanggan = PelangganSerializer(read_only=True)

    class Meta:
        model = Postingan
        fields = ['id_postingan', 'id_pelanggan', 'tanggal_postingan', 'teks']

class BertemanSerializer(serializers.ModelSerializer):
    id_pelanggan = PelangganSerializer(read_only=True)
    id_pelanggan1 = PelangganSerializer(read_only=True)
    id_pelanggan2 = PelangganSerializer(read_only=True)

    class Meta:
        model = Berteman
        fields = ['id_berteman', 'id_pelanggan', 'id_pelanggan1', 'id_pelanggan2']
