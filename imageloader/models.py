# -*- coding: utf-8 -*-
# from __future__ import unicode_literals
from django.db import models


# Create your models here.
class Files(models.Model):
    name        = models.CharField(max_length=80)
    src         = models.CharField(max_length=80)
    type        = models.IntegerField(default=0)
    insertDate  = models.DateField('date published')

    def __str__(self):
        return self.name + ' ( ' + str(self.type) + ' )'



class Choice(models.Model):
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    Files = models.ForeignKey(Files)

    def __str__(self):
        return self.choice_text


