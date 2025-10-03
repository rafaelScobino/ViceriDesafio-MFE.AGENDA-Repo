import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-schedule-menu',
  standalone: true,
  imports: [DatePicker,CommonModule],
  templateUrl: './schedule-menu.component.html',
  styleUrl: './schedule-menu.component.scss'
})
export class ScheduleMenuComponent {
todayTasks = [
  'Reunião com equipe às 10h',
  'Entrega do relatório até 14h',
  'Revisar documento do projeto'
];

tomorrowTasks = [
  'Apresentação ao cliente às 09h',
  'Enviar e-mails pendentes',
  'Planejamento da sprint'
];


}
