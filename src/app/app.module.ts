import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';
import { PlateComponent } from './plate/plate.component';
import { MessageComponent } from './message/message.component';
import { FoodGroupsComponent } from './food-groups/food-groups.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeBtnComponent,
    PlateComponent,
    MessageComponent,
    FoodGroupsComponent,
    NavComponent,
    RegisterComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
