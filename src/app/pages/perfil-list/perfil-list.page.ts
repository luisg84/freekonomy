import { Component, OnInit } from '@angular/core';
import {USERS} from '../../data/data.users';
import { from } from 'rxjs';
import { User } from '../../interfaces/user.interface';


@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.page.html',
  styleUrls: ['./perfil-list.page.scss'],
})
export class PerfilListPage implements OnInit {

  users:User[] = [];

  constructor() { 

    this.users = USERS.slice(0);
  }

  ngOnInit() {
  }

}
