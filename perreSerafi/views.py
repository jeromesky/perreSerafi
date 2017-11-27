from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.core.mail import send_mail, send_mass_mail
from django.core.validators import EmailValidator, validate_email
from django.core.exceptions import ValidationError
import json
import os



def index(request):

    return render(
        request,
        'index.html',
        context={'myRequest': request},
    )

def rest(request):
    return render(
        request,
        'rest.html',
        context={'myRequest': request},
    )

def relax(request):
    return render(
        request,
        'relax.html',
        context={'myRequest': request},
    )

def living(request):
    return render(
        request,
        'living.html',
        context={'myRequest': request},
    )


def contact(request):
    dic = {
        "name": request.GET.get('name', 'John Dhooo'),
        "email": request.GET.get('email', 'xxx@xx.com'),
        "message": request.GET.get('message', 'Message missing'),
        "error" : 0,
        "pmessage" : 'Email sent, Thank you'
        }

    # EmailValidator(message=None, code=None, whitelist=None)

    try:
        validate_email(dic['email'])

    except ValidationError as e:

        dic['error'] = 1
        dic['pmessage'] = 'The email address supplied is not valid'

    else:

        #send_mail('my subject', dic['message'], 'jerome@glopac.com', ['sky.jerome@gmail.com'])

        listToSend = (
            ('Interest/Question in the Barcelona property to my ', dic['message'], 'jerome@glopac.com', ['sky.jerome@gmail.com']),
            ('Interest/Question in the Barcelona property to Client', dic['message'], 'jerome@glopac.com', [dic['email']]),
        )

        send_mass_mail(listToSend)
    #'my subject', dic['message'], 'jerome@glopac.com', ['sky.jerome@gmail.com']
    # name = request.GET.get('name', 'John Dhooo')
    # email = request.GET.get('email', 'xxx@xx.com')
    # message = request.GET.get('message', 'Message missing') //json.dumps(dic)
    # print doSend
    return JsonResponse(dic)


def out(request):

    baseDir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    what = os.path.join(os.path.dirname(baseDir), "static_cdn")
    return HttpResponse()