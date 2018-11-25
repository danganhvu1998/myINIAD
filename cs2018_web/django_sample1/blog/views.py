from django.shortcuts import render, redirect
from django.http import Http404
from django.utils import timezone

from .models import Article, Comment

def index(request):
    if request.method == 'POST':
        article = Article(title=request.POST['title'], text=request.POST['text'], posted_at=timezone.now())
        article.save()
    if ("sort" in request.GET):
        if (request.GET["sort"]=="like"):
            articles = Article.objects.order_by('-like')
        elif (request.GET["sort"]=="date"):
            articles = Article.objects.order_by('-posted_at')
        else:
            articles = Article.objects.order_by('posted_at')
    else:
        articles = Article.objects.order_by('posted_at')
    context = {
        'articles': articles
    }
    return render(request, 'blog/index.html', context)

def detail(request, article_id):
    try:
        article = Article.objects.get(pk=article_id)
    except Article.DoesNotExist:
        raise Http404("Article does not exist")
    context = {
        'article': article
    }
    return render(request, 'blog/detail.html', context)

def update(request, article_id):
    try:
        article = Article.objects.get(pk=article_id)
    except Article.DoesNotExist:
        raise Http404("Article does not exist")

    if request.method == 'POST':
        article.title = request.POST['title']
        article.text= request.POST['text']
        article.save()
        return redirect(detail, article_id)

    context = {
        'article': article
    }
    return render(request, 'blog/edit.html', context)

def delete(request, article_id):
    try:
        article = Article.objects.get(pk=article_id)
    except Article.DoesNotExist:
        raise Http404("Article does not exist")
    
    article.delete()
    return redirect(index)

def like(request, article_id):
    try:
        article = Article.objects.get(pk=article_id)
    except Article.DoesNotExist:
        raise Http404("Article does not exist")
    article.like += 1
    article.save()
    return redirect(index)
