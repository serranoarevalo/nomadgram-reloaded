import graphene
from . import types, queries, mutations


class Query(object):

    feed = graphene.Field(types.FeedResponse, resolver=queries.resolve_feed)
    photo_likes = graphene.Field(
        types.PhotoLikeResponse, resolver=queries.resolve_photo_likes, imageId=graphene.Int(required=True))


class Mutation(object):

    like_image = mutations.LikeImage.Field(required=True)
    add_comment = mutations.AddComment.Field(required=True)
    delete_comment = mutations.DeleteComment.Field(required=True)
