from django.shortcuts import render

# Create your views here.
def home(request):
  return render(request, 'authtest/home.html', {})

def private_page(request):
  return render(request, 'authtest/private.html', {})

def public_page(request):
  return render(request, 'authtest/public.html', {})