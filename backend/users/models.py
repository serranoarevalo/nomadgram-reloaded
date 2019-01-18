from django.db import models
from django.contrib.auth.models import User
from config import models as config_models


class Profile(config_models.TimeStampedModel):

    """ Profile Model """

    GENDERS = (
        ('M', 'Masculine'),
        ('F', 'Feminine')
    )

    user = models.OneToOneField(
        User, on_delete=models.CASCADE)
    bio = models.TextField(default='', blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    gender = models.CharField(max_length=1, choices=GENDERS, default='M')
    avatar = models.URLField(
        blank=True, null=True, default="https://scontent-bog1-1.cdninstagram.com/vp/08b4774c7bdd7a1615e2b66476150437/5CD15391/t51.2885-19/s150x150/33940709_2091657174447047_1561961433825017856_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com")
    following = models.ManyToManyField(
        'self', blank=True, symmetrical=False, related_name='following_users')
    followers = models.ManyToManyField(
        'self', blank=True, symmetrical=False, related_name='followed_by')

    def __str__(self):
        return self.user.username

    @property
    def post_count(self):
        return self.user.images.all().count()

    @property
    def followers_count(self):
        return self.followers.all().count()

    @property
    def following_count(self):
        return self.following.all().count()
