import { AgendaEvento } from './../../shared/classes/agenda-evento';
import { Component, ViewChild } from '@angular/core';
import { ScheduleHeaderComponent } from './components/schedule-header/schedule-header.component';
import { ScheduleMenuComponent } from './components/schedule-menu/schedule-menu.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ModalEventComponent } from './components/modals/modal-event/modal-event.component';
import { SplitterModule } from 'primeng/splitter';
import { AgendaSharedService } from '../../shared/services/agenda-shared.service';
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
export class ScheduleComponent {
  @ViewChild('modalEvent') modalEvent!: ModalEventComponent;

  mesSelector:Date  = new Date();
  semanaSelector:number = 1;
  rangeSelector: number = 1;
  todayEvents:string[] = [];
  tomorrowEvents:string[] = [];


constructor(private stateService:AgendaSharedService){}

  onOpenModalEvento(){
    this.modalEvent.open()
  }


  submitEvento(e:AgendaEvento){
    if(!e) return
    this.stateService.setState(e);
  }


}
