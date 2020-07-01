from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_caching import Cache

app = Flask(__name__)
db = SQLAlchemy(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SECRET_KEY'] = 'thisisafakesecretkey'


cache = Cache(config={
	'CACHE_TYPE': 'simple', 
	"CACHE_DEFAULT_TIMEOUT": 900,
	})
cache.init_app(app)

from api import api