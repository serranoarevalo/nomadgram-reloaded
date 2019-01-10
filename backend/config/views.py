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
            'nomadgram-reloaded').upload_fileobj(file, file_name, {'ACL': 'public-read'})

        url = f'https://s3-ap-northeast-1.amazonaws.com/nomadgram-reloaded/{file_name}'

        return JsonResponse({'ok': True, 'URL': url})

    except Exception as e:

        print(e)
        return HttpResponseBadRequest()
