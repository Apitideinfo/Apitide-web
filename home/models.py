from django.db import models

class Contact(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    project_type = models.CharField(max_length=100, blank=True)
    budget_range = models.CharField(max_length=50, blank=True)
    industry = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100, blank=True)
    details = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.full_name} <{self.email}>"

class NewsletterSubscriber(models.Model):
    first_name = models.CharField(max_length=100, blank=True)
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.first_name} <{self.email}>"

