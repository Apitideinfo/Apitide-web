from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'phone', 'project_type', 'created_at')
    search_fields = ('full_name', 'email', 'project_type')
    list_filter = ('project_type', 'created_at')