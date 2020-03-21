from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from . import api

db = SQLAlchemy()


def create_app():
    """Construct the core application."""

    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')

    app.register_blueprint(api.blueprint)

    db.init_app(app)

    with app.app_context():
        from main.model import *
        from main.controller import *
        from main.service import *

        # Create tables for our models
        db.create_all()
        #controller.add_landwirt()
        return app