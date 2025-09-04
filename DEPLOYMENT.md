# Deployment Guide

## Prerequisites
- Python 3.11+
- Git repository

## Environment Variables
Create a `.env` file (copy from `.env.example`) and set:
- `SECRET_KEY`: Django secret key
- `DEBUG`: Set to `False` for production
- `EMAIL_HOST_USER`: Your Gmail address
- `EMAIL_HOST_PASSWORD`: Gmail app password

## Deploy to Heroku
1. Install Heroku CLI
2. `heroku create your-app-name`
3. `heroku config:set SECRET_KEY="your-secret-key"`
4. `heroku config:set DEBUG=False`
5. `heroku config:set EMAIL_HOST_USER="your-email"`
6. `heroku config:set EMAIL_HOST_PASSWORD="your-password"`
7. `git push heroku main`
8. `heroku run python manage.py migrate`

## Deploy to Railway
1. Connect GitHub repository
2. Set environment variables in Railway dashboard
3. Deploy automatically triggers

## Local Development
1. `pip install -r requirements.txt`
2. `python manage.py migrate`
3. `python manage.py runserver`