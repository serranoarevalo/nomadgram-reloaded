from . import types, models


def resolve_get_notifications(self, info, **kwargs):

    user = info.context.user
    page = kwargs.get('page', 0)

    ok = True
    error = None

    if user.is_authenticated:

        notifications = models.Notification.objects.filter(target=user)[
            25 * page:15]

        return types.GetNotificationsResponse(ok=ok, notifications=notifications)

    else:
        error = "Unauthorized"
        return types.GetNotificationsResponse(ok=not ok, error=error)
