import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminClassComponent } from './pages/admin-class/admin-class.component';
import { AdminDtComponent } from './pages/admin-dt/admin-dt.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
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
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';
import { authsessionGuard } from './guards/authsession.guard';
const routes: Routes = [
{ path:'home', component: HomeComponent  },
{ path:'login', component: LoginComponent  },
{ path:'admin', component: AdminComponent  },
{ path:'admin-class', component: AdminClassComponent  },
{ path:'admin-dt', component: AdminDtComponent  },
{ path:'admin-user', component: AdminUserComponent  },
{ path:'alum-dt', component: AlumDtComponent  },
{ path:'alumno', component: AlumnoComponent  },
{ path:'gest-class', component: GestClassComponent  },
{ path:'gest-user', component: GestUserComponent  },
{ path:'pc-alum', component: PcAlumComponent  },
{ path:'pc-gestor', component: PcGestorComponent  },
{ path:'planificacion', component: PlanificacionComponent  },
{ path:'prof-class', component: ProfClassComponent  },
{ path:'prof-dt', component: ProfDtComponent  },
{ path:'profesor', component: ProfesorComponent  },
{ path:'recovery', component: RecoveryComponent  },
{ path:'register', component: RegisterComponent  },

{ path: '',   redirectTo: '/home', pathMatch: 'full' },
{path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
