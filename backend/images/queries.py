from graphql_jwt.decorators import login_required
from django.db import IntegrityError
from . import types, models


@login_required
def resolve_feed(self, info, **kwargs):

    user = info.context.user
    page = kwargs.get('page', 0)

    following_users = user.profile.following.all()

    image_list = []

    for following_user in following_users:

        user_images = following_user.user.images.all()[2 * page:2]

        for image in user_images:

            image_list.append(image)

    my_images = user.images.all()[2 * page:2]

    for image in my_images:

        image_list.append(image)

    images = sorted(
        image_list, key=lambda image: image.created_at, reverse=True)

    return types.FeedResponse(images=images)


@login_required
def resolve_image_likes(self, info, **kwargs):

    imageId = kwargs.get('imageId')
    user = info.context.user

    try:
        image = models.Image.objects.get(id=imageId)
    except models.Image.DoesNotExist:
        raise Exception('Image not found')

    likes = image.likes.all()
    return types.PhotoLikeResponse(likes=likes)


@login_required
def resolve_image_detail(self, info, **kwargs):

    imageId = kwargs.get('imageId')
    user = info.context.user

    try:
        image = models.Image.objects.get(id=imageId)
    except models.Image.DoesNotExist:
        raise Exception('Image not found')

    return types.ImageDetailResponse(image=image)


@login_required
def resolve_search_images(self, info, **kwargs):

    user = info.context.user
    term = kwargs.get('term')

    if len(term) < 4:

        raise Exception('Search Term is too short')

    else:

        images = models.Image.objects.filter(caption__icontains=term)

        return types.SearchImagesResponse(images=images)


@login_required
def resolve_latest_images(self, info):

    user = info.context.user

    images = models.Image.objects.filter().order_by('-created_at')[:10]
    return types.LatestImagesResponse(images=images)
