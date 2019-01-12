from . import types, models


def resolve_get_notifications(self, info):

    user = info.context.user

    ok = True
    error = None

    if user.is_authenticated:

        notifications = models.Notification.objects.filter(target=user)[:10]

        return types.GetNotificationsResponse(ok=ok, notifications=notifications)

    else:
        error = "Unauthorized"
        return types.GetNotificationsResponse(ok=not ok, error=error)
