import { Component } from '@angular/core';
import { emittenti } from './emittenti/emittenti.model';
import { emittentiComponent } from './emittenti/emittenti.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app emittenti radiofoniche';
    radios: emittenti[] = 
   
[
  {
     "nome": "Radio Maria",
     "frequenza": 95.1,
     "genere": "religiosa",
     "anno": 1991
  },
  {
     "nome": "Rai Radio 1",
     "frequenza": 87.6,
     "genere": "varie",
     "anno": 1966
  },
  {
     "nome": "Virgin Radio",
     "frequenza": 98.7,
     "genere": "musica",
     "anno": 1999
  },
  {
     "nome": "RTL 102.5",
     "frequenza": 92.4,
     "genere": "musica",
     "anno": 1989
  },
  {
     "nome": "Radio ZETA Italiana",
     "frequenza": 88.9,
     "genere": "musica",
     "anno": 1984
  },
  {
     "nome": "Radio Monte Carlo",
     "frequenza": 106.1,
     "genere": "musica",
     "anno": 1977
  }
]

    sortBynome: boolean = true;
    sortLabel: string = "nome (alfabetico)";
    ordineAlfabetico: boolean = true;

    onSortClick() {
        if (this.sortBynome)
        {
            this.radios = this.radios.sort((a, b) => a.nome.localeCompare(b.nome));
            this.sortLabel = "nome (decrescente)";
        }
        else
        {
            this.radios = this.radios.sort((a, b) => a.frequenza - b.frequenza);
            this.sortLabel = "frequenza (crescente)";
        }
        

    }

    ngInit() {
        this.onSortClick();
    }
}

