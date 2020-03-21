from flask import request
from flask_restplus import Resource, Namespace

from main.util.dto import farmer_dto
from main.service.farmer_service import *

ns = Namespace('farmer', description='Farmer')
ns.add_model(farmer_dto.name, farmer_dto)

@ns.route('/')
class FarmerList(Resource):
    @ns.doc('list_of_registered_farmer')
    @ns.marshal_list_with(farmer_dto, envelope='data')
    def get(self):
        """List all registered users"""
        return get_all_farmers()

    @ns.expect(farmer_dto, validate=True)
    @ns.response(201, 'Farmer successfully created.')
    @ns.doc('create a new farmer')
    def post(self):
        """Creates a new farmer """
        data = request.json
        return save_new_farmer(data=data)


@ns.route('/<int:id>')
@ns.param('id', 'The farmer identifier')
@ns.response(404, 'Farmer not found.')
class FarmerID(Resource):
    @ns.doc('get a farmer')
    @ns.marshal_with(farmer_dto, envelope='data')
    def get(self, id):
        """get a farmer given its id"""
        farmer = get_farmer_by_id(id)
        if not farmer:
            ns.abort(404)
        else:
            return farmer


@ns.route('/name')
@ns.response(404, 'Farmer not found.')
class FarmerName(Resource):
    @ns.doc('get a farmer')
    @ns.marshal_with(farmer_dto, envelope='data')
    def get(self):
        """get a farmer given its name"""
        data = request.json
        farmer = get_a_farmer(data["name"])
        if not farmer:
            ns.abort(404)
        else:
            return farmer