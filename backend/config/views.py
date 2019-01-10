import boto3
import uuid
from django.http import JsonResponse, HttpResponseBadRequest


def sign_s3(request):

    if request.method != 'POST':

        return HttpResponseBadRequest()

    try:

        file = request.FILES.get('file')

        file_name = str(uuid.uuid4())

        s3 = boto3.resource('s3')

        upload = s3.Bucket(
            'nomadgram-reloaded').upload_fileobj(file, file_name)

        # upload = client.put_object(ACL='public-read', Bucket='nomadgram-reloaded', Key=str(uuid.uuid4()), Body=file)

        return JsonResponse({'ok': True, 'upload': upload})

    except Exception as e:

        print(e)
        return HttpResponseBadRequest()
