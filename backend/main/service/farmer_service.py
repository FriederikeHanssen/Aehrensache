import uuid
import datetime
from main.model.farmer import Landwirt
from main.database import db

def save_new_farmer(data):
    user = Landwirt.query.filter_by(name=data["name"]).first()
    if not user:
        new_user = Landwirt(name=data["name"],
                        email=data["email"],
                        phone = data["phone"],
                        zipcode = data["zipcode"]
                        )
        save_changes(new_user)
        response_object = {
            'status': 'success',
            'message': 'Successfully registered.'
        }
        return response_object, 201
    else:
        response_object = {
            'status': 'fail',
            'message': 'User already exists.',
        }
        return response_object, 409


def get_all_farmers():
    return Landwirt.query.all()


def get_a_farmer(name):
    return Landwirt.query.filter_by(name=name).first()

def get_farmer_by_id(id):
    return Landwirt.query.get(id)


def save_changes(data):
    db.session.add(data)
    db.session.commit()