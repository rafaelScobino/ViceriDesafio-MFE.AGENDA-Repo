import { AgendaEvento } from './../../shared/classes/agenda-evento';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ScheduleHeaderComponent } from './components/schedule-header/schedule-header.component';
import { ScheduleMenuComponent } from './components/schedule-menu/schedule-menu.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ModalEventComponent } from './components/modals/modal-event/modal-event.component';
import { SplitterModule } from 'primeng/splitter';
import { AgendaSharedService } from '../../shared/services/agenda-shared.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    ScheduleHeaderComponent,
    ScheduleMenuComponent,
    ScheduleCalendarComponent,
    ModalEventComponent,
    SplitterModule
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit, OnDestroy {

  @ViewChild('modalEvent') modalEvent!: ModalEventComponent;

private stateSubscription!: Subscription;
  agendaList: AgendaEvento[] = [];
  dateSelector:Date  = new Date();
  semanaSelector:number = 1;
  rangeSelector: number = 1;
  todayEvents:string[] = [];
  tomorrowEvents:string[] = [];


constructor(private stateService:AgendaSharedService){}

ngOnInit(): void {
  this.stateSubscription = this.stateService.getState().subscribe((agendaList)=>{
    this.agendaList = agendaList;
    console.log(this.agendaList);
  })
}


  onOpenModalEvento(){
    this.modalEvent.open()
  }


  submitEvento(e:AgendaEvento){
    if(!e) return
    this.stateService.setState(e);
  }

  changeDate(e: Date) {
this.stateService.setAgendaConfigState({date:e});
}
changeWeek(e: number) {
this.stateService.setAgendaConfigState({week:e});
}

ngOnDestroy(){
  this.stateSubscription.unsubscribe()
}


}
