import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  formulario: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['']
    });

  }

  obtenerErrores(campo: string): string[] {

    const control = this.formulario.get(campo);

    if (!control || !control.errors || !control.touched) {
      return [];
    }

    const errores: string[] = [];

    if (control.errors['required']) {
      errores.push('Este campo es obligatorio');
    }

    if (control.errors['minlength']) {
      errores.push('Debe tener al menos 3 caracteres');
    }

    if (control.errors['email']) {
      errores.push('Ingrese un email válido');
    }

    return errores;
  }

  enviar() {

    if (this.formulario.valid) {

      console.log('Datos enviados:', this.formulario.value);

      this.enviado = true;

      this.formulario.reset();
    }

  }
}