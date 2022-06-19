import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VisibilidadInicioService } from './visibilidad/visibilidad-inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl:'./inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class InicioComponent implements OnInit {

    estaVisible: boolean;

    //@Output() cambioDeVisibilidad: EventEmitter<boolean>;

  constructor(   private visibilidadInicioService : VisibilidadInicioService) {
  // this.cambioDeVisibilidad = new EventEmitter(); // Inicializa EvenEmitter
    this.estaVisible = true;

   }

  ngOnInit(): void {
   // this.visibilidadInicioService.mostrarInicio();
   this.visibilidadInicioService.cambioDeVisibilidad.subscribe((estaVisible:boolean) =>
   {
    this.estaVisible= estaVisible;});
  }

}
