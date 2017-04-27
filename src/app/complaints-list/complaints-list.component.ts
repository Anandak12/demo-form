import { Component, OnInit } from '@angular/core';
import { IComplaint } from 'app/complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-complaints-list',
  templateUrl: './complaints-list.component.html',
  styleUrls: ['./complaints-list.component.css']
})
export class ComplaintsListComponent implements OnInit {
  showForm= false;
  filterString= '';
  order:string='date';
  reverse:boolean=false;
  complaints: IComplaint[];
  errorMessage: string;
  constructor(private _complaintService:ComplaintService) { }

  ngOnInit():void {
  this._complaintService.getComplaints()
  .subscribe(complaints => this.complaints=complaints,
  error=> this.errorMessage=<any>error);
  }
toggleShowForm(): void{
  this.showForm = !this.showForm;
  console.log('showForm:' + this.showForm);
}
changeOrder(text:string):void{
this.order=text;
this.reverse=!this.reverse;
}
}
