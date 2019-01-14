import graphene
from . import types, queries, mutations


class Query(object):

    get_notifications = graphene.Field(
        types.GetNotificationsResponse, resolver=queries.resolve_get_notifications, required=True, args={'page': graphene.Int()})


class Mutation(object):

    mark_as_read = mutations.MarkAsRead.Field(required=True)
