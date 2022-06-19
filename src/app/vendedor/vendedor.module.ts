import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaProveedoresComponent } from './lista-proveedores/lista-proveedores.component';
import { ModificacionProductosComponent } from './modificacion-productos/modificacion-productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MenuProductosComponent } from './menu-productos/menu-productos.component';


@NgModule({
  declarations: [
    AltaProductoComponent,
    ListaProductosComponent,
    ListaProveedoresComponent,
    ModificacionProductosComponent,
    PedidosComponent,
    MenuProductosComponent
  ],
  imports: [
    CommonModule,
    VendedorRoutingModule
  ]
})
export class VendedorModule { }
