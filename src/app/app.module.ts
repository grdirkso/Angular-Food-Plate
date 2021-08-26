import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlateComponent } from './plate/plate.component';
import { MessageComponent } from './message/message.component';
import { RegisterComponent } from './register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FarmersMarketsComponent } from './farmers-markets/farmers-markets.component';
import { FoodGroupsModule } from './food-groups/food-groups.module';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeBtnComponent,
    PlateComponent,
    MessageComponent, 
    NavComponent,
    RegisterComponent,
    DefaultComponent,
    ExercisesComponent,
    FarmersMarketsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FoodGroupsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
