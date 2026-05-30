import { Component } from '@angular/core';
import { Registro } from './registro/registro';

@Component({
  selector: 'app-root',
  imports: [Registro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  titulo = 'Mi primera aplicación Angular';

  nombre = 'Pao';

  motivo = 'Quiero aprender Angular para crear aplicaciones modernas';

}