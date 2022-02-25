import { Component, OnInit } from '@angular/core';
import { Medicament } from '../medicament'
import { MedicamentService } from '../medicament.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-medicament-list',
  templateUrl: './medicament-list.component.html',
  styleUrls: ['./medicament-list.component.css']
})
export class MedicamentListComponent implements OnInit {

  medicaments: Medicament[];

  constructor(private medicamentService: MedicamentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMedicaments();
  }

  private getMedicaments(){
    this.medicamentService.getMedicamentsList().subscribe((data) => {
      this.medicaments = data;
    });
  }

  medicamentDetails(id: number){
    this.router.navigate(['medicament-details', id]);
  }

  updateMedicament(id: number){
    this.router.navigate(['update-medicament', id]);
  }

  deleteMedicament(id: number){
    this.medicamentService.deleteMedicament(id).subscribe( data => {
      console.log(data);
      this.getMedicaments();
    })
  }
}
