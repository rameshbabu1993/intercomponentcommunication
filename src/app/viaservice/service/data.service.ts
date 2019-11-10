import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private dataSource = new BehaviorSubject({subData:{ first_name: "", last_name: ""},formSubmitted: false});
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: any) {
    this.dataSource.next(data)
  }

}