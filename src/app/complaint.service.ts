import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IComplaint } from './complaint';

@Injectable()
export class ComplaintService {
    private baseUrl = 'api/complaints';

    constructor(private http: Http) { }

    getComplaints(): Observable<IComplaint[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getComplaints: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getComplaintById(id: number): Observable<IComplaint> {
        if (id === 0) {
        return Observable.of(this.initializeComplaint());
        // return Observable.create((observer: any) => {
        //     observer.next(this.initializecomplaint());
        //     observer.complete();
        // });
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getComplaint: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }


    saveComplaint(complaint: IComplaint): Observable<IComplaint> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (complaint.id === 0) {
            return this.createComplaint(complaint, options);
        }
        return this.updateComplaint(complaint, options);
    }

    private createComplaint(complaint: IComplaint, options: RequestOptions): Observable<IComplaint> {
        complaint.id = undefined;
        return this.http.post(this.baseUrl, complaint, options)
            .map(this.extractData)
            .do(data => console.log('createComplaint: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateComplaint(complaint: IComplaint, options: RequestOptions): Observable<IComplaint> {
        const url = `${this.baseUrl}/${complaint.id}`;
        return this.http.put(url, complaint, options)
            .map(() => complaint)
            .do(data => console.log('updateComplaint: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeComplaint(): IComplaint {
        // Return an initialized object
        return {
          "id": 0,
            "region": null,
   "territory": null,
   "grower": null,
   "retailer": null,
   "dateFiled": "2014-06-22",
   "status": "Open",
   "description":null
   
        };
    }
}