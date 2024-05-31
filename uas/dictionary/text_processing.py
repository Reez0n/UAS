import spacy
from spacy.tokens import Span

# Загрузка модели языка
nlp = spacy.load('en_core_web_sm')  # 'en_core_web_sm' для английского языка

# поиск начальной формы для английских слов
def search_for_single_root_words_en(text):
    # Разбиение текста на токены
    doc = nlp(text)
    # получение из списка токенов начальную форму элемента
    roots = [token.lemma_ for token in doc]
    # формирование списка ответов с разделителем ', '
    roots_print = ', '.join(roots)
    # Вывод начальной формы слов
    return str(roots_print)

# пример работы функции для поиска начальной формы
# search_for_single_root_words_en('gameing')


# поиск ключевых слов для английского языка
def search_for_key_words_en(text):
    # Разбиение текста на токены
    doc = nlp(text)
    # Обзор каждого ключевого слова
    for ent in doc.ents:
        # Вывод токена(слова), координата начала, координата конца, тип объекта
        # Типы объектов расшифровку которых  нашел:
        # ORG   - Компании, агентства, учреждения.
        # GPE   - Геополитическая сущность, т.е. страны, города, государства.
        # MONEY - Денежные ценности, в том числе ед.
        # DATE  - Дата и время.
        # PERSON - Название, имя.
        print(ent.text, ent.start_char, ent.end_char, ent.label_)

# пример работы функции для поиска ключевых слов
# search_for_key_words_en('Unmanned Aircraft System')

# создание пользовательских именованных сущностей(ещё в разработке)
def creating_custom_named_entities():
    # текст в doc можно изменить на нашу специфическую терминологию
    doc = nlp("fb")
    # Созданиее диапазона для нового объекта
    fb_ent = Span(doc, 0, 1, label="BPLA")
    orig_ents = list(doc.ents)
    # Измениние предоставленных диапазонов сущностей, остальные остаются без изменений
    doc.set_ents([fb_ent], default="unmodified")
    # Проверка что изменение состоялось
    ents = [(e.text, e.start, e.end, e.label_) for e in doc.ents]
    print('After', ents)

