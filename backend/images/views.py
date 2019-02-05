from django.shortcuts import render
from django.http import HttpResponse
import datetime
from . import models

# Create your views here.


def expire_stories(request):

    yesterday = datetime.datetime.now(
        datetime.timezone.utc) - datetime.timedelta(days=1)

    stories = models.Story.objects.filter(
        created_at__lte=yesterday, expired=False)

    for story in stories:

        story.expired = True
        story.save()

    return HttpResponse(status=200)
