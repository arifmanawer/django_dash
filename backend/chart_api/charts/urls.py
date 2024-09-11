from django.urls import path
from . import views

urlpatterns = [
    # Endpoints to get data for different types of charts
    path('candlestick-data/', views.candlestick_data),
    path('line-chart-data/', views.line_chart_data),
    path('bar-chart-data/', views.bar_chart_data),
    path('pie-chart-data/', views.pie_chart_data),
]
