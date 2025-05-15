import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { FormVentaComponent } from './form-venta/form-venta.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { RegistrarComponent } from './venta/registrar/registrar.component';
import { BuscarComponent } from './venta/buscar/buscar.component';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { TransaccionComponent } from './transaccion/transaccion.component';
import { DatosVentaComponent } from './componentes-transaccion/datos-venta/datos-venta.component';
import { CursoComponent } from './componentes-transaccion/curso/curso.component';
import { PaquetesComponent } from './componentes-transaccion/paquetes/paquetes.component';
import { ProductosSeleccionadosComponent } from './componentes-transaccion/productos-seleccionados/productos-seleccionados.component';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { CalculoVentaComponent } from './componentes-detalle/calculo-venta/calculo-venta.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogoComponent } from './componentes-detalle/dialogo/dialogo.component';
import { FormularioComponent } from './login/formulario/formulario.component';
import {MatMenuModule} from '@angular/material/menu';
import { RegistrarUsuarioComponent } from './login/registrar-usuario/registrar-usuario.component';
import { HeaderDialogoComponent } from './componentes-detalle/dialogo/componentes/header-dialogo/header-dialogo.component';
import { BodyDialogoComponent } from './componentes-detalle/dialogo/componentes/body-dialogo/body-dialogo.component';
import { FooterDialogoComponent } from './componentes-detalle/dialogo/componentes/footer-dialogo/footer-dialogo.component';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './perfil/perfil.component';

/*import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';  // Importar MatDatepickerModule
import { MatNativeDateModule } from '@angular/material/core'; 
*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormVentaComponent,
    RegistrarComponent,
    BuscarComponent,
    TransaccionComponent,
    DatosVentaComponent,
    CursoComponent,
    PaquetesComponent,
    ProductosSeleccionadosComponent,
    DetalleVentaComponent,
    CalculoVentaComponent,
    DialogoComponent,
    FormularioComponent,
    RegistrarUsuarioComponent,
    HeaderDialogoComponent,
    BodyDialogoComponent,
    FooterDialogoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
	FormsModule,
	MatInputModule, 
    MatFormFieldModule,
	MatDividerModule,
	MatListModule,
	MatRadioModule,
	ReactiveFormsModule,
	MatStepperModule,
	MatTableModule,
	MatCheckboxModule,
	MatDialogModule,
	MatMenuModule,
  HttpClientModule
	/*MatDatepickerModule,  // Añadir MatDatepickerModule
    MatNativeDateModule*/
	
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
