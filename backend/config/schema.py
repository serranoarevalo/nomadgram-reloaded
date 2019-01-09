import graphene
from images import schema as images_schema
from users import schema as users_schema


class Query(images_schema.Query, users_schema.Query, graphene.ObjectType):
    pass


class Mutation(images_schema.Mutation, users_schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
