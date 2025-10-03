import { Component, ViewChild } from '@angular/core';
import { ScheduleHeaderComponent } from './components/schedule-header/schedule-header.component';
import { ScheduleMenuComponent } from './components/schedule-menu/schedule-menu.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ModalEventComponent } from './components/modals/modal-event/modal-event.component';
import { SplitterModule } from 'primeng/splitter';
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

  onOpenModalEvento(){
    this.modalEvent.open()
  }

}
