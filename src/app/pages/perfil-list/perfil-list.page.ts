import { Component, OnInit } from '@angular/core';
import {USERS} from '../../data/data.users';
import { from } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.page.html',
  styleUrls: ['./perfil-list.page.scss'],
})
export class PerfilListPage implements OnInit {

  users:User[] = [];

  constructor(public router: Router) { 

    this.users = USERS.slice(0);
  }

  irPerfil(id:string,name:string,user:string,imagen:string,ciudad:string,tipo:string,preciomin:string,calificacion:string){
    console.log("llendo al perfil de: "+id);
    this.router.navigate(['/perfil/'+id+'/'+name+'/'+user+'/'+ciudad+'/'+tipo+'/'+preciomin+'/'+calificacion]);
  }

  ngOnInit() {
 
  }

}
