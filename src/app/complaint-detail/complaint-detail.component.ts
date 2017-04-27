import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComplaint } from '../complaint';
import { ComplaintService } from '../complaint.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  templateUrl: './complaint-detail.component.html',
  styleUrls: ['./complaint-detail.component.css']
})
export class ComplaintDetailComponent implements OnInit {
  pageTitle: string ='Complaint Detail';
  complaint:IComplaint;
  errorMessage:string;
  private sub:Subscription;

  constructor(private _route:ActivatedRoute, 
  private _router: Router, 
  private _complaintService:ComplaintService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getComplaintById(id);
        });
  }
  onBack(): void{
    this._router.navigate(['/complaints']);
  }
  getComplaintById(id: number) {
        this._complaintService.getComplaintById(id).subscribe(
            complaint => this.complaint = complaint,
            error => this.errorMessage = <any>error);
    }
}
