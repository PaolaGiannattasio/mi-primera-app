import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Producto } from '../producto';
import { Productos } from '../servicios/productos';
import { DescuentoPipe } from '../pipes/descuento-pipe';

@Component({
  selector: 'app-lista-productos',
  imports: [
    CommonModule,
    DescuentoPipe
  ],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {

  productos: Producto[] = [];

  constructor(
    private productosService: Productos
  ) {}

  ngOnInit(): void {
    this.productos =
      this.productosService.getProductos();
  }

  agregarProducto(): void {

    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre: 'Producto Nuevo',
      precio: 500,
      fechaAlta: new Date()
    };

    this.productosService.addProducto(
      nuevoProducto
    );

    this.productos =
      this.productosService.getProductos();
  }

  eliminarProducto(id: number): void {

    this.productosService.deleteProducto(id);

    this.productos =
      this.productosService.getProductos();
  }
}