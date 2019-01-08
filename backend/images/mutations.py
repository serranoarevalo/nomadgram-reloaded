import graphene
from django.db import IntegrityError
from . import models, types


class LikeImage(graphene.Mutation):

    """ Like an Image """

    class Arguments:
        imageId = graphene.Int(required=True)

    Output = types.LikePhotoResponse

    def mutate(self, info, **kwargs):
        imageId = kwargs.get('imageId')
        user = info.context.user
        ok = True
        error = ''
        if user.is_authenticated:
            try:
                image = models.Image.objects.get(id=imageId)
                try:
                    like = models.Like.objects.get(
                        creator=user, image=image)
                    like.delete()
                except models.Like.DoesNotExist:
                    like = models.Like.objects.create(
                        creator=user, image=image)
                    like.save()
                ok = True
            except models.Image.DoesNotExist:
                ok = False
                error = 'Image Not Found'
        else:
            ok = False
            error = 'You need to log in'
        return types.LikePhotoResponse(ok=ok, error=error)


class AddComment(graphene.Mutation):

    """ Add Comment """

    class Arguments:
        imageId = graphene.Int(required=True)
        message = graphene.String(required=True)

    Output = types.AddCommentResponse

    def mutate(self, info, **kwargs):
        imageId = kwargs.get('imageId')
        message = kwargs.get('message')

        user = info.context.user

        ok = True
        error = ''
        comment = None

        if user.is_authenticated:
            try:
                image = models.Image.objects.get(id=imageId)
                try:
                    comment = models.Comment.objects.create(
                        message=message, image=image, creator=user)
                except IntegrityError:
                    ok = False
                    error = "Can't create the comment"
            except models.Image.DoesNotExist:
                ok = False
                error = 'Image Not Found'
        else:
            ok = False
            error = 'You need to log in'
        return types.AddCommentResponse(ok=ok, error=error, comment=comment)
