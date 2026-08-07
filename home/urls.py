from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('newsletter/subscribe/', views.newsletter_subscribe, name='newsletter_subscribe'),
    path('projects/', views.projects, name='projects'),
    path('services/', views.services, name='services'),
    path('design-system/', views.design_system, name='design_system'),
    path('ai-tools/', views.ai_tools, name='ai_tools'),
    path('resources/', views.resources, name='resources'),
    path('sitemap.xml', views.sitemap_xml, name='sitemap_xml'),
    path('robots.txt', views.robots_txt, name='robots_txt'),
]

