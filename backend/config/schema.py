import graphene
from images import schema as images_schema


class Query(images_schema.Query, graphene.ObjectType):
    pass


class Mutation(images_schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
