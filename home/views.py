from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from .models import Contact

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    if request.method == 'POST':
        full_name = request.POST.get('full_name', '').strip()
        email = request.POST.get('email', '').strip()
        phone = request.POST.get('phone', '').strip()
        project_type = request.POST.get('project_type', '').strip()
        details = request.POST.get('details', '').strip()

        if not full_name or not email:
            messages.error(request, 'Full name and email are required.')
            return redirect('contact')

        contact_obj = Contact.objects.create(
            full_name=full_name,
            email=email,
            phone=phone,
            project_type=project_type,
            details=details,
        )

        subject = f"New Contact: {contact_obj.full_name} ({contact_obj.project_type or 'General'})"
        message = (
            f"Name: {contact_obj.full_name}\n"
            f"Email: {contact_obj.email}\n"
            f"Phone: {contact_obj.phone}\n"
            f"Project Type: {contact_obj.project_type}\n\n"
            f"Details:\n{contact_obj.details}"
        )

        try:
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
            # Send acknowledgment email to the user
            user_subject = "Thanks for contacting Apitide"
            user_message = (
                f"Hi {contact_obj.full_name},\n\n"
                "Thanks for reaching out! We received your message and will get back to you within 24 hours.\n\n"
                "Here is a copy of your submission:\n"
                f"Name: {contact_obj.full_name}\n"
                f"Email: {contact_obj.email}\n"
                f"Phone: {contact_obj.phone}\n"
                f"Project Type: {contact_obj.project_type}\n\n"
                f"Details:\n{contact_obj.details}\n\n"
                "Best regards,\n"
                "Apitide Team"
            )
            try:
                ack_email = EmailMessage(
                    subject=user_subject,
                    body=user_message,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    to=[contact_obj.email],
                    reply_to=[settings.EMAIL_HOST_USER],
                )
                ack_email.send(fail_silently=False)
            except Exception as user_exc:
                if settings.DEBUG:
                    messages.warning(request, f'Could not send acknowledgment email to you: {user_exc}')
            messages.success(request, 'Thanks! Your message has been sent.')
        except Exception as exc:
            if settings.DEBUG:
                messages.warning(request, f'We saved your message, but email failed to send: {exc}')
            else:
                messages.warning(request, 'We saved your message, but email failed to send.')

        return redirect('contact')

    return render(request, 'contact.html')

def projects(request):
    return render(request, 'projects.html')

def services(request):
    return render(request, 'services.html')


# Create your views here.
