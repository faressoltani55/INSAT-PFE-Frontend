import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'app-student-requests',
  templateUrl: './student-requests.component.html',
  styleUrls: ['./student-requests.component.css']
})

export class StudentRequestsComponent implements OnInit {

  @ViewChild('closeSubjectModal') closeSubjectModal: ElementRef;
  supervisionRequests
  loading = false;
  p: number = 1;
  
  constructor( private sujetService: SujetService) { }

  ngOnInit(): void {
    this.getSupervisionRequests();
  }

  getSupervisionRequests(): void {
    this.loading = true;
    this.sujetService.getSubjectByRequestedProfessor(localStorage.getItem('user')).subscribe((data) => {
      this.supervisionRequests = data
      this.loading = false;
    })
  }

  acceptRequest(id){
    this.sujetService.updateSujet(id, { 'professorRequested' : false}).subscribe((data) => {
      this.closeAndReload()
    });
  }

  refuseRequest(id) {
    this.sujetService.updateSujet(id, { 'professorRequested' : false, 'professor': undefined }).subscribe((data) => {
      this.closeAndReload()
    });
  }

  closeAndReload(){
    this.closeSubjectModal.nativeElement.click();
    window.location.reload()
  }

}
