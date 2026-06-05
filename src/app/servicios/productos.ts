import { Injectable } from '@angular/core';
import { Producto } from '../producto';

@Injectable({
  providedIn: 'root'
})
export class Productos {

  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Notebook',
      precio: 1200,
      fechaAlta: new Date('2025-01-10')
    },
    {
      id: 2,
      nombre: 'Mouse',
      precio: 50,
      fechaAlta: new Date('2025-03-15')
    },
    {
      id: 3,
      nombre: 'Teclado',
      precio: 100,
      fechaAlta: new Date('2025-05-20')
    }
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  addProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  deleteProducto(id: number): void {
    this.productos = this.productos.filter(
      producto => producto.id !== id
    );
  }
}