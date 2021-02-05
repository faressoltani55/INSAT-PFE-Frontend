import { Component, OnInit } from '@angular/core';
import { SujetService } from 'src/app/services/sujet.service';
import { Subject } from 'src/app/utils/models/Subject';

@Component({
  selector: 'app-sujets',
  templateUrl: './sujets.component.html',
  styleUrls: ['./sujets.component.css']
})
export class SujetsComponent implements OnInit {

  constructor(private sujetService: SujetService) { }

  sujets: Subject[];
  loading: boolean;
  p: number;

  ngOnInit(): void {
    this.loading = false;
    this.p = 1;
    
    this.getSubjects();
  }

  getSubjects(): void {
    this.loading = true;
    this.sujetService.getAllSujets().subscribe((data) => {
      this.sujets = data;
      console.log(data);
      this.loading = false;
    });
  }
}
