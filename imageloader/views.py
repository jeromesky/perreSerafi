# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from .models import Files


from django.shortcuts import render

# Create your views here.

def index(request):

    latest_files = Files.objects.order_by('insertDate')[:5]
    # output = ', '.join([f.name for f in latest_files])
    context = {"files": latest_files}
    return render(request, 'imageloader/index.html', context)
    # return HttpResponse(template.render())


def details(request, id):
    return HttpResponse('Details View with id:  %s' % id)

def result(request, id):
    return HttpResponse('Reults View with id: %s' % id)

def vote(request, id):
    return HttpResponse('Votes view, hellow with id: %s' % id)