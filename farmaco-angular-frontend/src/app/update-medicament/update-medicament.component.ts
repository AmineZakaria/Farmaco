import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../medicament.service';
import { Medicament } from '../medicament';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-medicament',
  templateUrl: './update-medicament.component.html',
  styleUrls: ['./update-medicament.component.css']
})
export class UpdateMedicamentComponent implements OnInit {

  id: number;
  medicament: Medicament = new Medicament();
  constructor(private medicamentService: MedicamentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.medicamentService.getMedicamentById(this.id).subscribe(data => {
      this.medicament = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.medicamentService.updateMedicament(this.id, this.medicament).subscribe( data =>{
      this.goToMedicamentList();
    }
    , error => console.log(error));
  }

  goToMedicamentList(){
    this.router.navigate(['/medicaments']);
  }
}
