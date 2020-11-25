import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home.module').then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class HomePageRoutingModule {}
