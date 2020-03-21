from flask_restplus import Api
from flask import Blueprint
from main.controller import farmer_controller, job_controller

blueprint = Blueprint('api', __name__)

api = Api(
    blueprint,
    title='app api',
    version='0.1',
    description='bla'
)

api.add_namespace(farmer_controller.ns)
api.add_namespace(job_controller.ns)