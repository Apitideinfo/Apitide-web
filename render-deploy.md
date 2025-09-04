# Render Deployment Steps

## 1. Prepare Repository
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

## 2. Create Render Account
- Go to https://render.com
- Sign up with GitHub

## 3. Create Web Service
- Click "New +" → "Web Service"
- Connect your GitHub repository
- Select your repository

## 4. Configure Service
**Basic Settings:**
- Name: `apitide-web`
- Environment: `Python 3`
- Region: Choose closest to your users
- Branch: `main`

**Build & Deploy:**
- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn company_web.wsgi:application`

## 5. Environment Variables
Click "Environment" tab and add:
```
SECRET_KEY = django-insecure-your-secret-key-here-make-it-long-and-random
DEBUG = False
EMAIL_HOST_USER = your-email@gmail.com
EMAIL_HOST_PASSWORD = your-gmail-app-password
```

## 6. Deploy
- Click "Create Web Service"
- Wait for deployment (5-10 minutes)

## 7. Run Database Migration
- Go to your service dashboard
- Click "Shell" tab
- Run: `python manage.py migrate`

## 8. Access Your Site
- Your app will be available at: `https://your-app-name.onrender.com`

## Troubleshooting
- Check "Logs" tab for errors
- Ensure all environment variables are set
- Verify requirements.txt includes all dependencies