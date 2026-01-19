from django.urls import path
from .views import ProjectListAPIView, ContactCreateAPIView

urlpatterns = [
    path("projects/", ProjectListAPIView.as_view(), name="projects"),
    path("contact/", ContactCreateAPIView.as_view(), name="contact"),
]
