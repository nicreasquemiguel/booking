from rest_framework import serializers
from .models import Venue
from django.contrib.auth import get_user_model

User = get_user_model()

class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venue
        fields = '__all__'