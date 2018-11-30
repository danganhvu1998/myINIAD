from django.shortcuts import render, redirect
from diaries.models import Diary
import datetime
# Create your views here.
def top(request):
    return render(request, 'diaries/top.html')

def index(request):
    #diaries = ['Diary 1', 'Diary 2', 'Diary 3']
    diaries = Diary.objects.all()
    data_dictionary = {'diaries': diaries}
    return render(request, 'diaries/index.html', data_dictionary)

def detail(request, diary_id):
    diary = Diary.objects.get(pk=diary_id)
    data_dictionary = {'diary': diary}
    return render(request, 'diaries/detail.html', data_dictionary)

def create(request):
    if request.method == 'POST':
        diary = Diary(title=request.POST['title'], content=request.POST['content'], date=request.POST['date'])
        diary.save()
        return redirect("detail", diary.id)
    return render(request, 'diaries/create.html')

def update(request, diary_id):
    diary = Diary.objects.get(pk=diary_id)

    if request.method == 'POST':
        diary.title = request.POST['title']
        diary.content= request.POST['content']
        diary.date = request.POST['date']
        diary.save()
        return redirect("detail", diary.id)

    context = {
        'diary': diary
    }
    return render(request, 'diaries/update.html', context)