from django.db import models

class Users(models.Model):
    name = models.CharField(max_length=255)
    phonenumber = models.CharField(max_length=255)
    websiteurl = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    class Meta:
        db_table='users_users'