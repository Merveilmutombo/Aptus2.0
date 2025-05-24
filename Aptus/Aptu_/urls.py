# Ajoutez ceci dans le fichier urls.py approprié
from django.contrib import admin
from django.urls import path
from . import views  # ou 'from Aptu_ import views' selon l'emplacement
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('main/', views.main, name='main'),
    path('biblotheque/', views.biblotheque, name='biblotheque'),
    path('bug/', views.Erreur, name='bug'),
    path('inscription/', views.inscription, name='inscription'),
    path('login/', views.login_view, name='login'),
    path('super/', views.super, name='super'),
    path('edit-profile/', views.edit_profile, name='edit_profile'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
