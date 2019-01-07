from django.db import models
from django.contrib.auth.models import User


class TimeStampedModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Image(TimeStampedModel):

    """ Image Model """

    creator = models.ForeignKey(
        User, related_name='images', on_delete=models.CASCADE)
    caption = models.TextField(blank=True)
    location = models.CharField(max_length=140, blank=True)

    def __str__(self):
        return f"{self.caption}"


class Like(TimeStampedModel):

    """ Like Model """

    image = models.ForeignKey(
        Image, related_name='likes', on_delete=models.CASCADE)
    creator = models.ForeignKey(
        User, related_name='likes', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.creator.username} / {self.created_at}"


class Comment(TimeStampedModel):

    """ Comment Model """

    message = models.TextField()
    image = models.ForeignKey(
        Image, related_name='comments', on_delete=models.CASCADE)
    creator = models.ForeignKey(
        User, related_name='comments', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.creator.username}: {self.message}"
