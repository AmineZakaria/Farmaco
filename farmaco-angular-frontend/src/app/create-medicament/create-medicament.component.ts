import { Component, OnInit } from '@angular/core';
import { Medicament } from '../medicament';
import { MedicamentService } from '../medicament.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicament',
  templateUrl: './create-medicament.component.html',
  styleUrls: ['./create-medicament.component.css']
})
export class CreateMedicamentComponent implements OnInit {

  medicament: Medicament = new Medicament();
  constructor(private medicamentService: MedicamentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMedicament(){
    this.medicamentService.createMedicament(this.medicament).subscribe( data =>{
      console.log(data);
      this.goToMedicamentList();
    },
    error => console.log(error));
  }

  goToMedicamentList(){
    this.router.navigate(['/medicaments']);
  }

  onSubmit(){
    console.log(this.medicament);
    this.saveMedicament();
  }

}
