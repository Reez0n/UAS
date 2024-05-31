import sqlite3
from .text_processing import creating_custom_named_entities, search_for_single_root_words_en
from thefuzz import process


def search(text: str, coll: int):
    con = sqlite3.connect("sirius.sqlite3")
    cur = con.cursor()
    results = []
    suggestions = []

    try:
        like_text = f'%{text}%'

        term_query = """
                     SELECT term_eng, abbr_eng, category, part_references, term_rus, abbr_rus, definition_rus, definition_eng, context_eng, context_rus
                     FROM name_table
                     WHERE term_eng LIKE ? OR definition_eng LIKE ? OR context_eng LIKE ? OR
                           term_rus LIKE ? OR definition_rus LIKE ? OR context_rus LIKE ?
                    """
        cur.execute(term_query, (like_text, like_text, like_text, like_text, like_text, like_text))
        term_results = cur.fetchall()

        abbr_query = """
                     SELECT term_eng, abbr_eng, category, part_references, term_rus, abbr_rus, definition_rus, definition_eng, context_eng, context_rus
                     FROM name_table
                     WHERE abbr_eng LIKE ? OR abbr_rus LIKE ? OR
                           definition_eng LIKE ? OR definition_rus LIKE ?
                    """
        cur.execute(abbr_query, (like_text, like_text, like_text, like_text))
        abbr_results = cur.fetchall()

        results = abbr_results + term_results

        if not results:
            cur.execute("SELECT term_eng, abbr_eng, term_rus, abbr_rus FROM name_table")
            all_terms = cur.fetchall()
            all_terms_flat = [item for sublist in all_terms for item in sublist if item]
            suggestions = process.extract(text, all_terms_flat, limit=5)
    except sqlite3.Error as e:
        print(f"An error occurred: {e}")
    finally:
        con.close()

    return results[:coll], suggestions