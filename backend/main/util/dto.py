from flask_restplus import Model, fields


farmer_dto = Model('farmer', {
        'email': fields.String(required=True, description='user email address'),
        'name': fields.String(required=True, description='user username'),
        'phone': fields.String(required=True, description='user phone'),
        'zipcode': fields.String(description='user postal code')
    })



job_dto = Model('job', {
        'task': fields.String(required=True, description='The task'),
        'duration': fields.String(required=True, description='The duration'),
        'farmer_id': fields.String(required=True, description='The duration')
    })