from django.shortcuts import render
from .forms import SearchForm
from .bd import search  # Импорт функции поиска из bd.py


def index(request):
    results = None
    suggestions = None
    template_name = 'dictionary/index.html'

    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():
            term = form.cleaned_data['term']
            results, suggestions = search(term, coll=5)  # Вызов функции поиска
    else:
        form = SearchForm()

    return render(
        request, template_name, {
            'form': form,
            'results': results,
            'suggestions': suggestions
        })


def definition(request):
    template_name = 'dictionary/definition.html'
    return render(
        request,
        template_name
    )
