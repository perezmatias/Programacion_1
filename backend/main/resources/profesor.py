from flask_restful import Resource
from flask import request

PROFESORES = {
    1: {"profesor":"Nahuel Perez","clase":"Crossfit"}
}

class ProfesorClases(Resource):
     def get(self):
        return PROFESORES