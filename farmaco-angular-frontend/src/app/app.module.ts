import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicamentListComponent } from './medicament-list/medicament-list.component';
import { CreateMedicamentComponent } from './create-medicament/create-medicament.component';
import { FormsModule} from '@angular/forms';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';
import { MedicamentDetailsComponent } from './medicament-details/medicament-details.component'

@NgModule({
  declarations: [
    AppComponent,
    MedicamentListComponent,
    CreateMedicamentComponent,
    UpdateMedicamentComponent,
    MedicamentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }