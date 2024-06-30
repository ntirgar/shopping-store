import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DealsComponent } from './pages/home/components/deals/deals.component';
import { ProductsComponent } from './pages/home/components/products/products.component';
import { ProductCardComponent } from './pages/home/components/product-card/product-card.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CartComponent } from './pages/cart/cart.component';
import { CartItemCardComponent } from './pages/cart/components/cart-item-card/cart-item-card.component';
import { QuantityStepperComponent } from './pages/cart/components/quantity-stepper/quantity-stepper.component';
import { SuccessComponent } from './pages/success/success.component';
import { BtnContinueComponent } from './pages/home/components/btn-continue/btn-continue.component';
import { CancelComponent } from './pages/cancel/cancel.component';

@NgModule({
  declarations: [
  
    FooterComponent,
       HomeComponent,
       DealsComponent,
       ProductsComponent,
       ProductCardComponent,
       TruncatePipe,
       CartComponent,
       CartItemCardComponent,
       QuantityStepperComponent,
       SuccessComponent,
       BtnContinueComponent,
       CancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
