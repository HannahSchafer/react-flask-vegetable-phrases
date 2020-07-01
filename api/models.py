from datetime import datetime

from api import db

class Phrase(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	content = db.Column(db.String(250), unique=True, nullable=False)
	created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

	def __repr__(self):
		return f"Phrase('{self.content}')"


class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(50), nullable=False)
	phone = db.Column(db.String(20))
	email = db.Column(db.String(100), unique=True, nullable=False)
	password = db.Column(db.String(100))
	created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

	def __repr__(self):
		return f"User('{self.email}')"
