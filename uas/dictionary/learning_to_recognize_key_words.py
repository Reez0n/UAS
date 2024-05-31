import spacy
from spacy.tokens import Span

# Загрузка модели языка
nlp = spacy.load("en_core_web_sm")  # 'en_core_web_sm' для английского языка
# Разбиение текста на токены
doc = nlp("fb is hiring a new vice president of global policy")
# Обзор каждого ключевого слова
# Вывод токена(слова), координата начала, координата конца, тип объекта
ents = [(e.text, e.start_char, e.end_char, e.label_) for e in doc.ents]
print('Before', ents)
# Модель не распознала "fb" как объект

# Созданиее диапазона для нового объекта
fb_ent = Span(doc, 0, 1, label="ORG")
orig_ents = list(doc.ents)

# Вариант 1: Измениние предоставленных диапазонов сущностей, остальные остаются без изменений
doc.set_ents([fb_ent], default="unmodified")

# Вариант 2: Назначение полного списка ents в doc.ents
doc.ents = orig_ents + [fb_ent]

ents = [(e.text, e.start, e.end, e.label_) for e in doc.ents]
print('After', ents)
# Модель распознала "fb" как объект
# Код для изменения ключевых слов нужно проигрывать каждый раз(