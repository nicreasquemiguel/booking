from django.db import models
import datetime
from users.models import UserAccount

class Package(models.Model):
    n_people = models.IntegerField(default=30)
    price = models.FloatField()
    title = models.CharField(max_length = 255, blank = True)
    description = models.TextField()
    hours = models.TextField()
    
    def __str__(self):
        return self.title + " de " + str(self.n_people) + " personas"

class Extra(models.Model):
    title = models.CharField(max_length = 255, blank = True)
    description = models.TextField()
    price = models.FloatField()

    def __str__(self):
        return self.title


class Venue(models.Model):
    name = models.CharField(max_length = 255, blank = True)
    address = models.CharField(max_length = 255, blank = True)

    def __str__(self):
        return self.name


ta = datetime.time(10,00,00)
td = datetime.time(00,00,00)

class Event(models.Model):
    date = models.DateField(primary_key = True)
    arrival = models.TimeField(default = ta)
    departure = models.TimeField(default = td)
    package = models.ForeignKey(Package, on_delete= models.PROTECT, related_name= "package")
    extras =  models.ManyToManyField(Extra)
    client = models.ForeignKey(UserAccount, on_delete= models.PROTECT, related_name= "client")
    admin = models.ForeignKey(UserAccount, on_delete= models.PROTECT, related_name= "admin")
    venue = models.ForeignKey(Venue, on_delete = models.PROTECT, related_name = "venue")
    created = models.DateTimeField(auto_now_add = True)
    modified = models.DateTimeField(auto_now = True)
    advance = models.FloatField(default = 0)

    def __str__(self):
        return self.client.first_name + " " + self.client.last_name + " el " + str(self.date)
