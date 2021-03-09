import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { ChildComponent } from './components/parent/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ProductOneComponent } from './components/product-one/product-one.component';
import { ProductTwoComponent } from './components/product-two/product-two.component';

const routes: Routes = [
  { path:'', component: DatabindingComponent },
  { path:'parent', component: ParentComponent },
  { path:'productone', component: ProductOneComponent },
  { path:'producttwo', component: ProductTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
