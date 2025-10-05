import { AgendaEvento } from './../classes/agenda-evento';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaSharedService {
private initalAgendaList:AgendaEvento[] = [];

private state$ = new BehaviorSubject(this.initalAgendaList)

public getState(){


  return this.state$.asObservable();
}

public setState(value:AgendaEvento){

  const newList:AgendaEvento[] = [...this.initalAgendaList, value];

  this.state$.next(newList);
  console.log( this.state$);
}




  constructor() { }
}
