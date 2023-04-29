from flask_restful import Resource
from flask import request
from .. import db
from main.models import ProfesorModel

PROFESORES = {
    1: {"profesor":"Nahuel Perez","clase":"Crossfit"}
}

class ProfesorClases(Resource):
     def get(self):
        return PROFESORES