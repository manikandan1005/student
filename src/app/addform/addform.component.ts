import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-addform',
  standalone: false,
  templateUrl: './addform.component.html',
  styleUrl: './addform.component.scss'
})
export class AddformComponent {

  data=inject(DataService)
   student:any={
    firstName:"",
    lastName:"",
    city:'',
    course:'',
    status:true
  }
  updatedStudents:any[]=[];
  onAdd(){
    debugger;
    console.log(this.student);
    this.updatedStudents.push({...this.student});
    this.data.studentdata(this.student);
    console.log(this.updatedStudents);
    this.student = {
      firstName: '',
      lastName: '',
      city: '',
      course: '',
      status: false};
  }
}
