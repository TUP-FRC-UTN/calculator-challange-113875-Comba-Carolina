import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculates',
  templateUrl: './calculates.component.html',
  styleUrls: ['./calculates.component.css'],
  standalone: true
})
export class CalculatesComponent {

  @Input() num1: number = 0;
  @Input() num2: number = 0;
  @Output() resultadoEmitter = new EventEmitter<number>(); 
  @Output() limpiarEmitter = new EventEmitter<any>(); 


  sumar() {
    const resultado = this.num1 + this.num2;
    this.resultadoEmitter.emit(resultado);
  }

  restar() {
    const resultado = this.num1 - this.num2;
    this.resultadoEmitter.emit(resultado);
  }

  multiplicar() {
    const resultado = this.num1 * this.num2;
    this.resultadoEmitter.emit(resultado);
  }

  dividir() {
    const resultado = this.num1 / this.num2;
    this.resultadoEmitter.emit(resultado);
  }

  potencia() {
    const resultado = Math.pow(this.num1, this.num2);
    this.resultadoEmitter.emit(resultado);
  }

  raiz() {
    const resultado = Math.sqrt(this.num1);
    this.resultadoEmitter.emit(resultado);
  }

  limpiar() {
    var resultado = 0;
    this.resultadoEmitter.emit(resultado);
    this.limpiarEmitter.emit();
  }
}