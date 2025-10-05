import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { AgendaEvento } from '../../../../shared/classes/agenda-evento';
import {
  AgendaSharedService,
  IAgendaConfig,
} from '../../../../shared/services/agenda-shared.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-schedule-calendar',
  standalone: true,
  imports: [CalendarModule, CommonModule, TableModule],
  templateUrl: './schedule-calendar.component.html',
  styleUrl: './schedule-calendar.component.scss',
})
export class ScheduleCalendarComponent {
  @Input() agendaList: AgendaEvento[] = [];

  agendaConfigs!: IAgendaConfig;

  weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  month!: Date;
  week: number = 1;
  monthWeekDays:(number | null)[] = [];
  dayIndexes = [0, 1, 2, 3, 4, 5, 6];
  hours = Array.from({ length: 24 }, (_, i) => ({ hour: i }));

  eventos = [
    { titulo: 'Reunião', diaSemana: 1, hora: 9 },
    { titulo: 'Treino', diaSemana: 3, hora: 18 },
    { titulo: 'Dentista', diaSemana: 5, hora: 10 },
  ];

  private subscriptions = new Subscription();

  constructor(private stateService: AgendaSharedService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.stateService
        .getAgendaConfigState()
        .subscribe((config) => this.setMonthWeekDays(config))
    );

    // this.subscriptions.add(
    //   this.stateService.getState().subscribe((list) => (this.agendaList = list))
    // );
  }

  getEvento(hora: number, diaSemana: number) {
    return this.agendaList.find(
      (e) => e.hora === hora && e.diaSemana === diaSemana && this.monthWeekDays.some(d => e.diaMes == d)
    );
  }

  setMonthWeekDays(config: IAgendaConfig) {
    const { date, week } = config;

    console.log(config)
    const ano = date.getFullYear();
    const mes = date.getMonth();

    const primeiroDia = new Date(ano, mes, 1);
    const primeiroDiaSemana = primeiroDia.getDay();
    const diasNoMes = new Date(ano, mes + 1, 0).getDate();

    const diaInicial = (week - 1) * 7 - primeiroDiaSemana + 1;
    let dias: (number | null)[] = [];

    for (let i = 0; i < 7; i++) {
      let dia = diaInicial + i;
      dias.push(dia > 0 && dia <= diasNoMes ? dia : null);
    }
    this.monthWeekDays = dias;
    console.log(this.monthWeekDays)
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
