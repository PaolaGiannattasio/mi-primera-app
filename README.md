# Mi Primera App - Formulario Reactivo en Angular

## Descripción del proyecto

Este proyecto fue desarrollado como parte de la actividad "Formulario Interactivo" de la Unidad 2 del curso Angular Básico.

La aplicación implementa un formulario reactivo utilizando Angular Reactive Forms y las directivas integradas de Angular para proporcionar validaciones y comportamiento dinámico en la interfaz.

### Funcionalidades implementadas

* Formulario reactivo con FormBuilder.
* Campo Nombre obligatorio con mínimo de 3 caracteres.
* Campo Email obligatorio con formato válido.
* Campo Mensaje opcional.
* Validaciones dinámicas de los campos.
* Uso de la directiva *ngIf para mostrar mensajes de confirmación.
* Uso de la directiva *ngFor para listar errores de validación.
* Uso de [ngClass] para resaltar campos inválidos.
* Uso de [ngStyle] para modificar el color del título cuando el formulario es válido.
* Botón de envío deshabilitado mientras el formulario sea inválido.
* Visualización de datos enviados en la consola.
* Reinicio automático del formulario después de un envío exitoso.

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

## Ejemplo de salida en consola

Al enviar correctamente el formulario se muestra:

```text
Datos enviados:
{
  nombre: 'Pao Gianna',
  email: 'pao@email.com',
  mensaje: 'Hola Angular'
}
```

## Estructura principal

```text
src/
└── app/
    ├── app.ts
    ├── app.html
    ├── app.css
    └── registro/
        ├── registro.ts
        ├── registro.html
        └── registro.css
```

## Capturas de pantalla

En la carpeta /screenshots Se incluyen capturas que muestran:

1. Formulario con errores de validación.
2. Formulario válido.
3. Mensaje de formulario enviado correctamente.

## Autor

Paola Giannattasio

Curso: Angular Básico

Unidad 2 - Directivas y Formularios

## Bibliografía

Angular. Reactive Forms.
https://angular.dev/guide/forms/reactive-forms

Angular. Built-in Directives.
https://angular.dev/guide/directives

Angular. Forms in Angular.
https://angular.dev/guide/forms

Freeman, A. Pro Angular 9. 6ª edición. Apress, 2020.

