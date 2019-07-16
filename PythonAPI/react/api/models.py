from django.db import models

# Create your models here.
from mongoengine import Document, fields

class Student(Document):      
    _id=fields.ObjectIdField()
    netid = fields.IntField()
    name = fields.StringField()
    email = fields.StringField()

       


