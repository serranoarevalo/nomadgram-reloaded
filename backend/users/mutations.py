import graphene
from . import models, types
from django.contrib.auth.models import User


class FollowUser(graphene.Mutation):

    """ Follow User """

    class Arguments:
        userId = graphene.Int(required=True)

    Output = types.FollowUnfollowResponse

    def mutate(self, info, **kwargs):

        userId = kwargs.get('userId')
        user = info.context.user

        ok = True
        error = None

        if user.is_authenticated:

            try:
                target = User.objects.get(id=userId)
            except User.DoesNotExist:
                error = 'User Not Found'
                return types.FollowUnfollowResponse(ok=not ok, error=error)

            user.profile.following.add(target.profile)
            target.profile.followers.add(user.profile)

            return types.FollowUnfollowResponse(ok=ok, error=error)

        else:
            error = 'You need to log in'
            return types.FollowUnfollowResponse(ok=not ok, error=error)


class UnfollowUser(graphene.Mutation):

    """ Follow User """

    class Arguments:
        userId = graphene.Int(required=True)

    Output = types.FollowUnfollowResponse

    def mutate(self, info, **kwargs):

        userId = kwargs.get('userId')
        user = info.context.user

        ok = True
        error = None

        if user.is_authenticated:

            try:
                target = User.objects.get(id=userId)
            except User.DoesNotExist:
                error = 'User Not Found'
                return types.FollowUnfollowResponse(ok=not ok, error=error)

            user.profile.following.remove(target.profile)
            target.profile.followers.remove(user.profile)

            return types.FollowUnfollowResponse(ok=ok, error=error)

        else:
            error = 'You need to log in'
            return types.FollowUnfollowResponse(ok=not ok, error=error)
