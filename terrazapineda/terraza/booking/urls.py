from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *




urlpatterns = [
    # path('', views.home, name='home'),
    path('lugares', VenueViewSet.as_view({'get': 'list'})),
]
