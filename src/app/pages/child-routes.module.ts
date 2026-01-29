import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';

import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CatIndexComponent } from '../admin/categoria/cat-index/cat-index.component';
import { CatEditComponent } from '../admin/categoria/cat-edit/cat-edit.component';
import { ConfigSiteComponent } from '../admin/config-site/config-site.component';
import { CuponComponent } from '../admin/cupon/cupon.component';
import { PromocionComponent } from '../admin/promocion/promocion.component';
import { PostalComponent } from '../admin/postal/postal.component';
import { ContactoComponent } from '../admin/contacto/contacto.component';
import { PromoeditComponent } from '../admin/promocion/promoedit/promoedit.component';
import { AdminVentasComponent } from '../admin/ventas/admin-ventas/admin-ventas.component';
import { DetalleCancelacionComponent } from '../admin/cancelacion/detalle-cancelacion/detalle-cancelacion.component';
import { IndexCancelacionComponent } from '../admin/cancelacion/index-cancelacion/index-cancelacion.component';
import { AdminChatComponent } from '../admin/ticket/admin-chat/admin-chat.component';
import { AdminTicketComponent } from '../admin/ticket/admin-ticket/admin-ticket.component';
import { AdminDetalleventasComponent } from '../admin/ventas/admin-detalleventas/admin-detalleventas.component';
import { InvoiceComponent } from '../admin/ventas/invoice/invoice.component';
import { SliderComponent } from '../admin/slider/slider.component';
import { SlidereditComponent } from '../admin/slider/slideredit/slideredit.component';
import { PageIndexComponent } from '../admin/page/page-index/page-index.component';
import { PageEditComponent } from '../admin/page/page-edit/page-edit.component';
import { BlogIndexComponent } from '../admin/blog/blog-index/blog-index.component';
import { BlogEditComponent } from '../admin/blog/blog-edit/blog-edit.component';
import { UsuarioComponent } from './mantenimientos/usuario/usuario.component';
import { ContactodetailsComponent } from '../admin/contacto/contactodetails/contactodetails.component';
import { ListaTrasnferenciasComponent } from '../admin/transferencias/lista-trasnferencias/lista-trasnferencias.component';
import { TiposdepagoComponent } from '../admin/tiposdepago/tiposdepago.component';
import { PagosEfectivoComponent } from '../admin/pagos-efectivo/pagos-efectivo.component';
import { UsertiendaaddComponent } from './mantenimientos/usertiendaadd/usertiendaadd.component';


const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data:{tituloPage:'Dashboard'} },
            { path: 'account-settings', component: AccountSettingComponent, data:{tituloPage:'Ajustes de Cuenta'} },
            { path: 'buscar/:termino', component: BusquedaComponent, data:{tituloPage:'Busquedas'} },
            { path: 'perfil', component: PerfilComponent, data:{tituloPage:'Perfil'} },
            { path: 'usuario/:id', component: UsuarioComponent, data:{tituloPage:'Perfil Usuario'} },
            { path: 'usuario/edit/:id', component: UsertiendaaddComponent, data:{tituloPage:'Perfil Usuario'} },

            //tienda

            { path: 'blog', component: BlogIndexComponent, data:{tituloPage:'Blog '} },
            { path: 'blog/edit/:id', component: BlogEditComponent, data:{tituloPage:'Blog Edit '} },
            { path: 'blog/create', component: BlogEditComponent, data:{tituloPage:'Blog Create '} },

            { path: 'page', component: PageIndexComponent, data:{tituloPage:'Page '} },
            { path: 'page/edit/:id', component: PageEditComponent, data:{tituloPage:'Page Edit '} },
            { path: 'page/create', component: PageEditComponent, data:{tituloPage:'Page Create '} },

            { path: 'slider', component: SliderComponent, data:{tituloPage:'Sliders '} },
            { path: 'slider/edit/:id', component: SlidereditComponent, data:{tituloPage:'Sliders Edit '} },
            { path: 'slider/create', component: SlidereditComponent, data:{tituloPage:'Sliders Create '} },

            { path: 'categoria', component: CatIndexComponent, data:{tituloPage:'Categorias '} },
            { path: 'categoria/edit/:id', component: CatEditComponent, data:{tituloPage:'Categoría Edit '} },
            { path: 'categoria/create', component: CatEditComponent, data:{tituloPage:'Categoría Create '} },

            { path: 'configuracion', component: ConfigSiteComponent, data:{tituloPage:'Configuracion '} },
            { path: 'configuracion/edit/:id', component: ConfigSiteComponent, data:{tituloPage:'Configuracion '} },
            { path: 'configuracion/create', component: ConfigSiteComponent, data:{tituloPage:'Producto'} },

            { path: 'cupon', component: CuponComponent, data:{tituloPage:'Cupon'} },

            { path: 'promocion', component: PromocionComponent, data:{tituloPage:'Promocion '} },
            { path: 'promocion/create', component: PromoeditComponent, data:{tituloPage:'Promocion '} },
            { path: 'promocion/edit/:id', component: PromoeditComponent, data:{tituloPage:'Promocion '} },

            { path: 'postal', component: PostalComponent, data:{tituloPage:'Postal'} },

            { path: 'contacto', component: ContactoComponent, data:{tituloPage:'Contacto'} },
            { path: 'contacto/:id', component: ContactodetailsComponent, data:{tituloPage:'Contacto'} },

            {path: 'tikets/modulo', component: AdminTicketComponent, data:{tituloPage:'Ticket'}},
            {path: 'tikets/modulo/chat/:id', component: AdminChatComponent, data:{tituloPage:'Ticket'}},

            {path: 'cancelacion/modulo', component: IndexCancelacionComponent , data:{tituloPage:'Cancelación'}},
            {path: 'cancelacion/modulo/detalle/:id', component: DetalleCancelacionComponent , data:{tituloPage:'Cancelación'}},

            {path: 'ventas/modulo', component: AdminVentasComponent , data:{tituloPage:'Ventas'}},
            {path: 'ventas/modulo/invoice/:id', component: InvoiceComponent , data:{tituloPage:'Ventas'}},
            {path: 'ventas/modulo/detalle/:id', component: AdminDetalleventasComponent , data:{tituloPage:'Ventas'}},

         
            {path: 'transferencias', component: ListaTrasnferenciasComponent , data:{tituloPage:'transferencias'}},
            // ruta 'pagosefectivo' agregada por José Prados
            {path: 'pagosefectivo', component: PagosEfectivoComponent, data:{tituloPage:'Pagos en Efectivo'}},
            {path: 'tipos-de-pago', component: TiposdepagoComponent , data:{tituloPage:'tipos-de-pago'}},
            
            
            //mantenimientos


            //rutas de admin
            // canActivate: [ AdminGuard ],
            { path: 'usuarios',  component: UsuariosComponent, data:{tituloPage:'Mantenimiento de Usuarios '} },
]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
    exports: [ RouterModule ]
})
export class ChildRoutesModule { }
