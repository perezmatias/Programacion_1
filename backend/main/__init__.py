from flask import Flask
import os
from dotenv import load_dotenv
from flask_restful import Api
 import main.resources as resources
api = Api()
#vamos a crear un metodo que inicializara la app y todos los modulos
def create_app():
    #inicio flask
    app = Flask(__name__)
    #variables de entorno
    load_dotenv()
    api.add_resource(resources.UsuariosResource,"/usuarios")
    api.add_resource(resources.UsuarioResources, "/usuario/<id>")
    api.add_resource(resources.UsuariosAlumnosResource, "/usuarios_a")
    api.add_resource(resources.UsuarioAlumnoResource, "/usuario_a/<id>")
    api.add_resource(resources.UsuarioProfesorResource, "/usuario_p/<id>")
    api.add_resource(resources.PlanificacionAlumnoResource, "/planificacion_a/<id>")
    api.add_resource(resources.PlanificacionProfesorResource,"/planificacion_p/<id>")
    api.add_resource(resources.PlanificacionesProfesoresResource, "/planificaciones_ps")
    api.add_resource(resources.ProfesorClasesResource,"/clases")
    api.add_resource(resources.PagoResource, "/pago/<id>")
    api.add_resource(resources.LoginResource, "/login")
    api.init_app(app)

    return app