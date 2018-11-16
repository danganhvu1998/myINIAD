from django.shortcuts import render

# Create your views here.
def top(request):
    return render(request, 'diaries/top.html')

def index(request):
    diaries = ['Diary 1', 'Diary 2', 'Diary 3']
    return render(request, 'diaries/index.html', {"diaries":diaries})