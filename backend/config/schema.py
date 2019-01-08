import graphene
from images import schema as images_schema


class Query(images_schema.Query, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
