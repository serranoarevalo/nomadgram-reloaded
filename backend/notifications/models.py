from django.db import models
from django.contrib.auth.models import User
from images import models as image_models
from config import models as config_models


class Notification(config_models.TimeStampedModel):

    VERBS = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow')
    )

    actor = models.ForeignKey(User, on_delete=models.CASCADE)
    target = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='notifications')
    verb = models.CharField(max_length=10, choices=VERBS)
    payload = models.ForeignKey(
        image_models.Image, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.actor.username} {self.verb} 👉🏻 {self.target.username}"
