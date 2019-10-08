import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { USERS } from '../../data/data.users';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  idperfil:string;
  nameU:string;
  userp:string;
  imagen:string;
  ciudad:string;
  tipo:string;
  preciomin:string;
  calificacion:string;
  imgrut:string;

  users:User[];
  objUser : User;
  


  constructor( public router: Router, public route: ActivatedRoute) {
    this.users = USERS.slice(0);
   }

  ngOnInit() {
   
    this.idperfil = this.route.snapshot.paramMap.get('id');
    this.nameU = this.route.snapshot.paramMap.get('name');
    this.userp = this.route.snapshot.paramMap.get('user');
    this.imagen = this.route.snapshot.paramMap.get('id');
    this.ciudad = this.route.snapshot.paramMap.get('ciudad');
    this.tipo = this.route.snapshot.paramMap.get('tipo');
    this.preciomin = this.route.snapshot.paramMap.get('preciomin');
    this.calificacion = this.route.snapshot.paramMap.get('calificacion');

    switch(this.imagen) { 
      case "1": { 
        this.imgrut="assets/perfilpic/rene.jpg";
         break; 
      } 
      case "2": { 
        this.imgrut="assets/perfilpic/lucho.jpg";
         break; 
      } 
      case "3": { 
        this.imgrut="assets/perfilpic/joely.jpg";
        break; 
     } 
     case "4": { 
      this.imgrut="assets/perfilpic/lu.jpg";
      break; 
   } 
   case "5": { 
    this.imgrut="assets/perfilpic/larra.jpg";
    break; 
 } 
      default: { 
         //statements; 
         break; 
      } 
   } 

    console.log(this.idperfil,this.nameU);
  };

  
  
}
