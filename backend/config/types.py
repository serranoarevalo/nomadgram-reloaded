import graphene


class ResponseFields(graphene.AbstractType):
    ok = graphene.Boolean(required=True)
    error = graphene.String()
