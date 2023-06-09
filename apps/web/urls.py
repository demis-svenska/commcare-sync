from django.urls import path
from django.views.generic import TemplateView

from . import views

app_name = 'web'
urlpatterns = [
    path('', views.home, name='home'),
    path('admin-required', views.admin_required, name='admin_required'),
    path('terms', TemplateView.as_view(template_name="web/terms.html"), name='terms'),
]
