import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { AgendaEvento } from '../../../../shared/classes/agenda-evento';
import { AgendaSharedService, IAgendaConfig } from '../../../../shared/services/agenda-shared.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-schedule-calendar',
  standalone: true,
  imports: [CalendarModule,CommonModule,TableModule],
  templateUrl: './schedule-calendar.component.html',
  styleUrl: './schedule-calendar.component.scss'
})
export class ScheduleCalendarComponent {
 agendaList: AgendaEvento[] = [];

agendaConfigs!:IAgendaConfig;

weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
dayIndexes = [0, 1, 2, 3, 4, 5, 6];
hours = Array.from({ length: 24 }, (_, i) => i);

eventos = [
  { titulo: 'Reunião', diaSemana: 1, hora: 9 },
  { titulo: 'Treino', diaSemana: 3, hora: 18 },
  { titulo: 'Dentista', diaSemana: 5, hora: 10 }
];

  private subscriptions = new Subscription();

  constructor(private stateService: AgendaSharedService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.stateService.getAgendaConfigState()
        .subscribe(config => this.agendaConfigs = config)
    );

    this.subscriptions.add(
      this.stateService.getState()
        .subscribe(list => this.agendaList = list)
    );
  }

  getEvento(hora: number, diaSemana: number) {
  return this.eventos.find(
    e => e.hora === hora && e.diaSemana === diaSemana
  );
}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
