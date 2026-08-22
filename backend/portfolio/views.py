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

        # Only attempt to send email if the SMTP credentials are actually configured
        if getattr(settings, 'EMAIL_HOST_USER', None):
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
                    fail_silently=True,
                )
            except Exception as e:
                print(f"Failed to send email: {e}")
        else:
            print("Skipping email notification: EMAIL_HOST_USER is not configured in environment variables.")
