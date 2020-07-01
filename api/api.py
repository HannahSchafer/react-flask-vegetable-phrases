import json
import time
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

from api import app, cache, db
from api.helpers import cache_key, pair_count
from api.models import Phrase

db.create_all()

@app.route('/phrase', methods=['GET', 'POST'])
def add_phrase():
    payload = request.get_json()
    phrase_content = payload.get('content')

    phrase = Phrase(content=phrase_content)
    db.session.add(phrase)
    db.session.commit()

    return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 


@app.route('/phrases')
def get_phrases():
    phrases = [r.content for r in db.session.query(Phrase.content)]
    data = {'phrases': phrases}
    return jsonify(data)


@app.route('/process', methods=['GET', 'POST'])
def process():
    payload = request.get_json()
    phrase = payload.get('text')
    string_key = cache_key(phrase)

    pairs = cache.get(string_key)
    if not pairs:
        pairs = pair_count(phrase)
        cache.set(string_key, pairs)

    return {'pairs': pairs}


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    payload = request.get_json()
    print ('PAYLOAD888', payload)
    # TODO
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 


@app.route('/login', methods=['GET', 'POST'])
def login():
    payload = request.get_json()
    # TODO
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 

