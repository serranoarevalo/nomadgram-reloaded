import graphene

import schema from images as images_schema


class Query(images_schema.Query):
    pass


schema = graphene.Schema(query=Query)
