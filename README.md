# Mi Primera App - Servicios y Pipes en Angular

## Descripción del proyecto

Este proyecto fue desarrollado como parte de la actividad "Gestión y visualización de datos con pipes" correspondiente al Módulo 1 - Unidad 3 de Angular Intermedio.

La aplicación implementa un servicio para administrar productos y utiliza pipes estándar y personalizados para transformar la información antes de mostrarla en pantalla.

## Funcionalidades implementadas

* Servicio de productos para gestionar datos.
* Método para obtener productos (getProductos).
* Método para agregar productos (addProducto).
* Método para eliminar productos (deleteProducto).
* Inyección de dependencias mediante servicios.
* Uso del ciclo de vida ngOnInit para cargar datos iniciales.
* Uso del pipe estándar currency para mostrar precios.
* Uso del pipe estándar date para mostrar fechas.
* Creación de un pipe personalizado descuento.
* Cálculo y visualización de precios con descuento.
* Agregado dinámico de productos.
* Eliminación dinámica de productos.
* Mensaje condicional cuando la lista queda vacía.

## Requisitos

* Node.js
* Angular CLI

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/PaolaGiannattasio/mi-primera-app.git
```

Ingresar al proyecto:

```bash
cd mi-primera-app
```

Instalar dependencias:

```bash
npm install
```

## Ejecución

Iniciar el servidor de desarrollo:

```bash
ng serve
```

Abrir en el navegador:

```text
http://localhost:4200/
```

## Estructura principal

```text
src/
└── app/
    ├── app.ts
    ├── app.html
    ├── producto.ts
    ├── lista-productos/
    │   ├── lista-productos.ts
    │   ├── lista-productos.html
    │   └── lista-productos.css
    ├── servicios/
    │   └── productos.ts
    └── pipes/
        └── descuento-pipe.ts
```

## Capturas de pantalla

Se incluyen capturas mostrando:

1. Lista de productos cargada.
2. Aplicación del pipe currency.
3. Aplicación del pipe date.
4. Funcionamiento del pipe personalizado descuento.
5. Agregado de productos.
6. Eliminación de productos.
7. Mensaje mostrado cuando la lista queda vacía.

## Autor

Paola Giannattasio

Curso: Angular Intermedio

Módulo 1 - Unidad 3

## Bibliografía

Freeman, A. Pro Angular 9. 6ª ed. Apress; 2020.

Angular. Understanding Dependency Injection.
https://angular.dev/guide/di/dependency-injection

Angular. Welcome to the Angular Tutorial.
https://angular.dev/tutorials/learn-angular

Angular. What is Angular?
https://angular.dev/overview
