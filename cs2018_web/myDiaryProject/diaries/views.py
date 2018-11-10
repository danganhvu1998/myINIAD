from django.shortcuts import render

# Create your views here.
def top(request):
    return render(request, 'diaries/top.html')

def second(request):
    return render(request, 'diaries/second.html')