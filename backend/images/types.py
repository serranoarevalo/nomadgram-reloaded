import graphene
from graphene_django.types import DjangoObjectType
from . import models, types


class ImageType(DjangoObjectType):
    like_count = graphene.Int(source='like_count')
    comment_count = graphene.Int(source='comment_count')

    class Meta:
        model = models.Image


class LikeType(DjangoObjectType):

    class Meta:
        model = models.Like


class CommentType(DjangoObjectType):

    class Meta:
        model = models.Comment


class FeedResponse(graphene.ObjectType):
    ok = graphene.Boolean(required=True)
    images = graphene.List(types.ImageType)
    error = graphene.String()
