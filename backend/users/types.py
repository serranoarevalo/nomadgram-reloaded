import graphene
from graphene_django.types import DjangoObjectType
from . import models


class ProfileType(DjangoObjectType):

    class Meta:
        model = models.Profile


class UserType(DjangoObjectType):

    class Meta:
        model = models.User
