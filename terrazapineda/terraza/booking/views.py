from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Venue
from .serializers import VenueSerializer

class VenueViewSet(ModelViewSet):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer
    # permission_classes = ['IsAuthenticated']

# Create your views here.
def home(request):
    return render(request, 'home.html', {})