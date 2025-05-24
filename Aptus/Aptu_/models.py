from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    genre = models.CharField(max_length=10, choices=[('Homme', 'Homme'), ('Femme', 'Femme')])
    adresse = models.CharField(max_length=255, blank=True)
    photo = models.ImageField(upload_to='photos/', blank=True, null=True)
