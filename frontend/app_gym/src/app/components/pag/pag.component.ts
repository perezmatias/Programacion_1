import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-pag',
  templateUrl: './pag.component.html',
  styleUrls: ['./pag.component.css']
})
export class PagComponent {
  arrayUsers: any
  currentPage: number = 1;
  perPage: number = 10;
  filtroRol: string = '';
  searchTerm: string = '';

  constructor(
    private router: Router,
    private usuarioService: 
  ) {}
  
  ngOnInit() {
    this.cargarUsuarios();
  }
  
  cargarUsuarios() {
    this.usuarioService.getUsers(this.currentPage, this.perPage, this.filtroRol).subcribe((data: any) => {
      console.log('JSON data:', data);
      this.arrayUsers = data.usuarios;
    })
  }

  Perfil(dni: string){
    const parametrosOcultos = {
      dni: dni
    }
  }

  nextPage() {
    const nextPage = this.currentPage + 1;
    this.usuarioService.getUsers(nextPage, this.perPage, this.filtroRol).subcribe((data: any) => {
      if (data.usuarios && data.usuarios.length > 0) {
        this.currentPage = nextPage;
        this.cargarUsuarios();
      } else {
        console.log('No users on the next page.');
      }
    });
  }

  previusPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.cargarUsuarios();
    }
  }

  filtrar(rol: string) {
    this.filtroRol = rol;
    this.currentPage = 1;
    this.cargarUsuarios();
  }
  
  eliminar() {
    this.filtroRol = '';
    this.currentPage = 1;
    this.cargarUsuarios();
  }
}
