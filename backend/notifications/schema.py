import graphene
from . import types, queries


class Query(object):

    get_notifications = graphene.Field(
        types.GetNotificationsResponse, resolver=queries.resolve_get_notifications, required=True, args={'page': graphene.Int()})
