import graphene
from graphene_django.types import DjangoObjectType
from . import models


class ImageType(DjangoObjectType):

    class Meta:
        model = models.
