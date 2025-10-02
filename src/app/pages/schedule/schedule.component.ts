import { Component } from '@angular/core';
import { ScheduleHeaderComponent } from './components/schedule-header/schedule-header.component';
import { ScheduleMenuComponent } from './components/schedule-menu/schedule-menu.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ModalEventComponent } from './components/modals/modal-event/modal-event.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    ScheduleHeaderComponent,
    ScheduleMenuComponent,
    ScheduleCalendarComponent,
    ModalEventComponent
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

}
