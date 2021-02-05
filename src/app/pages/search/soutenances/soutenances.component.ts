import { Component, OnInit } from '@angular/core';
import { SoutenanceService } from 'src/app/services/soutenance.service';
import { Soutenance } from 'src/app/utils/models/Soutenance';

@Component({
  selector: 'app-soutenances',
  templateUrl: './soutenances.component.html',
  styleUrls: ['./soutenances.component.css']
})
export class SoutenancesComponent implements OnInit {

  constructor(private soutenanceService: SoutenanceService) { }

  soutenances: Soutenance[];
  loading: boolean;

  ngOnInit(): void {
    this.loading = false;
    
    this.getSoutenances();
  }

  getSoutenances(): void {
    this.loading = true;
    this.soutenanceService.getAllSoutenances().subscribe((data) => {
      this.soutenances = data;
      this.soutenances.forEach((item) => {
        item.dateString = new Date(item.dateTime).toLocaleDateString('en-US');
      });
      this.loading = false;
    });
  }

}
