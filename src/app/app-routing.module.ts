import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'perfil-list', loadChildren: './pages/perfil-list/perfil-list.module#PerfilListPageModule' },
  { path: 'perfil/:id/:name/:user/:ciudad/:tipo/:preciomin/:calificacion', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
