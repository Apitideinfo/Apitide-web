from django.test import TestCase
from django.urls import reverse

class APITIDEPagesTestCase(TestCase):
    def test_homepage(self):
        response = self.client.get(reverse('index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "<title>")
        self.assertContains(response, "APITIDE")

    def test_services_page(self):
        response = self.client.get(reverse('services'))
        self.assertEqual(response.status_code, 200)

    def test_about_page(self):
        response = self.client.get(reverse('about'))
        self.assertEqual(response.status_code, 200)

    def test_projects_page(self):
        response = self.client.get(reverse('projects'))
        self.assertEqual(response.status_code, 200)

    def test_contact_page(self):
        response = self.client.get(reverse('contact'))
        self.assertEqual(response.status_code, 200)

    def test_design_system_page(self):
        response = self.client.get(reverse('design_system'))
        self.assertEqual(response.status_code, 200)

    def test_ai_tools_page(self):
        response = self.client.get(reverse('ai_tools'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "AI Customer Support Agent")

    def test_resources_page(self):
        response = self.client.get(reverse('resources'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Resource Center")

    def test_sitemap_xml(self):
        response = self.client.get(reverse('sitemap_xml'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response['Content-Type'], 'application/xml')

    def test_robots_txt(self):
        response = self.client.get(reverse('robots_txt'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response['Content-Type'], 'text/plain')
