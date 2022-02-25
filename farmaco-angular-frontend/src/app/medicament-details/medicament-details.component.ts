import { Component, OnInit } from '@angular/core';
import { Medicament } from '../medicament';
import { ActivatedRoute } from '@angular/router';
import { MedicamentService } from '../medicament.service';

@Component({
  selector: 'app-medicament-details',
  templateUrl: './medicament-details.component.html',
  styleUrls: ['./medicament-details.component.css']
})
export class MedicamentDetailsComponent implements OnInit {

  id: number
  medicament: Medicament
  constructor(private route: ActivatedRoute, private medicamentService: MedicamentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.medicament = new Medicament();
    this.medicamentService.getMedicamentById(this.id).subscribe( data => {
      this.medicament = data;
    });
  }

}
