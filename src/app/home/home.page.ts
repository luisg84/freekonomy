import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  item={
    src:"src/assets/img/card.png"
  }

  constructor(public router: Router) {}
    
  irPerfil() {
   //console.log("Hola");
    this.router.navigate(['/perfil-list']);
  }
}
