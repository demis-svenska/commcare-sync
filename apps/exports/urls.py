from django.urls import path
from . import views


app_name = 'exports'
urlpatterns = [
    path(r'', views.home, name='home'),
    path(r'details/<int:export_id>/', views.export_details, name='export_details'),
]