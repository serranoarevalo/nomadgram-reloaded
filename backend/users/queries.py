import graphene
from graphql_jwt.decorators import login_required
from django.contrib.auth.models import User
from . import types, models


def resolve_profile(self, info, **kwargs):

    userId = kwargs.get('userId')

    try:
        profile = User.objects.get(id=userId)
    except User.DoesNotExist:
        raise Exception('User not found')

    return types.UserProfileResponse(user=profile)


@login_required
def resolve_me(self, info):

    user = info.context.user

    return types.UserProfileResponse(user=user)


def resolve_search_users(self, info, **kwargs):

    user = info.context.user
    term = kwargs.get('term')

    if len(term) < 3:

        raise Exception("Search Term is Too Short")

    else:

        users = User.objects.filter(username__istartswith=term)

        return types.SearchUsersResponse(users=users)


@login_required
def resolve_check_username(self, info, **kwargs):

    user = info.context.user
    username = kwargs.get('username')

    try:
        existing_username = User.objects.get(username=username)
        raise Exception("Username is taken")
    except User.DoesNotExist:
        return types.CheckUsernameResponse(ok=True)


def resolve_latest_users(self, info):

    user = info.context.user

    users = models.User.objects.filter().order_by('-date_joined')[:10]
    return types.LatestUsersResponse(users=users)
