from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from .models import CustomUser
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.conf import settings
import os

def home(request):
    return render(request, 'Aptu_/main.html')
def biblotheque(request):
    return render(request, 'Aptu_/biblotheque.html')    
def bug(request):
    return render(request, 'Aptu_/bug.html')
def main(request):
    return render(request, 'Aptu_/main.html')
def super(request):
    return render(request, 'Aptu_/super.html')

def inscription(request):
    if request.method == 'POST':
        nom = request.POST['nom']
        prenom = request.POST['prenom']
        email = request.POST['email']
        genre = request.POST['genre']
        adresse = request.POST.get('adresse', '')
        password = request.POST['password']
        photo = request.FILES.get('photo', None)
        user_model = get_user_model()
        user = user_model.objects.create_user(
            username=email, first_name=prenom, last_name=nom,
            email=email, genre=genre, adresse=adresse, password=password
        )
        if photo:
            user.photo = photo
            user.save()
        return redirect('login')
    return render(request, 'Aptu_/inscription.html')

def login_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'Aptu_/login.html', {'error': 'Identifiants invalides'})
    return render(request, 'Aptu_/login.html')

def logout_view(request):
    logout(request)
    return redirect('login')

@login_required
def edit_profile(request):
    user = request.user
    if request.method == 'POST':
        user.last_name = request.POST['nom']
        user.first_name = request.POST['prenom']
        user.email = request.POST['email']
        user.genre = request.POST['genre']
        user.adresse = request.POST.get('adresse', '')
        if request.FILES.get('photo'):
            user.photo = request.FILES['photo']
        user.save()
        return redirect('home')
    return render(request, 'Aptu_/edit_profile.html', {'user': user})

def liste_pdfs(request):
    pdf_folder = os.path.join(settings.BASE_DIR, 'Aptu_', 'static', 'Aptu_', 'pdfs')
    pdfs = []
    if os.path.exists(pdf_folder):
        for filename in sorted(os.listdir(pdf_folder)):
            if filename.endswith('.pdf'):
                pdfs.append(filename)
    return render(request, 'Aptu_/liste_pdfs.html', {'pdfs': pdfs})