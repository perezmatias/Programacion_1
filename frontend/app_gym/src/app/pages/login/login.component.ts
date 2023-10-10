import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
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
    dataLogin = {email: "maag.perez@alumno.um.edu.ar" ,password: "hola123"}
    console.log('Comprobando credenciales');
    this.authService.login(dataLogin).subscribe({
      next: (rta:any) => {
        //alert('Login exitoso');
        console.log('Respuesta login: ',rta.access_token);
        localStorage.setItem('token', rta.access_token);
        this.router.navigateByUrl('home');
      }, error:(error) => {
        alert('Credenciales incorectas');
        localStorage.removeItem('token');
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
