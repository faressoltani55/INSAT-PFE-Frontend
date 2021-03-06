import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Address } from 'src/app/utils/models/User';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  id = '6014276c273a2a3f58be90a4';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudent(this.id).subscribe( data => {
        this.profile = data;
        if(! this.profile.address){
          this.profile.address = new Address();
        }
        console.log(data);
    })
  }

  submit(): void{
    this.studentService.updateStudent(this.id, this.profile).subscribe();
  }

}
