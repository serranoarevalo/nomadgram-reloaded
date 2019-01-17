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
        exclude_fields = ('password',)


class UserProfileResponse(graphene.ObjectType):
    user = graphene.Field(UserType)


class FollowUnfollowResponse(graphene.ObjectType, config_types.ResponseFields):
    pass


class EditProfileResponse(graphene.ObjectType, config_types.ResponseFields):
    user = graphene.Field(UserType)


class ChangePasswordResponse(graphene.ObjectType, config_types.ResponseFields):
    pass


class SearchUsersResponse(graphene.ObjectType):
    users = graphene.List(UserType)


class CheckUsernameResponse(graphene.ObjectType):
    pass


class CreateAccountResponse(graphene.ObjectType):
    token = graphene.String()


class LatestUsersResponse(graphene.ObjectType):
    users = graphene.List(UserType)
