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

        # Render Free Tier blocks outbound SMTP ports (587), causing the socket to hang for 30s.
        # We must run this in a background thread so the HTTP response can return immediately.
        import threading

        def send_email_async():
            if getattr(settings, 'EMAIL_HOST_USER', None):
                try:
                    send_mail(
                        subject=f"New contact message from {message.name}",
                        message=f"Name: {message.name}\nEmail: {message.email}\n\nMessage:\n{message.message}",
                        from_email=settings.DEFAULT_FROM_EMAIL,
                        recipient_list=[settings.DEFAULT_FROM_EMAIL],
                        fail_silently=True,
                    )
                except Exception as e:
                    print(f"Async email failed: {e}")

        # Start the thread and don't wait for it to finish
        email_thread = threading.Thread(target=send_email_async)
        email_thread.daemon = True
        email_thread.start()
