from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Users
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.shortcuts import redirect
import hashlib


# Create your views here.

def hashing(password):
    password = hashlib.sha3_512(password.encode('utf-8')).hexdigest()
    return password

@api_view(['POST'])
def login(request):
    data = json.loads(request.body)
    hashword = data['password']
    password = hashing(hashword)
    
    try:
        validate_email(data['email'])
    except ValidationError as e:
        print("bad email, details:", e)
        return Response("bad Email, details:", e)
    else:
        print("good email")
        try:
            user = Users.objects.get(email=data['email'], password = password)
            if user != None:
                return Response('success')
            else: 
                return Response("no User")
        except:
            print("user does not exist.")
            return Response('error')
        

@api_view(['POST'])
def register(request):
    data = json.loads(request.body)
    password = data['password']
    hashword = hashing(password)
    try:
        if len(Users.objects.filter(email=data['email'])) >= 1:
            return Response('Already registered User, Try again')
        # elif len(Users.objects.filter(email=data['email']) >= 1:
        # # if len(user) >= 1:
        #     return Response('Already registered User, Try again')
    except FileNotFoundError:
        raise ValueError('No file found')
    else:
        user = Users(
            name=data['name'], 
            phonenumber=data['phone'], 
            websiteurl=data['website_url'],
            email=data['email'],
            password=hashword
        )
        user.save()
        return Response('sucess')

@api_view(['POST'])
def account(request):
    data = json.loads(request.body)
    user=Users.objects.filter(email=data['username']).values().get()
    return Response(user)

@api_view(['POST'])
def update(request):
    data = json.loads(request.body)
    print(data)
    user = Users.objects.get(id=data['id']) # object to update
    user.name = data['firstname'] # update name
    user.phonenumber = data['phone'] # update name
    user.email = data['email'] # update name
    user.password = data['password_old'] # update name
    user.save() # save object
    return Response('sucess')

