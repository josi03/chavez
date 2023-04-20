import { Component, Input } from '@angular/core';
import { emittenti } from './emittenti.model';

@Component({
  selector: 'app-emittenti',
  templateUrl: './emittenti.component.html',
  styleUrls: ['./emittenti.component.css']
})
export class emittentiComponent {
  @Input() emittente: emittenti;


  ngInit() {
    
  }
}