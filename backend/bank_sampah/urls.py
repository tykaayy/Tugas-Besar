from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router and register our viewsets
router = DefaultRouter()
router.register(r'User', views.UserViewSet)
router.register(r'Pelanggan', views.PelangganViewSet)
router.register(r'Lokasi', views.LokasiViewSet)
router.register(r'JenisSampah', views.JenisSampahViewSet)
router.register(r'Transaksi', views.TransaksiViewSet)
router.register(r'Tabungan', views.TabunganViewSet)
router.register(r'Setoran', views.SetoranViewSet)
router.register(r'PenarikanTabungan', views.PenarikanTabunganViewSet)
router.register(r'Postingan', views.PostinganViewSet)
router.register(r'Berteman', views.BertemanViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),  # Root URL untuk API
    path('admin/', admin.site.urls),  # Admin site
]
