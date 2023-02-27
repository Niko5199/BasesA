import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title ? title : 'No Existe' }}</h1>
    <h3>
      La base es: <strong> {{ base }}</strong>
    </h3>
    <button (click)="acumular(base)">+ {{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  title = 'Contador App';
  numero: number = 0;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
