import graphene
from . import types, queries, mutations


class Query(object):

    feed = graphene.Field(types.FeedResponse, resolver=queries.resolve_feed)


class Mutation(object):

    like_image = mutations.LikeImage.Field(required=True)
