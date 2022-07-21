import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {
newEmployeeClicked = false;
employees = [
  {name:'Nitesh', position:'developer'},
  {name:'Ajay', position:'Youtuber'},
  {name:'Rishabh', position:'Designer'}
];
color: any;
  constructor() { }

  ngOnInit(): void {
  }
model: any = {};
model2:any = {};
addEmployee(){
this.employees.push(this.model);
this.model = {}
}

deleteEmployee(i:any){
  this.employees.splice(i);
  console.log(i)
}
myValue:any;

editEmployee(editEmployeeInfo:any){
this.model2.name = this.employees[editEmployeeInfo].name;
this.model2.position = this.employees[editEmployeeInfo].position;
this.myValue = editEmployeeInfo; 
}
updateEmployee(){
  let editEmployeeInfo = this.myValue;
  for(let i =0; i<this.employees.length; i++){
    if(i==editEmployeeInfo){
      this.employees[i] = this.model2;
      this.model2 = {}
    }
  }  
}


addNewEmployeeBtn(){
  this.newEmployeeClicked = !this.newEmployeeClicked
}
changeColorOne(){
  this.color = !this.color;
  if(this.color){
    return '#ffffff';
  }else{
    return'#f6f6f6';
  }
}

}
