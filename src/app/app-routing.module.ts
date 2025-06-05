import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { FormVentaComponent } from './form-venta/form-venta.component';
import { FormularioComponent } from './login/formulario/formulario.component';
import { RegistrarUsuarioComponent } from './login/registrar-usuario/registrar-usuario.component';
import { TransaccionComponent } from './transaccion/transaccion.component';
import { BuscarComponent } from './venta/buscar/buscar.component';
import { RegistrarComponent } from './venta/registrar/registrar.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
	{path:'', redirectTo:'/formulario', pathMatch:'full'},
	{path:'inicio', component:BuscarComponent},
	{path: 'registrar', component:RegistrarComponent},
	{path:'buscar', component:BuscarComponent},
	{path:'iniciar-venta', component: TransaccionComponent},
	{path:'formulario', component:FormularioComponent},
	{path:'detalle-venta', component:DetalleVentaComponent},
	{path:'registrar-usuario', component:RegistrarUsuarioComponent},
	{path:'perfil', component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  
	
}
