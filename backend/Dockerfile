# Use official Python image
FROM python:3.12-slim

# Environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set work directory
WORKDIR /app

# Install system dependencies (Postgres + build tools)
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Collect static files (Render provides env vars at build time)
RUN python manage.py collectstatic --noinput

# Expose port (Render uses 8000 by default)
EXPOSE 8000

# Start Gunicorn
CMD sh -c "python manage.py migrate && gunicorn server.wsgi:application --bind 0.0.0.0:8000"

