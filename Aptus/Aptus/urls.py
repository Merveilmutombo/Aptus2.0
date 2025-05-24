"""
URL configuration for Aptus project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Aptu_ import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),  # Page principale
    path('biblotheque/', views.biblotheque, name='biblotheque'),  # Page de la bibliothèque
    path('bug/', views.bug, name='bug'),  # Page d'erreur
    path('login/', views.login_view, name='login'),
    path('inscription/', views.inscription, name='inscription'),
    path('edit-profile/', views.edit_profile, name='edit_profile'),
    path('main/', views.main, name='main'),
    path('pdfs/', views.liste_pdfs, name='liste_pdfs'),
    path('super/', views.super, name='super'),
]
