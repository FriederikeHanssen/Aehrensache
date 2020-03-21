"""Application entry point."""
from flask import Flask
from main.api import api
from main.database import db


app = Flask(__name__)
app.config.from_object('config.Config')

app.register_blueprint(api.blueprint)
db.init_app(app)
app.app_context().push()

db.create_all()

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)