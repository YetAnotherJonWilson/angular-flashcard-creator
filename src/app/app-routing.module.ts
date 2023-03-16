import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckComponent } from './deck/deck.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'deck/:id', component: DeckComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
