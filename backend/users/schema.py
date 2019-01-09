import graphene
from . import types, mutations, queries


class Query(object):
    user_profile = graphene.Field(
        types.UserProfileResponse, resolver=queries.resolve_profile, required=True, userId=graphene.Int(required=True))


class Mutation(object):

    follow_user = mutations.FollowUser.Field(required=True)
    unfollow_user = mutations.UnfollowUser.Field(required=True)
