import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'producto1';

  actorClicado = -1;

  recibirActorClicado(evento: number){
    this.actorClicado=evento;
  }


}
