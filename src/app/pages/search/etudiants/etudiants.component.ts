import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  students: any;
  loading: boolean;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loading = false;
    this.getStudents();
  }

  getStudents(): void {
    this.loading = true;
    this.studentService.getAll().subscribe((data) => {
      this.students = data;
      this.loading = false;
    });
  }

}
