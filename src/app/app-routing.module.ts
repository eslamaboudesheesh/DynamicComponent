import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ChildsecondComponent } from './childsecond/childsecond.component';



const routes: Routes = [
  { path: 'firstChild', component: ChildComponent },
  { path: 'secondChild', component: ChildsecondComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
