import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
   ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }


   login(dataLogin:any = {}) {
    //dataLogin = {email: "maag.perez@alumno.um.edu.ar" ,password: "hola123"}
    console.log('Comprobando credenciales');
    this.authService.login(dataLogin).subscribe({
      next: (rta:any) => {
        //alert('Login exitoso');
        console.log('Respuesta login: ',rta.access_token);
        localStorage.setItem('token', rta.access_token);
        
        const decodedToken: any = jwtDecode(rta.access_token);
        localStorage.setItem('role', decodedToken.rol)
        
        if (localStorage.getItem('role') === 'admin') {
          this.router.navigateByUrl('admin');
        } else if (localStorage.getItem('role') === 'profesor') {
          this.router.navigateByUrl('profesor');
        } else if (localStorage.getItem('role') === 'users') {
          this.router.navigateByUrl('alumnos');
        } else {
          console.error('No posee rol de usuario');
        }


      }, error:(error) => {
        alert('Credenciales incorectas');
        localStorage.removeItem('token');
        localStorage.removeItem('role')
      }, complete: () => {
        console.log('Finalizo')
      }
    })
  }

  submit() {
    if(this.loginForm.valid) {
      console.log('Form login: ',this.loginForm.value);
      this.login(this.loginForm.value)
    } else {
      alert('Formulario invalido');
    }
  }
}
