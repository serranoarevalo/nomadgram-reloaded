from django.db import models
from django.contrib.auth.models import User


class TimeStampedModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Image(TimeStampedModel):

    """ Image Model """


class Like(TimeStampedModel):

    """ Like Model """

    image = models.ForeignKey(
        Image, related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(
        User, related_name='comments', on_delete=models.CASCADE)


class Comment(TimeStampedModel):

    """ Comment Model """

    message = models.TextField()
    image = models.ForeignKey(
        Image, related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(
        User, related_name='comments', on_delete=models.CASCADE)
