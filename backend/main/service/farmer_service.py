import uuid
import datetime

from ..__init__ import db

def save_new_farmer(data):
    user = Landwirt.query.filter(Landwirt.name == name).first()
    if not user:
        new_user = Landwirt(name=name,
                        email=email,
                        phone = phone,
                        zipcode = zipcode
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
    return User.query.all()


def get_a_farmer(name):
    return User.query.filter_by(name=name).first()


def save_changes(data):
    db.session.add(data)
    db.session.commit()