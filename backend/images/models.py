from django.db import models


class Image(models.Model):

    """ Image Model """


class Like(models.Model):

    """ Like Model """


class Comment(models.Model):

    """ Comment Model """

    message = models.TextField()
    image = models.ForeignKey(
        Image, related_name='comments', on_delete=models.CASCADE)
