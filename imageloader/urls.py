from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<id>[0-9]+)/$', views.details, name='index'),
    url(r'^(?P<id>[0-9]+)/result$', views.result, name='results'),
    url(r'^(?P<id>[0-9]+)/vote$', views.vote, name='vote'),

]