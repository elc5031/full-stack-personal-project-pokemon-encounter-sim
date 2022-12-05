from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.

def index(request):
    homepage = open('static/index.html').read()
    return HttpResponse(homepage)