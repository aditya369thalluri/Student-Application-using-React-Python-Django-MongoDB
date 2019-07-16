from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Student
from .serializers import StudentSerializer
import json

class StudentView(APIView):

    def get(self, request):
        serializer = StudentSerializer(Student.objects.all(), many=True)
        response = {"Students": serializer.data}
        headers = {
            "Access-Control-Allow-Origin": "*"
           
        }
        return Response(response, headers=headers, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        data = request.data
        student = Student.objects.get(_id=data["_id"])
        print(student)
        student.name = data["name"]
        student.email=data["email"]
        student.save()
        response = StudentSerializer(student).data
        headers = {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin": "*"
           
        }
        return Response(response,headers=headers, status=status.HTTP_200_OK)
