import { Component } from '@angular/core';
import { ComplaintService } from './complaint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ComplaintService]
})
export class AppComponent {
  title = 'app works!';
  constructor(private _complaintService:ComplaintService){}
}
