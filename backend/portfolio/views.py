from rest_framework import generics
from django.core.mail import send_mail
from django.conf import settings
from .models import Project, ContactMessage
from .serializers import ProjectSerializer, ContactMessageSerializer


# GET all projects
class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


# POST contact message
class ContactCreateAPIView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):

        message = serializer.save()

        try:
            send_mail(
                subject=f"New contact message from {message.name}",
                message=f"""
Name: {message.name}
Email: {message.email}

Message:
{message.message}
                """,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.DEFAULT_FROM_EMAIL],
                fail_silently=False,
            )
        except Exception as e:
            # Print the error so it shows in Render logs, but don't crash the request!
            # If it crashes, Render load balancers return a 502 without CORS headers, 
            # causing the browser to show a CORS error instead of the real error.
            print(f"Failed to send email: {e}")
