# Dashboard (Next.js Frontend and Django Backend)

## Overview

This project is a dashboard application built with Next.js for the frontend and Django for the backend. It displays various charts using Recharts, including bar charts, line charts, pie charts, and candlestick charts.

## Backend

### Technologies Used

- Django: Web framework for building the backend API.

## Installation

1. Clone the repo:

```
git clone https://github.com/arifmanawer/django_dash.git
```

2. Navigate to backend

```
cd django_dash/backend/chart_api
```

3. Create virtual environment

```
python -m venv venv
```

4. Activate virtual environment

### For Windows

```
venv\Scripts\activate
```

### For macOS/Linux

```
source venv/bin/activate
```

5. Install Django

```
pip install django
```

6. Run migrations command

```
python manage.py makemigrations
python manage.py migrate
```

7. Start backend server

```
python manage.py runserver
```

## Frontend

### Technologies Used

- Next.js: React framework for building the frontend.
- Recharts: Charting library for rendering charts.
- Axios: HTTP client for fetching data from the backend.

## Installation/Setup

1. Navigate to frontend from root folder (django_dash):

```
cd frontend/django_dash_front
```

2. Install Dependencies:

```
npm install
```

3. Run the development server

```
npm run dev
```
