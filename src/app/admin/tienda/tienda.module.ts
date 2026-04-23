import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsertiendaaddComponent } from './usuarios/usertiendaadd/usertiendaadd.component';
import { TiendaaddComponent } from './tienda/tiendaadd/tiendaadd.component';
import { UsuariosTiendaComponent } from './usuarios/usuarios-tienda/usuarios-tienda.component';
import { TiendaListComponent } from './tienda/tienda-list/tienda-list.component';
import { TiendaDetailComponent } from './tienda/tienda-detail/tienda-detail.component';
import { UserDetailComponent } from './usuarios/user-detail/user-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DriverpModule } from "src/app/admin/driverp/driverp.module";
import { PedidosMenuComponent } from './pedidos-menu/pedidos-menu.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ComentariosappComponent } from './comentariosapp/comentariosapp.component';


@NgModule({
  declarations: [
    UsertiendaaddComponent,
    TiendaaddComponent,
    UsuariosTiendaComponent,
    TiendaListComponent,
    TiendaDetailComponent,
    UserDetailComponent,
    PedidosMenuComponent,
    ComentariosappComponent

  ],
  exports: [
    UsertiendaaddComponent,
    TiendaaddComponent,
    UsuariosTiendaComponent,
    TiendaListComponent,
    TiendaDetailComponent,
    UserDetailComponent,
     PedidosMenuComponent,
     ComentariosappComponent

  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxDropzoneModule,
    PdfViewerModule,
    NgxPaginationModule,
    SharedModule,
    DriverpModule, 
    ComponentsModule
]
})
export class TiendaModule { }
