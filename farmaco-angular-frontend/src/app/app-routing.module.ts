import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicamentListComponent } from './medicament-list/medicament-list.component';
import { CreateMedicamentComponent } from './create-medicament/create-medicament.component';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';
import { MedicamentDetailsComponent } from './medicament-details/medicament-details.component';

const routes: Routes = [
  {path: 'medicaments', component: MedicamentListComponent},
  {path: 'create-medicament', component: CreateMedicamentComponent},
  {path: '', redirectTo: 'medicaments', pathMatch: 'full'},
  {path: 'update-medicament/:id', component: UpdateMedicamentComponent},
  {path: 'medicament-details/:id', component: MedicamentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
