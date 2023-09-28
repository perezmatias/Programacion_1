import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminClassComponent } from './pages/admin-class/admin-class.component';
import { AdminDtComponent } from './pages/admin-dt/admin-dt.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AlumDtComponent } from './pages/alum-dt/alum-dt.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { GestClassComponent } from './pages/gest-class/gest-class.component';
import { GestUserComponent } from './pages/gest-user/gest-user.component';
import { PcAlumComponent } from './pages/pc-alum/pc-alum.component';
import { PcGestorComponent } from './pages/pc-gestor/pc-gestor.component';
import { PlanificacionComponent } from './pages/planificacion/planificacion.component';
import { ProfClassComponent } from './pages/prof-class/prof-class.component';
import { ProfDtComponent } from './pages/prof-dt/prof-dt.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecoveryComponent,
    RegisterComponent,
    LoginComponent,
    AdminClassComponent,
    AdminDtComponent,
    AdminUserComponent,
    AdminComponent,
    AlumDtComponent,
    AlumnoComponent,
    GestClassComponent,
    GestUserComponent,
    PcAlumComponent,
    PcGestorComponent,
    PlanificacionComponent,
    ProfClassComponent,
    ProfDtComponent,
    ProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
