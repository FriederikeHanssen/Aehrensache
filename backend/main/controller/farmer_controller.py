from flask import request
from flask_restplus import Resource, Namespace

from ..util.dto import farmer_dto
from ..service.farmer_service import save_new_farmer, get_all_farmers, get_a_farmer

ns = Namespace('farmer', description='Farmer')
ns.add_model(farmer_dto.name, farmer_dto)



@ns.route('/')
class FarmerList(Resource):
    @ns.doc('list_of_registered_farmer')
    @ns.marshal_list_with(farmer_dto, envelope='data')
    def get(self):
        """List all registered users"""
        return get_all_users()

    @ns.expect(farmer_dto, validate=True)
    @ns.response(201, 'Farmer successfully created.')
    @ns.doc('create a new farmer')
    def post(self):
        """Creates a new farmer """
        data = request.json
        return save_new_farmer(data=data)


@ns.route('/<name>')
@ns.param('name', 'The farmer name')
@ns.response(404, 'Farmer not found.')
class Farmer(Resource):
    @ns.doc('get a farmer')
    # @api.marshal_with(_user)
    def get(self, name):
        """get a farmer given its name"""
        farmer = get_a_farmer(name)
        if not farmer:
            ns.abort(404)
        else:
            return farmer