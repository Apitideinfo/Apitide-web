from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from django.http import JsonResponse
from .models import Contact, NewsletterSubscriber


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
        budget_range = request.POST.get('budget_range', '').strip()
        industry = request.POST.get('industry', '').strip()
        country = request.POST.get('country', '').strip()
        details = request.POST.get('details', '').strip()

        if not full_name or not email:
            messages.error(request, 'Full name and email are required.')
            return redirect('contact')

        contact_obj = Contact.objects.create(
            full_name=full_name,
            email=email,
            phone=phone,
            project_type=project_type,
            budget_range=budget_range,
            industry=industry,
            country=country,
            details=details,
        )

        subject = f"New Contact: {contact_obj.full_name} ({contact_obj.project_type or 'General'})"
        message = (
            f"Name: {contact_obj.full_name}\n"
            f"Email: {contact_obj.email}\n"
            f"Phone: {contact_obj.phone}\n"
            f"Project Type: {contact_obj.project_type}\n"
            f"Budget Range: {contact_obj.budget_range}\n"
            f"Industry: {contact_obj.industry}\n"
            f"Country: {contact_obj.country}\n\n"
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
            user_subject = "Thanks for contacting Apitide"
            user_message = (
                f"Hi {contact_obj.full_name},\n\n"
                "Thanks for reaching out! We received your message and will get back to you within 24 hours.\n\n"
                "Here is a copy of your submission:\n"
                f"Name: {contact_obj.full_name}\n"
                f"Email: {contact_obj.email}\n"
                f"Phone: {contact_obj.phone}\n"
                f"Project Type: {contact_obj.project_type}\n"
                f"Budget Range: {contact_obj.budget_range}\n"
                f"Industry: {contact_obj.industry}\n"
                f"Country: {contact_obj.country}\n\n"
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
            messages.success(request, "Thanks! Your message has been sent. We'll get back to you within 24 hours.")
        except Exception as exc:
            if settings.DEBUG:
                messages.warning(request, f'We saved your message, but email failed to send: {exc}')
            else:
                messages.warning(request, 'We saved your message, but email failed to send.')

        return redirect('contact')

    return render(request, 'contact.html')


def newsletter_subscribe(request):
    """Handle newsletter subscription via AJAX POST."""
    if request.method == 'POST':
        first_name = request.POST.get('first_name', '').strip()
        email = request.POST.get('email', '').strip()

        if not email:
            return JsonResponse({'success': False, 'error': 'Email is required.'})

        try:
            subscriber, created = NewsletterSubscriber.objects.get_or_create(
                email=email,
                defaults={'first_name': first_name}
            )
            if created:
                try:
                    send_mail(
                        subject='Welcome to the APITIDE Weekly AI Digest!',
                        message=(
                            f"Hi {first_name or 'there'},\n\n"
                            "You're now subscribed to the APITIDE Weekly AI Digest!\n\n"
                            "Every week you'll receive:\n"
                            "- Guides on self-hosting n8n workflows\n"
                            "- Prompt tuning strategies\n"
                            "- B2B software architecture insights\n\n"
                            "No spam, just raw code engineering.\n\n"
                            "Best regards,\nThe APITIDE Team"
                        ),
                        from_email=settings.DEFAULT_FROM_EMAIL,
                        recipient_list=[email],
                        fail_silently=True,
                    )
                except Exception:
                    pass
                name_part = f' {first_name}' if first_name else ''
                return JsonResponse({'success': True, 'message': f'Welcome{name_part}! You\'re now subscribed to the AI Digest.'})
            else:
                return JsonResponse({'success': False, 'error': 'This email is already subscribed!'})
        except Exception:
            return JsonResponse({'success': False, 'error': 'Subscription failed. Please try again.'})

    return JsonResponse({'success': False, 'error': 'Invalid request.'})


def projects(request):
    return render(request, 'projects.html')


def services(request):
    return render(request, 'services.html')


def design_system(request):
    return render(request, 'design_system.html')


def ai_tools(request):
    return render(request, 'ai_tools.html')


def resources(request):
    return render(request, 'resources.html')


def sitemap_xml(request):
    """Serve dynamic XML sitemap."""
    from django.http import HttpResponse
    from django.utils import timezone
    today = timezone.now().strftime('%Y-%m-%d')
    base = 'https://www.apitide.com'
    urls = [
        {'loc': f'{base}/', 'priority': '1.0', 'freq': 'weekly'},
        {'loc': f'{base}/services/', 'priority': '0.9', 'freq': 'monthly'},
        {'loc': f'{base}/projects/', 'priority': '0.9', 'freq': 'monthly'},
        {'loc': f'{base}/ai-tools/', 'priority': '0.9', 'freq': 'monthly'},
        {'loc': f'{base}/resources/', 'priority': '0.9', 'freq': 'monthly'},
        {'loc': f'{base}/about/', 'priority': '0.8', 'freq': 'monthly'},
        {'loc': f'{base}/contact/', 'priority': '0.8', 'freq': 'monthly'},
    ]
    xml_lines = ['<?xml version="1.0" encoding="UTF-8"?>',
                 '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in urls:
        xml_lines.append('  <url>')
        xml_lines.append(f'    <loc>{u["loc"]}</loc>')
        xml_lines.append(f'    <lastmod>{today}</lastmod>')
        xml_lines.append(f'    <changefreq>{u["freq"]}</changefreq>')
        xml_lines.append(f'    <priority>{u["priority"]}</priority>')
        xml_lines.append('  </url>')
    xml_lines.append('</urlset>')
    return HttpResponse('\n'.join(xml_lines), content_type='application/xml')


def robots_txt(request):
    """Serve robots.txt."""
    from django.http import HttpResponse
    lines = [
        'User-agent: *',
        'Allow: /',
        'Disallow: /admin/',
        'Disallow: /design-system/',
        '',
        'Sitemap: https://www.apitide.com/sitemap.xml',
    ]
    return HttpResponse('\n'.join(lines), content_type='text/plain')
