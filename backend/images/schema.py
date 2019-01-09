import graphene
from . import types, queries, mutations


class Query(object):

    feed = graphene.Field(types.FeedResponse,
                          resolver=queries.resolve_feed, required=True)
    image_likes = graphene.Field(
        types.ImageLikeResponse, resolver=queries.resolve_image_likes, required=True, args={'imageId': graphene.Int(required=True)})

    image_detail = graphene.Field(types.ImageDetailResponse, resolver=queries.resolve_image_detail,
                                  required=True, args={'imageId': graphene.Int(required=True)})


class Mutation(object):

    like_image = mutations.LikeImage.Field(required=True)
    add_comment = mutations.AddComment.Field(required=True)
    delete_comment = mutations.DeleteComment.Field(required=True)
    edit_image = mutations.EditImage.Field(required=True)
