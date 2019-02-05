from django.contrib import admin
from . import models


@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
    pass


@admin.register(models.File)
class FileImageAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Story)
class StoryAdmin(admin.ModelAdmin):
    pass
