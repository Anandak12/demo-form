import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IComplaint } from "app/complaint";

@Injectable()
export class ComplaintService {
// private _complaintUrl='https://raw.githubusercontent.com/iMahesh/demo-form/master/src/api/complaints.json';
 private _complaintUrl='assets/complaints.json';

constructor(private _http:Http){}

    getComplaints(): Observable<IComplaint[]>{
        return this._http.get(this._complaintUrl)
        .map((response: Response)=> <IComplaint[]> response.json())
        .do(data=>console.log('All: '+JSON.stringify(data)))
        .catch(this.handleError);
    }
    getComplaintById(id: number): Observable<IComplaint> {
        return this.getComplaints()
            .map((complaints: IComplaint[]) => complaints.find(p => p.id === id));
    }

    private handleError(error: Response){
      console.error(error);
      return Observable.throw(error.json().error || 'Server Error');
    }
}
