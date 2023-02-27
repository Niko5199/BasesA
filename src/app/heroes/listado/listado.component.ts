import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  message: string = '';
  heroe_delete: string = '';
  flag: boolean = false;

  borrarHeroe() {
    this.heroe_delete = this.heroes.shift() || '';
  }
}
