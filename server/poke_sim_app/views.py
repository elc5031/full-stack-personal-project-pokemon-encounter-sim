from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from django.core import serializers
from .models import *

# Create your views here.

def index(request):
    homepage = open('static/index.html').read()
    return HttpResponse(homepage)

#
# API ROUTES
#
@api_view(["POST"])
def signIn(request):
    email=request.data["email"]
    password=request.data["password"]
    print(email, password)
    user = authenticate(username= email, password = password)
    print(user)
    if user is not None and user.is_active:
        try:
            login(request._request, user)
            return JsonResponse({'signIn':True})
        except Exception as e:
            print(e)
            return JsonResponse({'signIn':False})
    else:
        return JsonResponse({'signIn':False})
        
@api_view(["GET"])
def curr_user(request):
    if request.user.is_authenticated:
        data=serializers.serialize("json", [request.user], fields=['email'])
        return HttpResponse(data)
    else:
        return JsonResponse({"user":None})
        
        
    

@api_view(["POST"])
def signUp(request):
    # print(request.data)
    email=request.data["email"]
    password=request.data["password"]
    print(email, password)
    try:
        AppUser.objects.create_user(username=email, email=email, password=password)
        return JsonResponse({'signup':True})
    except Exception as e:
        print(e)
        return JsonResponse({'signup':False})

@api_view(["POST"])
def signOut(request):
    try:
        logout(request)
        return JsonResponse({'signout':True})
    except Exception as e:
        print(e)
        return JsonResponse({'signout':False})

@api_view(["POST"])
def addPoke(request):
    name = request.data['name']
    poke_id = request.data['poke_id']
    img_link = request.data['img_link']
    try:
        if OwnedPoke.objects.filter(name=name).exists():
            return JsonResponse({'addpoke':'poke already added'})
        else:
            new_poke = OwnedPoke(name=name, poke_id=poke_id, img_link=img_link)
            new_poke.save()
            return JsonResponse({'addpoke':True})
    except Exception as e:
        print(e)
        return JsonResponse({'addpoke':False})

@api_view(["GET"])
def getPokes(request):
    all_pokes = OwnedPoke.objects.all()
    all_pokes_values = all_pokes.values()
    list_all_pokes_values = [entry for entry in all_pokes_values]
    return JsonResponse({'data': list_all_pokes_values})

    