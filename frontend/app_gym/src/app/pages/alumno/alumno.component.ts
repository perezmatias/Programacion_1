import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {
  selectedRole = localStorage.getItem('role')
  constructor() {}
  arrayUserData = [
    {},
    ]
  ngOnInit(): void {
    console.log('arrayAlumData: ', this.arrayUserData);
  }
}
