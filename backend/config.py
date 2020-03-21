from os import environ


class Config:
    """Set Flask configuration vars from .env file."""

    # General
    # TESTING = environ.get('TESTING')
    # FLASK_DEBUG = environ.get('FLASK_DEBUG')
    # SECRET_KEY = environ.get('SECRET_KEY')

    # Database
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:postgres@database:5432/postgres"
    SQLALCHEMY_TRACK_MODIFICATIONS = "False"