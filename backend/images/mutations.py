import graphene
from django.db import IntegrityError
from graphql_jwt.decorators import login_required
from notifications import models as notification_models
from . import models, types


class LikeImage(graphene.Mutation):

    """ Like an Image """

    class Arguments:
        imageId = graphene.Int(required=True)

    Output = types.LikeImageResponse

    @login_required
    def mutate(self, info, **kwargs):
        imageId = kwargs.get('imageId')
        user = info.context.user

        try:
            image = models.Image.objects.get(id=imageId)
        except models.Image.DoesNotExist:
            raise Exception('Image Not Found')

        try:
            like = models.Like.objects.get(
                creator=user, image=image)
            like.delete()
            return types.LikeImageResponse(ok=True)
        except models.Like.DoesNotExist:
            pass

        try:
            like = models.Like.objects.create(
                creator=user, image=image)
            return types.LikeImageResponse(ok=True)
        except IntegrityError as e:
            raise Exception("Can't Like Image")

        try:
            notification_models.Notification.objects.create(
                actor=user, target=image.creator, verb="like", payload=image)
        except IntegrityError as e:
            pass


class AddComment(graphene.Mutation):

    """ Add Comment """

    class Arguments:
        imageId = graphene.Int(required=True)
        message = graphene.String(required=True)

    Output = types.AddCommentResponse

    @login_required
    def mutate(self, info, **kwargs):
        imageId = kwargs.get('imageId')
        message = kwargs.get('message')

        user = info.context.user

        comment = None

        try:
            image = models.Image.objects.get(id=imageId)
        except models.Image.DoesNotExist:
            raise Exception('Image Not Found')

        try:
            comment = models.Comment.objects.create(
                message=message, image=image, creator=user)
            return types.AddCommentResponse(comment=comment)
        except IntegrityError as e:
            print(e)
            raise Exception("Can't create the comment")

        try:
            notification_models.Notification.objects.create(
                actor=user, target=image.creator, verb="comment", payload=image)
        except IntegrityError as e:
            print(e)
            pass


class DeleteComment(graphene.Mutation):

    class Arguments:
        imageId = graphene.Int(required=True)
        commentId = graphene.Int(required=True)

    Output = types.DeleteCommentResponse

    def mutate(self, info, **kwargs):
        imageId = kwargs.get('imageId')
        commentId = kwargs.get('commentId')

        user = info.context.user

        ok = True
        error = None

        if user.is_authenticated:

            try:
                image = models.Image.objects.get(id=imageId)
            except models.Image.DoesNotExist:
                error = 'Image Not Found'
                return types.DeleteCommentResponse(ok=not ok, error=error)

            try:
                comment = models.Comment.objects.get(id=commentId)
            except models.Comment.DoesNotExist:
                error = 'Comment Not Found'
                return types.DeleteCommentResponse(ok=not ok, error=error)

            if comment.creator.id == user.id or image.creator.id == user.id:
                comment.delete()
            else:
                error = "Can't Delete Comment"
            return types.DeleteCommentResponse(ok=not ok, error=error)

            try:
                notification = notification_models.Notification.objects.get(
                    actor=user, target=image.creator, verb="comment", payload=image)
                notification.delete()
            except notification_models.Notification.DoesNotExist:
                pass

        else:
            error = 'You need to log in'
            return types.DeleteCommentResponse(ok=not ok, error=error)


class EditImage(graphene.Mutation):

    class Arguments:

        imageId = graphene.Int(required=True)
        caption = graphene.String()
        location = graphene.String()

    Output = types.EditImageResponse

    def mutate(self, info, **kwargs):

        user = info.context.user
        imageId = kwargs.get('imageId')

        ok = True
        error = None

        if user.is_authenticated:

            try:
                image = models.Image.objects.get(id=imageId)
            except models.Image.DoesNotExist:
                error = "Image Not Found"
                return types.EditImageResponse(ok=not ok, error=error)

            if image.creator.id != user.id:

                error = "Unauthorized"
                return types.EditImageResponse(ok=not ok, error=error)

            else:

                try:

                    caption = kwargs.get('caption', image.caption)
                    location = kwargs.get('location', image.location)

                    image.caption = caption
                    image.location = location

                    image.save()
                    return types.EditImageResponse(ok=ok, error=error, image=image)

                except IntegrityError as e:
                    print(e)
                    error = "Can't Save Image"
                    return types.EditImageResponse(ok=not ok, error=error)

        else:
            error = 'You need to log in'
            return types.EditImageResponse(ok=not ok, error=error)


class DeleteImage(graphene.Mutation):

    class Arguments:
        imageId = graphene.Int(required=True)

    Output = types.DeleteImageResponse

    def mutate(self, info, **kwargs):

        user = info.context.user
        imageId = kwargs.get("imageId")

        ok = True
        error = None

        if user.is_authenticated:

            try:
                image = models.Image.objects.get(id=imageId)
            except models.Image.DoesNotExist:
                error = "Image Not Found"
                return types.DeleteImageResponse(ok=not ok, error=error)

            if image.creator.id == user.id:

                image.delete()

                return types.DeleteImageResponse(ok=ok, error=error)

            else:

                error = "Unauthorized"
                return types.DeleteImageResponse(ok=not ok, error=error)

        else:
            error = "Unauthorized"
            return types.DeleteImageResponse(ok=not ok, error=error)


class UploadImage(graphene.Mutation):

    class Arguments:

        fileUrls = graphene.List(graphene.String)
        caption = graphene.String(required=True)
        location = graphene.String()

    Output = types.UploadImageResponse

    @login_required
    def mutate(self, info, **kwargs):

        user = info.context.user

        ok = True
        error = None

        fileUrls = kwargs.get('fileUrls')
        caption = kwargs.get('caption')
        location = kwargs.get('location')

        try:
            image = models.Image.objects.create(
                creator=user, caption=caption, location=location)

            for url in fileUrls:
                try:
                    fileImage = models.FileImage.objects.create(
                        fileURL=url, creator=user)
                    image.files.add(fileImage)
                    image.save()
                except IntegrityError as e:
                    print(e)
                    raise Exception("Can't Create Image")

            return types.UploadImageResponse(image=image)
        except IntegrityError as e:
            print(e)
            raise Exception("Can't Create Image")
