import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-studentlist',
  standalone: false,
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.scss'
})
export class StudentlistComponent implements OnInit {
   
  ngOnInit(): void {
     this.data.studentNames$.subscribe((names)=>{
      this.studentList=names;
     })
  }
  search:string="";
  studentList:any[]=[];

  full(){
    this.studentList;
  }

  completed(){
   //forfilter the 
  }
  notComplet(){}

  constructor(private data:DataService){}
}
