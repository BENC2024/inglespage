import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalsComponent } from './animals/animals.component'
import { ColorsComponent } from './colors/colors.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VowelsComponent } from './vowels/vowels.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
   {path: 'animals', component: AnimalsComponent},
   {path: 'colors', component: ColorsComponent},
   {path: 'fruits', component: FruitsComponent},
   {path: 'vowels', component: VowelsComponent},
   {path: '', component: PresentationComponent},
   {path: 'presentation', component: PresentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
