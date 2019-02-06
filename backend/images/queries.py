from graphql_jwt.decorators import login_required
from django.db import IntegrityError
from . import types, models


@login_required
def resolve_feed(self, info, **kwargs):

    user = info.context.user
    page = kwargs.get('page', 0)
    offset = 5 * page

    following_profiles = user.profile.following.all()

    images = models.Image.objects.filter(
        creator__profile__in=following_profiles)

    my_images = user.images.all()

    combined = images.union(my_images).order_by(
        'created_at')[offset:5 + offset]

    return types.FeedResponse(images=combined)


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


@login_required
def resolve_stories(self, info):
    user = info.context.user

    following_profiles = user.profile.following.all()

    story_list = []

    for following_profile in following_profiles:

        user_stories = following_profile.active_stories

        if len(user_stories) == 0:
            continue
        else:

            class StoryObject(object):
                def __init__(self, user, stories):
                    self.user = user
                    self.stories = stories

            story_object = StoryObject(following_profile.user, user_stories)

            story_list.append(story_object)

    return types.StoriesResponse(story_list=story_list)
