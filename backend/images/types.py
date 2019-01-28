import graphene
from graphene_django.types import DjangoObjectType
from config import types as config_types
from . import models


class ImageType(DjangoObjectType):
    like_count = graphene.Int(source='like_count')
    comment_count = graphene.Int(source='comment_count')
    created_at = graphene.String(source="time_ago")
    is_liked = graphene.Boolean()

    def resolve_is_liked(self, info):
        user = info.context.user
        try:
            like = models.Like.objects.get(image=self, creator=user)
            return True
        except models.Like.DoesNotExist:
            return False

    class Meta:
        model = models.Image


class FileType(DjangoObjectType):

    class Meta:
        model = models.File


class LikeType(DjangoObjectType):

    class Meta:
        model = models.Like


class CommentType(DjangoObjectType):

    class Meta:
        model = models.Comment


class FeedResponse(graphene.ObjectType):
    images = graphene.List(ImageType)


class LikeImageResponse(graphene.ObjectType):
    ok = graphene.Boolean()


class UnlikeImageResponse(graphene.ObjectType, config_types.ResponseFields):
    pass


class AddCommentResponse(graphene.ObjectType):
    comment = graphene.Field(CommentType)


class DeleteCommentResponse(graphene.ObjectType, config_types.ResponseFields):
    pass


class ImageLikeResponse(graphene.ObjectType, config_types.ResponseFields):
    likes = graphene.List(LikeType)


class ImageDetailResponse(graphene.ObjectType):
    image = graphene.Field(ImageType)


class EditImageResponse(graphene.ObjectType, config_types.ResponseFields):
    image = graphene.Field(ImageType)


class DeleteImageResponse(graphene.ObjectType, config_types.ResponseFields):
    pass


class UploadImageResponse(graphene.ObjectType):
    image = graphene.Field(ImageType)


class SearchImagesResponse(graphene.ObjectType):
    images = graphene.List(ImageType)


class LatestImagesResponse(graphene.ObjectType):
    images = graphene.List(ImageType)


class PhotoLikeResponse(graphene.ObjectType):
    likes = graphene.List(LikeType)


class FileInputType(graphene.InputObjectType):
    url = graphene.String()
    is_video = graphene.Boolean()
