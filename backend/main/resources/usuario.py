from flask_restful import Resource
from flask import request, jsonify
from sqlalchemy import func, desc
from .. import db
from main.models import UsuarioModel, PlanificacionModel, ProfesorModel

#USUARIOS ={
#    1: {"nombre":"Rodolfo","apellido":"Reno"},
#    2: {"nombre":"Juan","apellido":"Perez"}
#    }

#USUARIOS_PROFESOR ={
#    1: {"nombre":"Julian","apellido":"Amster"}
#}

#USUARIOS_ALUMNO ={
#    1:{"nombre":"Rodolfo","apellido":"Reno"}
#}


class Usuario(Resource):
    def get(self,id):
        usuario=db.session.query(UsuarioModel).get_or_404(id)
        return usuario.to_json()

    def delete(self,id):
        usuario=db.session.query(UsuarioModel).get_or_404(id)
        db.session.delete(usuario)
        db.session.commit()
        return "", 204
        
    def put(self,id):
        usuario=db.session.query(UsuarioModel).get_or_404(id)
        data=request.get_json().items
        for key, value in data:
            setattr(usuario, key, value)
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201
    
class Usuarios(Resource):
    def get(self):
        usuarios=db.session.query(UsuarioModel).all()
        return jsonify([usuario.to_json() for usuario in usuarios])
            
    def post(self):
        usuario=UsuarioModel.from_json(request.get_json())
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201
    
class UsuariosAlumnos(Resource):
    def get(self):
        page = 1
        per_page = 10
        
        usuarios_a = db.session.query(UsuarioModel)
        
        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))
        
        if request.args.get('nrPlanificaciones'):
            usuarios_a=usuarios_a.outerjoin(UsuarioModel.planificaciones).group_by(UsuarioModel.id).having(func.count(PlanificacionModel.id) >= int(request.args.get('nrPlanificaciones')))
        
        #Nombre
        if request.args.get('nombre'):
            usuarios_a=usuarios_a.filter(UsuarioModel.nombre.like("%"+request.args.get('nombre')+"%"))
        if request.args.get('sortby_nombre'):
            usuarios_a=usuarios_a.order_by(desc(UsuarioModel.nombre))

        #Apellido
        if request.args.get('apellido'):
            usuarios_a=usuarios_a.filter(UsuarioModel.apellido.like("%"+request.args.get('apellido')+"%"))
        if request.args.get('sortby_apellido'):
            usuarios_a=usuarios_a.order_by(desc(UsuarioModel.apellido))
            
        #Id de Planificacion
        if request.args.get('sortby_nrPlanificaciones'):
            usuarios_a=usuarios_a.outerjoin(UsuarioModel.Planificaciones).group_by(UsuarioModel.id).order_by(func.count(PlanificacionModel.id).desc())
        
        usuarios_a = usuarios_a.paginate(page=page, per_page=per_page, error_out=True, max_per_page=30)

        return jsonify({'usuarios': [usuario_a.to_json() for usuario_a in usuarios_a],
                  'total': usuarios_a.total,
                  'pages': usuarios_a.pages,
                  'page': page
                })

    def post(self):
        usuarios_a = UsuarioModel.from_json(request.get_json())
        db.session.add(usuarios_a)
        db.session.commit()
        return usuarios_a.to_json(), 201

class UsuariosProfesores(Resource):
    def get(self):
        page = 1
        per_page = 10
        
        usuarios_p = db.session.query(ProfesorModel)
        
        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))
        
        if request.args.get('nrPlanificaciones'):
            usuarios_p=usuarios_p.outerjoin(ProfesorModel.planificaciones).group_by(ProfesorModel.id).having(func.count(PlanificacionModel.id) >= int(request.args.get('nrPlanificaciones')))
        
        #Busqueda
        if request.args.get('nombre'):
            usuarios_p=usuarios_p.filter(ProfesorModel.nombre.like("%"+request.args.get('nombre')+"%"))
        
        #Por nombre
        if request.args.get('sortby_nombre'):
            usuarios_p=usuarios_p.order_by(desc(ProfesorModel.nombre))

        #Por apellido
        if request.args.get('apellido'):
            usuarios_p=usuarios_p.filter(ProfesorModel.apellido.like("%"+request.args.get('apellido')+"%"))
        
        #Por apellido
        if request.args.get('sortby_apellido'):
            usuarios_p=usuarios_p.order_by(desc(ProfesorModel.apellido))
            
        #Por id de Planificacion
        if request.args.get('sortby_nrPlanificaciones'):
            usuarios_p=usuarios_p.outerjoin(ProfesorModel.Planificaciones).group_by(ProfesorModel.id).order_by(func.count(PlanificacionModel.id).desc())
        
        usuarios_p = usuarios_p.paginate(page=page, per_page=per_page, error_out=True, max_per_page=30)

        return jsonify({'usuarios': [usuario_p.to_json() for usuario_p in usuarios_p],
                  'total': usuarios_p.total,
                  'pages': usuarios_p.pages,
                  'page': page
                })

    def post(self):
        usuarios_p = ProfesorModel.from_json(request.get_json())
        db.session.add(usuarios_p)
        db.session.commit()
        return usuarios_p.to_json(), 201
    
class UsuarioAlumno(Resource):
    def get(self,id):
        usuario_a=db.session.query(UsuarioModel).get_or_404(id)
        return usuario_a.to_json()

    def put(self,id):
        usuario_a=db.session.query(UsuarioModel).get_or_404(id)
        data=request.get_json().items
        for key, value in data:
            setattr(usuario_a, key, value)
        db.session.add(usuario_a)
        db.session.commit()
        return usuario_a.to_json(), 201
    
    def delete(self,id):
        usuario_a=db.session.query(UsuarioModel).get_or_404(id)
        db.session.delete(usuario_a)
        db.session.commit()
        return "", 204
    
class UsuarioProfesor(Resource):
    def get(self,id):
        usuario_p=db.session.query(UsuarioModel).get_or_404(id)
        return usuario_p.to_json()
    
    def put(self,id):
        usuario_p=db.session.query(UsuarioModel).get_or_404(id)
        data=request.get_json().items
        for key, value in data:
            setattr(usuario_p, key, value)
        db.session.add(usuario_p)
        db.session.commit()
        return usuario_p.to_json(), 201