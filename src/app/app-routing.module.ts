import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SMTComponent} from './smt/smt.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SMTComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
