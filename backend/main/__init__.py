from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


def create_app():
    """Construct the core application."""
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')
    db.init_app(app)

    with app.app_context():
        from . import controller
        from . import service
        from . import models

        # Create tables for our models
        db.create_all()
        #controller.add_landwirt()
        return app