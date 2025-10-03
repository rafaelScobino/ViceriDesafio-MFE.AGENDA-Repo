import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
@Component({
  selector: 'app-schedule-calendar',
  standalone: true,
  imports: [CalendarModule,CommonModule,TableModule],
  templateUrl: './schedule-calendar.component.html',
  styleUrl: './schedule-calendar.component.scss'
})
export class ScheduleCalendarComponent {
weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex"];
hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

}
