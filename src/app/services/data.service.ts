import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 private studentSubject=new BehaviorSubject<any[]>([]);
  studentNames$=this.studentSubject.asObservable();

  studentdata(students:any){
   const currentData= this.studentSubject.getValue();
   const updatedata=[...currentData,students];
   this.studentSubject.next(updatedata);
  }
}
