from django.db import models
from django.contrib.auth.models import (AbstractUser)

# Create your models here.
class AppUser(AbstractUser):
    """
    user account
    """
    email = models.EmailField(
        
        max_length=255,
        unique=True,
    )
    username = models.CharField(
        
        max_length=255,
        unique=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

class OwnedPoke(models.Model):
    name = models.CharField(max_length = 255)
    poke_id = models.IntegerField()