import { Pipe, PipeTransform } from '@angular/core';
import { IComplaint } from "app/complaint";

@Pipe({
  name: 'byTerritory'
})
export class ByTerritoryPipe implements PipeTransform {

  transform(value:IComplaint[], filterBy: string): IComplaint[] {
    filterBy=filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((complaint:IComplaint)=>
    complaint.region.toLocaleLowerCase().indexOf(filterBy)!==-1) :value;
  }
  
}
