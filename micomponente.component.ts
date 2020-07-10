import {Component} from '@angular/core';

@Component ({
selector: 'app-micomponente',
templateUrl: './micomponente.component.html',
styles: ['h1 { font-weight: normal; color:darkgray }']

})
export class micomponente{
  Nombre: string='Luis';
  Apellido: string='Lopez';
  Departamento: string='Masaya';
  Ciudad: string='Masatepe'; 
    
}

