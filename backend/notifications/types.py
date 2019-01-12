import graphene
from graphene_django.types import DjangoObjectType
from config import types as config_types
from . import models


class NotificationType(DjangoObjectType):

    class Meta:
        model = models.Notification


class GetNotificationsResponse(graphene.ObjectType, config_types.ResponseFields):
    notifications = graphene.List(NotificationType)
