import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitNumberComponent } from './components/submit-number/submit-number.component';

const routes: Routes = [{path: 'checkNumber', component: SubmitNumberComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
