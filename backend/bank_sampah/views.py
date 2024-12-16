from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import User, Pelanggan, Lokasi, JenisSampah, Transaksi, Tabungan, Setoran, PenarikanTabungan, Postingan, Berteman
from .serializers import UserSerializer, PelangganSerializer, LokasiSerializer, JenisSampahSerializer, TransaksiSerializer, TabunganSerializer, SetoranSerializer, PenarikanTabunganSerializer, PostinganSerializer, BertemanSerializer

# User ViewSet
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Pelanggan ViewSet
class PelangganViewSet(viewsets.ModelViewSet):
    queryset = Pelanggan.objects.all()
    serializer_class = PelangganSerializer

# Lokasi ViewSet
class LokasiViewSet(viewsets.ModelViewSet):
    queryset = Lokasi.objects.all()
    serializer_class = LokasiSerializer

# JenisSampah ViewSet
class JenisSampahViewSet(viewsets.ModelViewSet):
    queryset = JenisSampah.objects.all()
    serializer_class = JenisSampahSerializer

# Transaksi ViewSet
class TransaksiViewSet(viewsets.ModelViewSet):
    queryset = Transaksi.objects.all()
    serializer_class = TransaksiSerializer

# Tabungan ViewSet
class TabunganViewSet(viewsets.ModelViewSet):
    queryset = Tabungan.objects.all()
    serializer_class = TabunganSerializer

# Setoran ViewSet
class SetoranViewSet(viewsets.ModelViewSet):
    queryset = Setoran.objects.all()
    serializer_class = SetoranSerializer

# PenarikanTabungan ViewSet
class PenarikanTabunganViewSet(viewsets.ModelViewSet):
    queryset = PenarikanTabungan.objects.all()
    serializer_class = PenarikanTabunganSerializer

# Postingan ViewSet
class PostinganViewSet(viewsets.ModelViewSet):
    queryset = Postingan.objects.all()
    serializer_class = PostinganSerializer

# Berteman ViewSet
class BertemanViewSet(viewsets.ModelViewSet):
    queryset = Berteman.objects.all()
    serializer_class = BertemanSerializer

    # Optional: Create a custom action to get friends of a specific pelanggan
    @action(detail=True, methods=['get'])
    def teman(self, request, pk=None):
        pelanggan = self.get_object()
        teman = Berteman.objects.filter(id_pelanggan=pelanggan)
        serializer = BertemanSerializer(teman, many=True)
        return Response(serializer.data)

