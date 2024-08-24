import { Component, Input, OnInit } from '@angular/core';
import { CalculatesComponent } from '../calculates/calculates.component';
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  imports: [AppComponent, CalculatesComponent, FormsModule],
  standalone: true,
})
export class CalculatorComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  actualizarResultado(resultado: number) {
    this.resultado = resultado;
  }

  limpiarCampos() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }
}