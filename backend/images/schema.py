import graphene
from . import types, queries


class Query(object):

    feed = graphene.Field(types.FeedResponse, resolver=queries.resolve_feed)
