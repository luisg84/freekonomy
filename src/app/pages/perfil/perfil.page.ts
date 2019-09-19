import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {USERS} from '../../data/data.users';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  idperfil:string;
  users:User[];
  objUser : User;


  constructor( public router: Router, public route: ActivatedRoute) {
    this.users = USERS.slice(0);
   }

  ngOnInit() {
    this.idperfil = this.route.snapshot.paramMap.get('id');
  };

  


}
