import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//services
import { IconosService } from '../services/iconos.service';
import { CategoriaService } from '../services/categoria.service';

//components
import { CatIndexComponent } from './categoria/cat-index/cat-index.component';
import { CatEditComponent } from './categoria/cat-edit/cat-edit.component';
import { ConfigSiteComponent } from './config-site/config-site.component';
import { PromocionComponent } from './promocion/promocion.component';
import { PostalComponent } from './postal/postal.component';
import { CuponComponent } from './cupon/cupon.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PromoeditComponent } from './promocion/promoedit/promoedit.component';
import { InvoiceComponent } from './ventas/invoice/invoice.component';
import { AdminDetalleventasComponent } from './ventas/admin-detalleventas/admin-detalleventas.component';
import { AdminVentasComponent } from './ventas/admin-ventas/admin-ventas.component';
import { AdminChatComponent } from './ticket/admin-chat/admin-chat.component';
import { AdminTicketComponent } from './ticket/admin-ticket/admin-ticket.component';
import { DetalleCancelacionComponent } from './cancelacion/detalle-cancelacion/detalle-cancelacion.component';
import { IndexCancelacionComponent } from './cancelacion/index-cancelacion/index-cancelacion.component';
import { BlogIndexComponent } from './blog/blog-index/blog-index.component';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
import { PageEditComponent } from './page/page-edit/page-edit.component';
import { PageIndexComponent } from './page/page-index/page-index.component';
import { SlidereditComponent } from './slider/slideredit/slideredit.component';
import { SliderComponent } from './slider/slider.component';

//pluggins
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactodetailsComponent } from './contacto/contactodetails/contactodetails.component';
import { ListaTrasnferenciasComponent } from './transferencias/lista-trasnferencias/lista-trasnferencias.component';
import { TiposdepagoComponent } from './tiposdepago/tiposdepago.component';
import { PagosEfectivoComponent } from './pagos-efectivo/pagos-efectivo.component';
import { FacturaComponent } from './ventas/factura/factura.component';
import { ReusablesModule } from '../reusables/reusables.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { PostalcompModule } from "./postal/postalcomp/postalcomp.module";
import { DriverpModule } from './driverp/driverp.module';

@NgModule({
  declarations: [
    CatIndexComponent,
    CatEditComponent,
    ConfigSiteComponent,
    PromocionComponent,
    PostalComponent,
    CuponComponent,
    ContactoComponent,
    PromoeditComponent,
    InvoiceComponent,
    AdminVentasComponent,
    AdminDetalleventasComponent,
    AdminTicketComponent,
    AdminChatComponent,
    IndexCancelacionComponent,
    DetalleCancelacionComponent,
    BlogIndexComponent,
    BlogEditComponent,
    PageEditComponent,
    PageIndexComponent,
    SlidereditComponent,
    SliderComponent,
    ContactodetailsComponent,
    ListaTrasnferenciasComponent,
    TiposdepagoComponent,
    PagosEfectivoComponent,
    FacturaComponent,
  ],
  exports: [
    CatIndexComponent,
    CatEditComponent,
    ConfigSiteComponent,
    PromocionComponent,
    PostalComponent,
    CuponComponent,
    ContactoComponent,
    PromoeditComponent,
    InvoiceComponent,
    AdminVentasComponent,
    AdminDetalleventasComponent,
    AdminTicketComponent,
    AdminChatComponent,
    IndexCancelacionComponent,
    DetalleCancelacionComponent,
    BlogIndexComponent,
    BlogEditComponent,
    PageEditComponent,
    PageIndexComponent,
    SlidereditComponent,
    SliderComponent,
    ContactodetailsComponent,
    TiposdepagoComponent
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
    CKEditorModule,
    ReusablesModule,
    SharedModule,
    ComponentsModule,
    TranslateModule,
    PostalcompModule,
    DriverpModule
],
  providers:[
    IconosService,
    CategoriaService
  ]
})
export class AdminModule { }
