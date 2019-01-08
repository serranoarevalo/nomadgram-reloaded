import graphene
from . import models, types


class LikeImage(graphene.Mutation):

    """ Like an Image """

    class Arguments:
        imageId = graphene.Int(required=True)

    Output = types.LikePhotoResponse

    def mutate(self, info, **kwargs):
        id = kwargs.get('imageId')
        user = info.context.user
        if user.is_authenticated:
            if id is not None:
                try:
                    image = models.Image.objects.get(id=id)
                    try:
                        like = models.Like.objects.get(
                            creator=user, image=image)
                        like.delete()
                    except models.Like.DoesNotExist:
                        like = models.Like.objects.create(
                            creator=user, image=image)
                        like.save()
                    ok = True
                    return LikeImage(ok=ok)
                except models.Image.DoesNotExist:
                    ok = False
                    error = 'Image Not Found'
                    return LikeImage(ok=ok, error=error)
            else:
                ok = False
                error = 'ID is mandatory'
                return LikeImage(ok=ok, error=error)
        else:
            ok = False
            error = 'You need to log in'
            return LikeImage(ok=ok, error=error)
