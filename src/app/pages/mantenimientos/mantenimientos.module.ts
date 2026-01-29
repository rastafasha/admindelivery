import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsertiendaaddComponent } from './usertiendaadd/usertiendaadd.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';



@NgModule({
  declarations: [
    UsertiendaaddComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ]
})
export class MantenimientosModule { }
