import {Component} from '@angular/core';

@Component ({
selector: 'app-micomponente',
templateUrl: './micomponente.component.html',
styles: ['h3 { font-weight: normal; color:darkgray }']

})
export class micomponente{
    hoy:any = new Date();
    
}
