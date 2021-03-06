import graphene
from . import types, queries, mutations


class Query(object):

    feed = graphene.Field(types.FeedResponse,
                          resolver=queries.resolve_feed, required=True, args={'page': graphene.Int()})
    image_likes = graphene.Field(
        types.ImageLikeResponse, resolver=queries.resolve_image_likes, required=True, args={'imageId': graphene.Int(required=True)})

    image_detail = graphene.Field(types.ImageDetailResponse, resolver=queries.resolve_image_detail,
                                  required=True, args={'imageId': graphene.Int(required=True)})

    search_images = graphene.Field(types.SearchImagesResponse, resolver=queries.resolve_search_images, required=True, args={
        'term': graphene.String(required=True)})

    latest_images = graphene.Field(
        types.LatestImagesResponse, resolver=queries.resolve_latest_images, required=True)

    stories = graphene.Field(
        types.StoriesResponse, resolver=queries.resolve_stories, required=True
    )


class Mutation(object):

    like_image = mutations.LikeImage.Field(required=True)
    add_comment = mutations.AddComment.Field(required=True)
    delete_comment = mutations.DeleteComment.Field(required=True)
    edit_image = mutations.EditImage.Field(required=True)
    delete_image = mutations.DeleteImage.Field(required=True)
    upload_image = mutations.UploadImage.Field(required=True)
    add_story = mutations.AddStory.Field(required=True)
    delete_story = mutations.DeleteStory.Field(required=True)
