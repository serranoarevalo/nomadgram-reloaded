from django.db import models
from django.contrib.auth.models import User
from config import models as config_models


class Image(config_models.TimeStampedModel):

    """ Image Model """

    creator = models.ForeignKey(
        User, related_name='images', on_delete=models.CASCADE)
    caption = models.TextField()
    location = models.CharField(max_length=140, blank=True, null=True)
    file = models.URLField()

    @property
    def like_count(self):
        return self.likes.all().count()

    @property
    def comment_count(self):
        return self.comments.all().count()

    def __str__(self):
        return self.caption


class Like(config_models.TimeStampedModel):

    """ Like Model """

    image = models.ForeignKey(
        Image, related_name='likes', on_delete=models.CASCADE)
    creator = models.ForeignKey(
        User, related_name='likes', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.creator.username} / {self.created_at}"


class Comment(config_models.TimeStampedModel):

    """ Comment Model """

    message = models.TextField()
    image = models.ForeignKey(
        Image, related_name='comments', on_delete=models.CASCADE)
    creator = models.ForeignKey(
        User, related_name='comments', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.creator.username}: {self.message}"
