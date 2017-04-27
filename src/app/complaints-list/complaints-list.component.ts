import { Component, OnInit } from '@angular/core';
import { IComplaint } from 'app/complaint';

@Component({
  selector: 'app-complaints-list',
  templateUrl: './complaints-list.component.html',
  styleUrls: ['./complaints-list.component.css']
})
export class ComplaintsListComponent implements OnInit {
  showForm:boolean=false;
  filterString: string='';
  complaints:IComplaint[]=[
 {
     "id": 1,
   "region": "Northwest",
   "territory": 284,
   "grower": "Smith, Steve - Othello, WA",
   "retailer": "ABC - Connell, WA",
   "dateFiled": "2014-06-22",
   "status": "Complete",
   "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae quibusdam debitis est laboriosam repellendus, tenetur similique aperiam aspernatur eius!"
   
 },
 {
     "id": 2,
   "region": "East Central",
   "territory": 223,
   "grower": "Fay, Preston - Mebane, NC",
   "retailer": "DEF - Hillsborough, NC",
   "dateFiled": "2014-06-05",
   "status": "Pending Payment",
   "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae quibusdam debitis est laboriosam repellendus, tenetur similique aperiam aspernatur eius!"
   
 },
 {
     "id": 3,
   "region": "East",
   "territory": 18,
   "grower": "Marc, Mathis - Lorimor, IA",
   "retailer": "DEF - Creston, IA",
   "dateFiled": "2014-05-13",
   "status": "In Process",
   "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae quibusdam debitis est laboriosam repellendus, tenetur similique aperiam aspernatur eius!"
   
 },
 {
     "id": 4,
   "region": "West",
   "territory": 96,
   "grower": "Miner, Owen - Orland, CA",
   "retailer": "GHI - Orland, CA",
   "dateFiled": "2014-04-22",
   "status": "In Process",
   "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae quibusdam debitis est laboriosam repellendus, tenetur similique aperiam aspernatur eius!"
   
 },
 {
     "id": 5,
   "region": "West",
   "territory": 89,
   "grower": "Tim Chelok - Colusa, CA",
   "retailer": "RET - Yuba City, CA",
   "dateFiled": "2014-03-08",
   "status": "In Process",
   "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae quibusdam debitis est laboriosam repellendus, tenetur similique aperiam aspernatur eius!"
   
 },
 {
     "id": 6,
   "region": "East",
   "territory": 29,
   "grower": "Thompson, Ken - Creston, IA",
   "retailer": "DEF - Creston, IA",
   "dateFiled": "2014-01-15",
   "status": "In Process",
   "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae quibusdam debitis est laboriosam repellendus, tenetur similique aperiam aspernatur eius!"
   
 },
 {
     "id": 7,
   "region": "Northwest",
   "territory": 287,
   "grower": "Termotto, Jim - Connell, WA",
   "retailer": "ABC - Connell, WA",
   "dateFiled": "2014-01-05",
   "status": "Complete",
   "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae quibusdam debitis est laboriosam repellendus, tenetur similique aperiam aspernatur eius!"
   
 },
 {
     "id": 8,
   "region": "Northwest",
   "territory": 287,
   "grower": "Cooper, Jeremy - Sunnyside, WA",
   "retailer": "ABC - Connell, WA",
   "dateFiled": "2014-01-01",
   "status": "Complete",
   "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae quibusdam debitis est laboriosam repellendus, tenetur similique aperiam aspernatur eius!"
   
 },
 {
     "id": 9,
   "region": "East",
   "territory": 29,
   "grower": "Toft, Jimmy - Lenox, IA",
   "retailer": "DEF - Lenox, IA",
   "dateFiled": "2013-11-20",
   "status": "In Process",
   "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae quibusdam debitis est laboriosam repellendus, tenetur similique aperiam aspernatur eius!"
   
 },
 {
     "id": 10,
   "region": "East",
   "territory": 29,
   "grower": "Toft, Andy - Lenox, IA",
   "retailer": "DEF - Lenox, IA",
   "dateFiled": "2013-11-06",
   "status": "In Process",
   "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae quibusdam debitis est laboriosam repellendus, tenetur similique aperiam aspernatur eius!"
   
 }
];
  constructor() { }

  ngOnInit() {
  }
toggleShowForm():void{
  this.showForm=!this.showForm;
  console.log("showForm:"+this.showForm);
}
}
