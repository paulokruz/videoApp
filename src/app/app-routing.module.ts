import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mortal-kombat',
    loadChildren: () => import('./filmes/mortal-kombat/mortal-kombat.module').then( m => m.MortalKombatPageModule)
  },
  {
    path: 'riverdance',
    loadChildren: () => import('./filmes/riverdance/riverdance.module').then( m => m.RiverdancePageModule)
  },
  {
    path: 'mother-android',
    loadChildren: () => import('./filmes/mother-android/mother-android.module').then( m => m.MotherAndroidPageModule)
  },
  {
    path: 'the-whell-of-time',
    loadChildren: () => import('./filmes/the-whell-of-time/the-whell-of-time.module').then( m => m.TheWhellOfTimePageModule)
  },
  {
    path: 'dados-filmes',
    loadChildren: () => import('./dados-filmes/dados-filmes.module').then( m => m.DadosFilmesPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
