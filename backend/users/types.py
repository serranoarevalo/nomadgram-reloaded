import graphene
from graphene_django.types import DjangoObjectType
from . import models
from django.contrib.auth.models import User
from config import types as config_types


class ProfileType(DjangoObjectType):

    following_count = graphene.Int(source='followers_count')
    followers_count = graphene.Int(source='following_count')

    class Meta:
        model = models.Profile


class UserType(DjangoObjectType):

    class Meta:
        model = User


class UserProfileResponse(graphene.ObjectType, config_types.ResponseFields):
    user = graphene.Field(UserType)


class FollowUnfollowResponse(graphene.ObjectType, config_types.ResponseFields):
    pass
