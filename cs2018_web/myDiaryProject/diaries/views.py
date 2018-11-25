from django.shortcuts import render
from diaries.models import Diary

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