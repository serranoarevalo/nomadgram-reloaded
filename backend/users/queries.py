import graphene


class FeedResponse(graphene.ObjectType):
    ok = graphene.Boolean(required=True)
