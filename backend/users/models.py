from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):

    """ Profile Model """

    GENDERS = (
        ('M', 'Masculine'),
        ('F', 'Feminine')
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(default='')
    website = models.URLField(blank=True)
    gender = models.CharField(max_length=1, choices=GENDERS)
