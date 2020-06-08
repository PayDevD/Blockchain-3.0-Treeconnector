"""
run.py에서 넘어오는 엔트리포인트
"""
from flask import Flask, request, jsonify
app = Flask(__name__)

"""
rest api
"""
from flask_restful import reqparse, abort, Api, Resource, fields
api = Api(app)

"""
model
"""
class RegisterUser(Resource):
    def post(self):
        parser = reqparse.ReqestParser()
        parser.add_argument('name',type=str)
        parser.add_argument('email',type=str)

        args = parser.parse_args()
        name = args['name']
        email = args['email']
        return {'name':name, 'email':email}

"""
URL router
"""
api.add_resource(RegisterUser,'/join')

"""

"""

@app.route('/')
def root():
    return "root"

@app.route('/userLogin', methods = ['POST'])
def userLogin():
    user = request.get_json()
    return jsonify(user)

@app.route('/alltree', methods= ['GET'])
def queryTrees():
    alltree = request.get_json()
    return jsonify(trees)
