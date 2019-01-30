from django.db import models
from django.contrib.auth.models import User
from django.contrib.humanize.templatetags.humanize import naturaltime
from config import models as config_models


class File(config_models.TimeStampedModel):

    url = models.URLField()
    is_video = models.BooleanField(default=False)
    creator = models.ForeignKey(
        User, related_name='file_images', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.creator.username


class Image(config_models.TimeStampedModel):

    """ Image Model """

    creator = models.ForeignKey(
        User, related_name='images', on_delete=models.CASCADE)
    caption = models.TextField()
    location = models.CharField(max_length=140, blank=True, null=True)
    files = models.ManyToManyField(File, related_name='parent')

    @property
    def like_count(self):
        return self.likes.all().count()

    @property
    def comment_count(self):
        return self.comments.all().count()

    @property
    def time_ago(self):
        return naturaltime(self.created_at)

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


class Story(config_models.TimeStampedModel):

    """ Story Model """

    file = models.ForeignKey(File, on_delete=models.CASCADE)
    creator = models.ForeignKey(
        User, related_name='stories', on_delete=models.CASCADE)
    expired = models.BooleanField(default=False)

    def __str__(self):
        return self.creator.username
