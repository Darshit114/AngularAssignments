import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';
import { ProductOneComponent } from './components/product-one/product-one.component';
import { ProductTwoComponent } from './components/product-two/product-two.component';
import { ProductService } from './Services/product.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    ParentComponent,
    ChildComponent,
    ProductOneComponent,
    ProductTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
