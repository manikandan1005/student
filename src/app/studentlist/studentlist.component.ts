import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-studentlist',
  standalone: false,
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.scss'
})
export class StudentlistComponent implements OnInit {
  data=inject(DataService);
   
  ngOnInit(): void {
     this.data.studentNames$.subscribe((names)=>{
      this.studentList=[...this.studentList,...names];
      this.filterData=[...this.studentList];
     })
  }
  search:string="";
  studentList: any[] = [
  {
    firstName: "Manikandan",
    lastName: "S",
    city: "Chennai",
    course: "Angular",
    status: true
  },
  {
    firstName: "Priya",
    lastName: "Raj",
    city: "Coimbatore",
    course: "React",
    status: false
  },
  {
    firstName: "Karthik",
    lastName: "V",
    city: "Madurai",
    course: "Node.js",
    status: true
  },
  {
    firstName: "Divya",
    lastName: "Shree",
    city: "Trichy",
    course: "Java",
    status: false
  },
  {
    firstName: "Arun",
    lastName: "Kumar",
    city: "Salem",
    course: "MongoDB",
    status: true
  },
  {
    firstName: "Sneha",
    lastName: "B",
    city: "Erode",
    course: "HTML",
    status: false
  },
  {
    firstName: "Ravi",
    lastName: "M",
    city: "Vellore",
    course: "CSS",
    status: true
  },
  {
    firstName: "Meena",
    lastName: "Sundar",
    city: "Tirunelveli",
    course: "JavaScript",
    status: true
  },
  {
    firstName: "Vikram",
    lastName: "Das",
    city: "Tiruppur",
    course: "Python",
    status: false
  },
  {
    firstName: "Lakshmi",
    lastName: "N",
    city: "Thanjavur",
    course: "TypeScript",
    status: true
  }
];

  filterData:any[]=[];

  filterList(event:any){
    const select= event.target.value;
    if(select==='full list'){
      this.studentList=this.filterData;
    }
    else if(select==='completed'){
      this.studentList=this.filterData.filter(student=>student.status===true);
    }
    else if(select==="Not Completed"){
      this.studentList=this.filterData.filter(student=>student.status===false);
    }
  }
}
