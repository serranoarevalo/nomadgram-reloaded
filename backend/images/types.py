import graphene
from graphene_django.types import DjangoObjectType
from . import models
from users import types as user_types
from config import types as config_types


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


class FeedResponse(graphene.ObjectType, config_types.ResponseFields):
    images = graphene.List(ImageType)


class LikeImageResponse(graphene.ObjectType, config_types.ResponseFields):
    pass


class AddCommentResponse(graphene.ObjectType, config_types.ResponseFields):
    comment = graphene.Field(CommentType)


class DeleteCommentResponse(graphene.ObjectType, config_types.ResponseFields):
    pass


class ImageLikeResponse(graphene.ObjectType, config_types.ResponseFields):
    likes = graphene.List(LikeType)


class ImageDetailResponse(graphene.ObjectType, config_types.ResponseFields):
    image = graphene.Field(ImageType)


class EditImageResponse(graphene.ObjectType, config_types.ResponseFields):
    image = graphene.Field(ImageType)


class DeleteImageResponse(graphene.ObjectType, config_types.ResponseFields):
    pass


class UploadImageResponse(graphene.ObjectType, config_types.ResponseFields):
    image = graphene.Field(ImageType)
