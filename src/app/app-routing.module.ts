import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerDetailComponent } from './server-detail/server-detail.component';

const routes: Routes = [
  {
    path: 'serverdetails',
    component: ServerDetailComponent,
    data: { title: 'Server details' }
  }, 
  { 
    path: '',
    redirectTo: '/serverdetails',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
