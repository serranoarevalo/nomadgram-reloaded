import graphene
from django.db import IntegrityError
from . import types, models


def resolve_feed(self, info):
    return types.FeedResponse(ok=True)
