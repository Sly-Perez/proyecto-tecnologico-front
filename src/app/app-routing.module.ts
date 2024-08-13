import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { FormVentaComponent } from './form-venta/form-venta.component';
import { TransaccionComponent } from './transaccion/transaccion.component';
import { BuscarComponent } from './venta/buscar/buscar.component';
import { RegistrarComponent } from './venta/registrar/registrar.component';

const routes: Routes = [
	{path:'', redirectTo:'/inicio', pathMatch:'full'},
	{path:'inicio', component:FormVentaComponent},
	{path: 'registrar', component:RegistrarComponent},
	{path:'buscar', component:BuscarComponent},
	{path:'iniciar-venta', component: TransaccionComponent},
	{path:'detalle-venta', component:DetalleVentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
