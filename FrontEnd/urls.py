from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.index, name='index'),
] + static(settings.CSS_URL, document_root=settings.CSS_ROOT) + static(settings.IMG_URL, document_root=settings.IMG_ROOT) + static(settings.JS_URL, document_root=settings.JS_ROOT)