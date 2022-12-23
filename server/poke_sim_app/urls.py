from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('signIn/', views.signIn),
    path('signUp/', views.signUp),
    path('signOut/', views.signOut),
    path('current_user', views.curr_user),
    path('addPoke/', views.addPoke),
    path('getPokes/', views.getPokes),
    path('getPokeball/', views.getPokeball),
    path('releasePoke/<int:poke_id>/', views.releasePoke),
]