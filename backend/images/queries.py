from django.db import IntegrityError
from . import types, models


def resolve_feed(self, info):

    user = info.context.user

    if user.is_authenticated:

        following_users = user.profile.following.all()

        image_list = []

        for following_user in following_users:

            user_images = following_user.user.images.all()[:2]

            for image in user_images:

                image_list.append(image)

        my_images = user.images.all()[:2]

        for image in my_images:

            image_list.append(image)

        images = sorted(
            image_list, key=lambda image: image.created_at, reverse=True)
        ok = True
        error = ''

    else:

        images = []
        ok = False
        error = 'You need to be authenticated'

    return types.FeedResponse(ok=ok, images=images, error=error)


def resolve_image_likes(self, info, **kwargs):

    imageId = kwargs.get('imageId')
    user = info.context.user

    ok = True
    error = None

    if user.is_authenticated:

        try:
            image = models.Image.objects.get(id=imageId)
        except models.Image.DoesNotExist:
            error = 'Image Not Found'
            return types.PhotoLikeResponse(ok=not ok, error=error)

        likes = image.likes.all()
        return types.PhotoLikeResponse(ok=ok, error=error, likes=likes)

    else:
        error = 'You need to be authenticated'
        return types.PhotoLikeResponse(ok=not ok, error=error)


def resolve_image_detail(self, info, **kwargs):

    imageId = kwargs.get('imageId')
    user = info.context.user

    ok = True
    error = None

    if user.is_authenticated:

        try:
            image = models.Image.objects.get(id=imageId)
        except models.Image.DoesNotExist:
            error = 'Image Not Found'
            return types.ImageDetailResponse(ok=not ok, error=error)

        return types.ImageDetailResponse(ok=ok, error=error, image=image)

    else:

        error = "You need to be authenticated"
        return types.ImageDetailResponse(ok=not ok, error=error)


def resolve_search_images(self, info, **kwargs):

    user = info.context.user
    term = kwargs.get('term')

    ok = True
    error = None

    if user.is_authenticated:

        if len(term) < 4:

            error = "Search Term is Too Short"
            return types.SearchImagesResponse(ok=not ok, error=error)

        else:

            images = models.Image.objects.filter(caption__icontains=term)

            return types.SearchImagesResponse(ok=ok, error=error, images=images)

    else:

        error = "Unauthorized"
        return types.SearchImagesResponse(ok=not ok, error=error)
